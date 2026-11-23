"use client";

import { useState } from "react";
import { SUITS, type SuitId } from "@aster/deck";
import { SuitIcon } from "./icons";

export function DeckPicker() {
  const [picked, setPicked] = useState<SuitId>("copas");
  const current = SUITS.find((suit) => suit.id === picked) ?? SUITS[0];

  return (
    <section id="deck" className="border-y border-line bg-night-band">
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-4 py-18 sm:px-8 lg:grid-cols-2 lg:gap-22 lg:px-14 lg:py-36">
        <div className="flex flex-col gap-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">The deck</p>
          <h2 className="font-display text-[clamp(40px,5vw,68px)] font-normal leading-[1.02] text-moon">
            An antique Spanish deck, <span className="italic">read in a new voice.</span>
          </h2>
          <p className="max-w-[32em] text-lg leading-[1.65] text-lilac">
            Aster’s readings are grounded in <em>El Arte de Echar las Cartas</em>, Dr. Moorne’s Spanish cartomancy
            deck. Its four suits shape every reading. Choose one to see the kind of question it opens.
          </p>
          <div
            role="status"
            aria-live="polite"
            className="mt-2 flex min-h-35 flex-col gap-2.5 border-t border-line-strong pt-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ember">
              {current.es} · {current.theme}
            </p>
            <p className="font-display text-[clamp(26px,2.6vw,34px)] italic leading-tight text-moon">
              “{current.prompt}”
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
          {SUITS.map((suit) => {
            const active = suit.id === picked;
            return (
              <button
                key={suit.id}
                type="button"
                onClick={() => setPicked(suit.id)}
                aria-pressed={active}
                className={`flex aspect-[5/8] cursor-pointer rounded-lg border-[1.5px] p-2.5 text-moon transition duration-300 ${
                  active ? "-translate-y-3.5 border-gold bg-plum" : "border-line-strong bg-night hover:border-mauve"
                }`}
              >
                <span className="flex flex-1 flex-col items-center justify-between rounded border border-line-strong px-1.5 py-3.5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-lilac">{suit.numeral}</span>
                  <span className="text-gold">
                    <SuitIcon suit={suit.id} />
                  </span>
                  <span className="text-center font-display text-[22px] leading-[1.1]">
                    {suit.es}
                    <br />
                    <span className="text-[15px] italic text-lilac">{suit.en}</span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}