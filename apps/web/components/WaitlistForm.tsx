"use client";

import { useId, useState, type FormEvent } from "react";
import { describeSource, joinWaitlist } from "@/lib/waitlist";
import { StarMark } from "./icons";

type Status = "idle" | "sending" | "done" | "error";

export function WaitlistForm({ placement }: { placement: "hero" | "join" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const inputId = useId();
  const centered = placement === "join";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    // A hidden field that people never see. Bots fill in every field, so a
    // filled-in "website" means a bot: pretend it worked and send nothing.
    if (form.get("website")) {
      setStatus("done");
      return;
    }
    const email = String(form.get("email") ?? "").trim();
    setStatus("sending");
    try {
      await joinWaitlist(email, describeSource(placement));
      setStatus("done");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <p
        role="status"
        className={`flex items-center gap-3 font-display text-2xl italic text-gold ${centered ? "justify-center" : ""}`}
      >
        <StarMark size={22} />
        You’re on the list. Watch your inbox for the first draw.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full max-w-[520px] flex-col gap-3 ${centered ? "items-center" : ""}`}
    >
      <div className={`flex w-full flex-wrap gap-3 ${centered ? "justify-center" : ""}`}>
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="h-13 min-w-0 flex-[1_1_240px] rounded-full border border-line-strong bg-night-band px-5 font-serif text-[17px] text-moon placeholder:text-dusk"
        />
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="h-13 flex-none cursor-pointer rounded-full bg-ember px-6 font-mono text-[13px] font-medium uppercase tracking-[0.14em] text-night transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? "Joining…" : "Join the waitlist"}
        </button>
      </div>
      <p role="status" className="min-h-5 font-mono text-xs tracking-[0.06em] text-dusk">
        {status === "error" ? message : "One email when early access opens. No spam."}
      </p>
    </form>
  );
}