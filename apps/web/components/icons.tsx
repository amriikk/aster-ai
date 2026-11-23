import type { SuitId } from "@aster/deck";

// The eight-pointed star: four long points, four short ones.
const STAR_PATH =
  "M50 4 L53.4 41.7 L68.4 31.6 L58.3 46.6 L96 50 L58.3 53.4 L68.4 68.4 L53.4 58.3 L50 96 L46.6 58.3 L31.6 68.4 L41.7 53.4 L4 50 L41.7 46.6 L31.6 31.6 L46.6 41.7 Z";

export function StarMark({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <path d={STAR_PATH} fill="currentColor" />
    </svg>
  );
}

export { STAR_PATH };

// Line icons for the three steps. They draw in the current text color.
const line = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function MoonIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 48 48" aria-hidden="true" {...line}>
      <path d="M30 6a18 18 0 1 0 0 36a14 14 0 1 1 0-36z" />
      <path d="M36 14v4M34 16h4" />
    </svg>
  );
}

export function CardIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 48 48" aria-hidden="true" {...line}>
      <rect x="13" y="5" width="22" height="38" rx="2.5" />
      <rect x="16.5" y="8.5" width="15" height="31" rx="1" />
      <path d="M24 17l1.6 5.4l5.4 1.6l-5.4 1.6l-1.6 5.4l-1.6-5.4l-5.4-1.6l5.4-1.6z" />
    </svg>
  );
}

export function BookIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 48 48" aria-hidden="true" {...line}>
      <path d="M6 12q9-4 18 0v26q-9-4-18 0z" />
      <path d="M24 12q9-4 18 0v26q-9-4-18 0z" />
      <path d="M10 19h10M10 24h10M28 19h10M28 24h7" />
    </svg>
  );
}

// One drawing per suit of the Spanish deck.
export function SuitIcon({ suit }: { suit: SuitId }) {
  const props = { width: 54, height: 54, viewBox: "0 0 48 48", "aria-hidden": true, ...line, strokeWidth: 1.5 };
  switch (suit) {
    case "copas":
      return (
        <svg {...props}>
          <path d="M13 9h22v5a11 11 0 0 1-22 0z" />
          <path d="M24 25v11M17 39h14M19 36h10" />
          <path d="M16 9q8-5 16 0" />
        </svg>
      );
    case "oros":
      return (
        <svg {...props}>
          <circle cx="24" cy="24" r="15" />
          <circle cx="24" cy="24" r="10" />
          <path d="M24 17l1.5 5.5l5.5 1.5l-5.5 1.5l-1.5 5.5l-1.5-5.5l-5.5-1.5l5.5-1.5z" />
        </svg>
      );
    case "espadas":
      return (
        <svg {...props}>
          <path d="M24 4l3 6v22h-6v-22z" />
          <path d="M15 32h18M24 32v8" />
          <circle cx="24" cy="42.5" r="2.5" />
        </svg>
      );
    case "bastos":
      return (
        <svg {...props}>
          <path d="M17 43l12-36q4-2 5 2l-10 35q-3 2-7-1z" />
          <circle cx="28.5" cy="15" r="2" />
          <circle cx="25" cy="26" r="2" />
          <path d="M30 10q5-2 6 3" />
        </svg>
      );
  }
}