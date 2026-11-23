# Aster

**Ask. Draw. Reflect.**

Aster is an AI tarot journal. 

You ask a question in your own words, draw from the Dr. Moorne deck (*El Arte de Echar las Cartas*) & get a reading written back to you. 

Then Aster keeps the page, so you can see which cards and themes return over time.

Built in public by [Jhon Trujillo](https://jotrio.com). The live site is linked in this repo's About section.

## Status

In development. 

| Milestone | Target |
|---|---|
| Landing page and waitlist | December 2026 |
| Working reading (web prototype) | March 2027 |
| iPhone beta, including iPhone Duo layouts | May 2027 |
| Public launch | Summer 2027 |

## How it's built

A [Turborepo](https://turborepo.com) monorepo, so the website and the future iPhone app can share code.

```
apps/
    web/          Next.js landing page and waitlist, hosted on Vercel
packages/
    deck/         Deck data (suits, themes, prompts) shared by every app
```

- **Web:** Next.js (App Router), TypeScript, Tailwind CSS, hosted on Vercel
- **Waitlist:**
- **Planned:** Claude API readings with structured output, an Expo (React Native) iPhone app
  in `apps/mobile`

## Run it locally

Needs Node 24 (see `.nvmrc`).

```bash
npm install
npm run dev
```

Then open [localhost:3000/aster](http://localhost:3000/aster).

To test the waitlist, copy `apps/web/.env.example` to `apps/web/.env.local` and fill
in the Google Form values.

## Notes

All artwork in this repo is original. Card meanings follow the Dr. Moorne deck.