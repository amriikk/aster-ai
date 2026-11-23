import type { ReactNode } from "react";
import { BookIcon, CardIcon, MoonIcon } from "./icons";

type Step = {
  numeral: string;
  title: string;
  italic?: boolean;
  body: string;
  icon: ReactNode;
  offset: string; // pushes cards down in a staircase on wide screens
};

const STEPS: Step[] = [
  {
    numeral: "I",
    title: "Ask",
    body: "Bring a real question. Aster helps you phrase it so the reading has something to hold onto.",
    icon: <MoonIcon />,
    offset: "",
  },
  {
    numeral: "II",
    title: "Draw",
    italic: true,
    body: "Pull from the Dr. Moorne deck: cups, coins, swords and clubs. One card for a quick check-in, or a full spread when it matters.",
    icon: <CardIcon />,
    offset: "md:mt-18",
  },
  {
    numeral: "III",
    title: "Reflect",
    body: "Aster reads the card against your question, then leaves room for you to write back. The reading is the start of the entry, not the end.",
    icon: <BookIcon />,
    offset: "md:mt-36",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="mx-auto flex max-w-[1240px] flex-col gap-10 px-4 py-18 sm:px-8 lg:gap-18 lg:px-14 lg:py-36"
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">How a reading works</p>
          <h2 className="font-display text-[clamp(40px,5.4vw,76px)] font-normal leading-none text-moon">
            Three motions,
            <br />
            <span className="italic">one small ritual.</span>
          </h2>
        </div>
        <p className="max-w-[26em] text-lg leading-relaxed text-lilac">
          A reading takes a few minutes. What you keep from it is up to you.
        </p>
      </div>

      <ol className="grid items-start gap-5 md:grid-cols-3 lg:gap-8">
        {STEPS.map((step) => (
          <li
            key={step.title}
            className={`flex flex-col gap-5 rounded border border-line bg-night-raised px-7 pb-9 pt-8 ${step.offset}`}
          >
            <div className="flex items-start justify-between text-gold">
              {step.icon}
              <span aria-hidden="true" className="font-display text-[40px] leading-none text-mauve">
                {step.numeral}
              </span>
            </div>
            <h3 className={`font-display text-4xl font-normal text-moon ${step.italic ? "italic" : ""}`}>
              {step.title}
            </h3>
            <p className="text-[17px] leading-[1.65] text-lilac">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}