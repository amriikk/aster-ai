import { Hero } from "@/components/Hero";
import { Journal } from "@/components/Journal";
import { DeckPicker } from "@/components/DeckPicker";
import { HowItWorks } from "@/components/HowItWorks";
import { SiteHeader } from "@/components/SiteHeader";
import { JoinSection, SiteFooter } from "@/components/SiteFooter";

const BAND_WORDS = ["Stars", "Flowers", "Signs", "Dreams", "Questions", "Answers"];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />

        {/* The plum band of words between the hero and the steps */}
        <div
          aria-hidden="true"
          className="overflow-hidden whitespace-nowrap border-y border-mauve bg-plum py-4.5 font-display text-[clamp(22px,2.4vw,32px)] italic text-moon"
        >
          <span className="inline-block pl-6">
            {[...BAND_WORDS, ...BAND_WORDS].map((word, i) => (
              <span key={i}>
                {word} <span className="px-2 not-italic text-gold">✦</span>{" "}
              </span>
            ))}
          </span>
        </div>

        <HowItWorks />
        <DeckPicker />
        <Journal />
        <JoinSection />
      </main>
      <SiteFooter />
    </>
  );
}