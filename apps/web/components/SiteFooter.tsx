import { StarMark } from "./icons";
import { WaitlistForm } from "./WaitlistForm";

export function JoinSection() {
  return (
    <section
      id="join"
      className="mx-auto flex max-w-[1240px] flex-col items-center gap-7 px-4 pb-16 pt-22 text-center sm:px-8 lg:px-14 lg:pb-26 lg:pt-42"
    >
      <StarMark size={84} className="text-gold" />
      <h2 className="font-display text-[clamp(48px,7vw,104px)] font-normal leading-[0.95] text-moon">
        The cards are
        <br />
        <span className="italic text-gold">shuffling.</span>
      </h2>
      <p className="max-w-[30em] text-[19px] leading-relaxed text-lilac">
        Join the waitlist for early access to Aster, and be among the first to draw.
      </p>
      <WaitlistForm placement="join" />
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-4 pb-10 pt-8 font-mono text-xs uppercase tracking-[0.12em] text-dusk sm:px-8 lg:px-14">
        <span className="flex items-center gap-2.5">
          <span className="font-display text-[22px] normal-case tracking-[0.02em] text-moon">Aster</span>
          Ask. Draw. Reflect.
        </span>
        <span>
          A{" "}
          <a href="https://jotrio.com" className="py-3 text-gold hover:text-gold-light">
            JOTRIO
          </a>{" "}
          project · © 2026
        </span>
      </div>
    </footer>
  );
}