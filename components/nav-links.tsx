"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sections = [
  { href: "/", label: "Cover" },
  { href: "/projects", label: "Works" },
  { href: "/about", label: "Profile" },
  { href: "#contact", label: "Contact" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="kicker flex items-baseline justify-between gap-x-5 sm:justify-start md:gap-x-8">
      {sections.map(({ href, label }, i) => {
        const current = href === pathname;
        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={current ? "page" : undefined}
              className="group inline-flex items-baseline gap-1.5"
            >
              <span className="text-[0.625rem] text-ink-soft tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={cn("marker", current && "is-on")}>{label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
