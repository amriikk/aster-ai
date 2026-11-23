// The light "parchment" section: what a journal page holds, a sample entry,
// and a sample month of readings.

const FEATURES = [
  {
    numeral: "i.",
    title: "In your own words",
    body: "Each entry keeps your question, the card, Aster’s reading and your notes together on one page.",
  },
  {
    numeral: "ii.",
    title: "Patterns by the moon",
    body: "See which suits and cards keep returning across a lunar month, and what you were asking when they did.",
  },
  {
    numeral: "iii.",
    title: "Room to grow",
    body: "Beyond the cards: dreams, symbols and small rituals, gathered into an inner world you can search.",
  },
];

// Sample data for the moon strip: which of 29 nights had a reading, and which drew Cups.
const READ_NIGHTS = new Set([0, 1, 3, 5, 6, 9, 11, 12, 14, 17, 18, 20, 23, 24, 26, 28]);
const CUPS_NIGHTS = new Set([1, 6, 12, 18, 24, 28]);
const NIGHTS = Array.from({ length: 29 }, (_, night) => night);

function nightClasses(night: number): string {
  if (CUPS_NIGHTS.has(night)) return "bg-plum border-rust";
  if (READ_NIGHTS.has(night)) return "bg-plum border-plum";
  return "bg-transparent border-pebble";
}

const label = "font-mono text-[11px] uppercase tracking-[0.18em]";

export function Journal() {
  return (
    <section id="journal" className="bg-parchment text-ink">
      <div className="mx-auto grid max-w-[1240px] items-start gap-10 px-4 py-18 sm:px-8 lg:grid-cols-2 lg:gap-22 lg:px-14 lg:py-36">
        <div className="flex flex-col gap-7">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-plum">The journal</p>
          <h2 className="font-display text-[clamp(40px,5vw,68px)] font-normal leading-[1.02]">
            Every reading
            <br />
            <span className="italic text-plum">becomes a page.</span>
          </h2>
          <ul className="border-t border-rule">
            {FEATURES.map((feature) => (
              <li key={feature.title} className="grid grid-cols-[48px_1fr] gap-4 border-b border-rule py-5.5">
                <span aria-hidden="true" className="font-display text-[26px] text-mauve">
                  {feature.numeral}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-[26px] font-normal">{feature.title}</h3>
                  <p className="text-[17px] leading-relaxed text-ink-soft">{feature.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <article
            aria-label="Sample journal entry"
            className="flex flex-col gap-5.5 rounded-md bg-night p-6 text-moon shadow-[0_24px_60px_-30px_rgba(42,18,38,0.55)] lg:p-10"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-lilac">Sample entry · Waning moon</span>
              <span className="rounded-full bg-gold px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-night">
                Copas · Cups
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={`${label} text-dusk`}>You asked</span>
              <p className="font-display text-[clamp(26px,2.6vw,32px)] leading-[1.2]">What am I ready to let go of?</p>
            </div>
            <div className="flex flex-col gap-1.5 border-t border-line pt-4.5">
              <span className={`${label} text-dusk`}>Aster reflects</span>
              <p className="text-[17px] leading-[1.65] text-haze">
                Cups ask what you are holding out of habit rather than love. Notice which feeling arrives first when you
                picture setting it down. That one is worth writing about.
              </p>
            </div>
            <div className="flex flex-col gap-1.5 border-t border-line pt-4.5">
              <span className={`${label} text-dusk`}>You wrote</span>
              <p className="text-lg italic leading-relaxed">
                The old notebooks. And the guilt about not finishing them, mostly.
              </p>
            </div>
          </article>

          <div className="flex flex-col gap-3.5 rounded-md bg-parchment-deep px-6 py-5.5">
            <div className="flex flex-wrap justify-between gap-2">
              <span className={`${label} text-ink-soft`}>Sample cycle · 29 nights</span>
              <span className={`${label} text-plum`}>Cups returned most</span>
            </div>
            <div
              role="img"
              aria-label="Sample lunar month: a dot for each of 29 nights, filled on nights with a reading, ringed in red on nights the Cups suit was drawn"
              className="flex flex-wrap gap-2"
            >
              {NIGHTS.map((night) => (
                <span key={night} className={`size-3.5 rounded-full border-2 ${nightClasses(night)}`} />
              ))}
            </div>
            <div className="flex flex-wrap gap-4.5 font-mono text-[11px] tracking-[0.08em] text-ink-soft">
              <span className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-plum" />
                Reading
              </span>
              <span className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-plum ring-2 ring-rust" />
                Cups drawn
              </span>
              <span className="flex items-center gap-2">
                <span className="size-2.5 rounded-full border-[1.5px] border-pebble" />
                No reading
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}