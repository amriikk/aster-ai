"use client";

import { useEffect } from "react";

// Feeds the parallax. It writes three numbers onto the page as CSS variables:
//   --scroll  how far the page has scrolled, in pixels
//   --mx/--my where the mouse is, from -1 (left/top) to 1 (right/bottom)
// The CSS in globals.css turns those numbers into movement, so React never
// has to re-draw the page while you scroll.
export function MotionDriver() {
  useEffect(() => {
    // People who ask their device for less motion get the still version.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;
    let scheduled = false;

    function update() {
      scheduled = false;
      root.style.setProperty("--scroll", String(Math.round(window.scrollY)));

      // Ease toward the mouse so the stars drift instead of snapping.
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      root.style.setProperty("--mx", current.x.toFixed(3));
      root.style.setProperty("--my", current.y.toFixed(3));

      const settling = Math.abs(target.x - current.x) > 0.001 || Math.abs(target.y - current.y) > 0.001;
      if (settling) request();
    }

    // Draw at most once per screen refresh, and only when something changed.
    function request() {
      if (scheduled) return;
      scheduled = true;
      frame = requestAnimationFrame(update);
    }

    function onPointerMove(event: PointerEvent) {
      target.x = (event.clientX / window.innerWidth) * 2 - 1;
      target.y = (event.clientY / window.innerHeight) * 2 - 1;
      request();
    }

    function onPointerLeave() {
      target.x = 0;
      target.y = 0;
      request();
    }

    // Mouse drift only on computers; on phones the scroll does the work.
    const mouse = window.matchMedia("(pointer: fine)").matches;

    window.addEventListener("scroll", request, { passive: true });
    if (mouse) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onPointerLeave);
    }
    update();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", request);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      for (const name of ["--scroll", "--mx", "--my"]) root.style.removeProperty(name);
    };
  }, []);

  return null;
}