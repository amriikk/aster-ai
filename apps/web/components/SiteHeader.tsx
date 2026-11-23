import { StarMark } from "./icons";

const LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#deck", label: "The deck" },
  { href: "#journal", label: "Journal" },
];

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-4 py-7 sm:px-8 lg:px-14">
      <a href="#top" className="flex items-center gap-3 text-moon">
        <StarMark size={26} className="text-gold" />
        <span className="font-display text-[30px] leading-none tracking-[0.02em]">Aster</span>
      </a>
      <nav
        aria-label="Primary"
        className="flex flex-wrap items-center gap-x-6 gap-y-1 font-mono text-xs uppercase tracking-[0.18em] lg:gap-x-9"
      >
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className="py-3.5 text-lilac transition-colors hover:text-gold-light">
            {link.label}
          </a>
        ))}
        <a
          href="#join"
          className="rounded-full bg-ember px-5 py-3.5 font-medium text-night transition-opacity hover:opacity-90"
        >
          Join the waitlist
        </a>
      </nav>
    </header>
  );
}