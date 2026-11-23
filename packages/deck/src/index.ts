// Shared deck data for every Aster app.

export type SuitId = "copas" | "oros" | "espadas" | "bastos";

export type Suit = {
  id: SuitId;
  numeral: string;
  es: string;
  en: string;
  theme: string;
  prompt: string;
};

export const TAGLINE = "Ask. Draw. Reflect.";

export const SUITS: readonly Suit[] = [
  {
    id: "copas",
    numeral: "I",
    es: "Copas",
    en: "Cups",
    theme: "Heart & bonds",
    prompt: "What feeling have you been carrying for someone else?",
  },
  {
    id: "oros",
    numeral: "II",
    es: "Oros",
    en: "Coins",
    theme: "Work & worth",
    prompt: "Where is your effort quietly paying off, and where isn’t it?",
  },
  {
    id: "espadas",
    numeral: "III",
    es: "Espadas",
    en: "Swords",
    theme: "Mind & conflict",
    prompt: "Which thought keeps cutting in when you try to rest?",
  },
  {
    id: "bastos",
    numeral: "IV",
    es: "Bastos",
    en: "Clubs",
    theme: "Will & beginnings",
    prompt: "What would you start tomorrow if no one were watching?",
  },
];