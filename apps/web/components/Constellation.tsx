import type { CSSProperties } from "react";
import { STAR_PATH } from "./icons";

// The hero art: a large star inside two orbits, with a constellation drawn
// through bright stars on a dotted grid.
//
// Parallax: each layer sits at a different "depth". Nearer layers move more
// when you scroll or move the mouse, so the picture feels deep. The numbers
// come from MotionDriver; the movement itself is the .parallax rule in globals.css.
const BRIGHT_STARS: [number, number, number][] = [
  [330, 30, 4.4], [450, 30, 1.7], [270, 90, 1.7], [390, 90, 3], [210, 150, 3.9],
  [150, 210, 3.9], [30, 330, 3.5], [150, 330, 2.6], [30, 390, 3.5], [330, 390, 3.9],
];

const FAINT_STARS: [number, number][] = [
  [270, 30], [390, 30], [390, 150], [270, 210], [390, 210], [450, 270],
  [270, 330], [390, 330], [90, 390], [450, 390], [150, 450],
];

const GRID = [60, 120, 180, 240, 300, 360, 420];

// speed: how fast a layer rises as you scroll (negative sinks, like something far away)
// depth: how far it drifts toward the mouse, in pixels
function layer(speed: number, depth: number): CSSProperties {
  return { "--speed": speed, "--depth": depth } as CSSProperties;
}

export function Constellation() {
  return (
    <svg
      viewBox="0 0 480 480"
      role="img"
      aria-label="An eight-pointed star rising among a scattered constellation"
      className="block h-auto w-full"
    >
      {/* Farthest back: the dotted grid */}
      <g className="parallax" style={layer(-0.04, 3)} stroke="#3a1f36" strokeWidth="1" strokeDasharray="1 7" fill="none">
        {GRID.map((n) => (
          <path key={`v${n}`} d={`M${n} 0V480`} />
        ))}
        {GRID.map((n) => (
          <path key={`h${n}`} d={`M0 ${n}H480`} />
        ))}
      </g>

      {/* The two orbits */}
      <g className="parallax" style={layer(0.05, 6)} fill="none" strokeWidth="1">
        <circle cx="330" cy="270" r="150" stroke="#711466" />
        <circle cx="330" cy="270" r="196" stroke="#3a1f36" />
      </g>

      {/* Faint background stars */}
      <g className="parallax" style={layer(0.09, 9)} fill="#c4aebe" fillOpacity="0.55">
        {FAINT_STARS.map(([x, y]) => (
          <circle key={`f${x}-${y}`} cx={x} cy={y} r="1.2" />
        ))}
      </g>

      {/* The constellation: its line and bright stars move together */}
      <g className="parallax" style={layer(0.15, 13)}>
        <path
          d="M330 30 L450 30 L270 90 L390 90 L210 150 L150 210 L330 270 L30 330 L150 330 L30 390 L330 390"
          fill="none"
          stroke="#953567"
          strokeWidth="1"
          strokeOpacity="0.8"
        />
        <g fill="#e8cf6a">
          {BRIGHT_STARS.map(([x, y, r], i) => (
            <circle
              key={`b${x}-${y}`}
              cx={x}
              cy={y}
              r={r}
              className="twinkle"
              style={{ animationDelay: `${((i * -1.3) % 5).toFixed(1)}s` }}
            />
          ))}
        </g>
      </g>

      {/* Nearest: the big star, which also turns slowly as you scroll */}
      <g className="parallax" style={layer(0.24, 20)}>
        <g className="parallax-spin">
          <path transform="translate(330 270) scale(2.15) translate(-50 -50)" d={STAR_PATH} fill="#e8cf6a" />
          <path
            transform="translate(330 270) rotate(22.5) scale(0.95) translate(-50 -50)"
            d={STAR_PATH}
            fill="#1a0b18"
            fillOpacity="0.35"
          />
          <circle cx="330" cy="270" r="5" fill="#1a0b18" />
        </g>
      </g>
    </svg>
  );
}