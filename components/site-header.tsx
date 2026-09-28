import Link from "next/link";
import { NavLinks } from "@/components/nav-links";
import { EditionToggle } from "@/components/edition-toggle";
import { AdelaideClock } from "@/components/adelaide-clock";

/** The running head printed at the top of every page. */
export function SiteHeader() {
  return (
    <header className="frame">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pt-4 pb-3">
        <Link
          href="/"
          className="font-display text-[1.65rem] leading-none tracking-[-0.01em]"
          aria-label="lemontea, home"
        >
          lemontea<span className="text-ink-soft">.</span>
        </Link>
        <nav
          aria-label="Sections"
          className="order-last w-full lg:order-none lg:w-auto"
        >
          <NavLinks />
        </nav>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">
            <AdelaideClock />
          </span>
          <EditionToggle />
        </div>
      </div>
      <div className="rule" />
    </header>
  );
}
