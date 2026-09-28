import Link from "next/link";
import { person } from "@/data/profile";

const elsewhere = [
  { label: "GitHub", handle: "lemonteaau", href: person.github },
  { label: "LinkedIn", handle: "Terry Cheng", href: person.linkedin },
];

/** Contact details, at the foot of every page. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="frame mt-28 pb-8 md:mt-40">
      <div className="rule-double" />
      <div className="grid-12 gap-y-12 pt-8 md:pt-10">
        <div className="col-span-12 lg:col-span-7">
          <h2 className="display text-[clamp(3.25rem,9vw,8.5rem)]">Contact</h2>
          <p className="mt-6 font-serif text-[clamp(1.5rem,3.2vw,2.4rem)] leading-tight italic">
            <a className="ink-link break-all" href={`mailto:${person.email}`}>
              {person.email}
            </a>
          </p>
        </div>

        <div className="col-span-12 lg:col-span-3 lg:col-start-10">
          <p className="kicker text-ink-soft">Elsewhere</p>
          <ul className="mt-5 space-y-3">
            {elsewhere.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <span className="kicker block text-ink-soft">
                    {item.label} ↗
                  </span>
                  <span className="marker text-lg">{item.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rule mt-16" />
      <div className="kicker flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pt-3 text-ink-soft">
        <span>
          © {year} {person.name}
        </span>
        <span className="hidden sm:inline">{person.site}</span>
        <Link href="#top" className="ink-link text-ink">
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}
