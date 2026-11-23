import { Constellation } from "./Constellation";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-[1240px] items-end gap-10 px-4 pb-16 pt-6 sm:px-8 lg:grid-cols-2 lg:gap-18 lg:px-14 lg:pb-30 lg:pt-16"
    >
      <div className="flex flex-col gap-8 lg:pt-40">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
          An AI tarot journal · Read from the Dr. Moorne deck
        </p>
        <h1 className="font-display text-[clamp(64px,10vw,148px)] font-normal leading-[0.88] tracking-[-0.01em] text-moon">
          Ask.
          <br />
          <span className="pl-[0.5em] italic text-gold">Draw.</span>
          <br />
          <span className="pl-[1em]">Reflect.</span>
        </h1>
        <p className="max-w-[34em] text-[clamp(18px,1.6vw,21px)] leading-relaxed text-haze">
          Aster reads the cards with you: a question in your own words, a card from an old Spanish deck, and a
          reflection written back to you. Then it keeps the page, so you can see what keeps returning.
        </p>
        <WaitlistForm placement="hero" />
      </div>

      <div className="order-first w-full max-w-[560px] justify-self-end lg:order-none lg:self-start">
        <Constellation />
        <p className="mt-2 text-right font-display text-[17px] italic text-dusk">
          XVII · the card of hope, after the storm
        </p>
      </div>
    </section>
  );
}