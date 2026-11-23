import { STAR_PATH } from "./icons";

// The hero art: a large star inside two orbits, with a constellation drawn
// through bright stars on a dotted grid.
const BRIGHT_STARS: [number, number, number][] = [
  [330, 30, 4.4], [450, 30, 1.7], [270, 90, 1.7], [390, 90, 3], [210, 150, 3.9],
  [150, 210, 3.9], [30, 330, 3.5], [150, 330, 2.6], [30, 390, 3.5], [330, 390, 3.9],
];

const FAINT_STARS: [number, number][] = [
  [270, 30], [390, 30], [390, 150], [270, 210], [390, 210], [450, 270],
  [270, 330], [390, 330], [90, 390], [450, 390], [150, 450],
];

const GRID = [60, 120, 180, 240, 300, 360, 420];

export function Constellation() {
  return (
    <svg
      viewBox="0 0 480 480"
      role="img"
      aria-label="An eight-pointed star rising among a scattered constellation"
      className="block h-auto w-full"
    >
      <g stroke="#3a1f36" strokeWidth="1" strokeDasharray="1 7" fill="none">
        {GRID.map((n) => (
          <path key={`v${n}`} d={`M${n} 0V480`} />
        ))}
        {GRID.map((n) => (
          <path key={`h${n}`} d={`M0 ${n}H480`} />
        ))}
      </g>
      <circle cx="330" cy="270" r="150" fill="none" stroke="#711466" strokeWidth="1" />
      <circle cx="330" cy="270" r="196" fill="none" stroke="#3a1f36" strokeWidth="1" />
      <path
        d="M330 30 L450 30 L270 90 L390 90 L210 150 L150 210 L330 270 L30 330 L150 330 L30 390 L330 390"
        fill="none"
        stroke="#953567"
        strokeWidth="1"
        strokeOpacity="0.8"
      />
      <g fill="#c4aebe" fillOpacity="0.55">
        {FAINT_STARS.map(([x, y]) => (
          <circle key={`f${x}-${y}`} cx={x} cy={y} r="1.2" />
        ))}
      </g>
      <g fill="#e8cf6a">
        {BRIGHT_STARS.map(([x, y, r]) => (
          <circle key={`b${x}-${y}`} cx={x} cy={y} r={r} />
        ))}
      </g>
      <path transform="translate(330 270) scale(2.15) translate(-50 -50)" d={STAR_PATH} fill="#e8cf6a" />
      <path
        transform="translate(330 270) rotate(22.5) scale(0.95) translate(-50 -50)"
        d={STAR_PATH}
        fill="#1a0b18"
        fillOpacity="0.35"
      />
      <circle cx="330" cy="270" r="5" fill="#1a0b18" />
    </svg>
  );
}