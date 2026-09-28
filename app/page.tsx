import Link from "next/link";
import {
  contributions,
  entryNumber,
  entrySlug,
  projects,
} from "@/data/projects";
import { person } from "@/data/profile";
import { EditionLine } from "@/components/cover/edition-line";
import { Masthead } from "@/components/cover/masthead";
import { Portrait } from "@/components/cover/portrait";
import { Barcode } from "@/components/cover/barcode";
import { CropMarks } from "@/components/cover/crop-marks";
import { Stamp } from "@/components/cover/stamp";
import { Plate } from "@/components/plate";
import { SectionHead } from "@/components/section-head";
import { cn } from "@/lib/utils";
import { capital, spell } from "@/lib/words";

export default function CoverPage() {
  const printedAt = new Date().toISOString();
  const selected = projects.filter((p) => p.featured);
  const biggest = contributions[0];

  const coverLines = [
    {
      href: "/projects",
      title: `${capital(spell(projects.length))} works`,
      text: "Web apps, desktop tools and browser extensions.",
    },
    {
      href: "/projects#contributions",
      title: "Open source",
      text: `${capital(spell(contributions.length))} merged contributions, including ${biggest.project} (${biggest.stars} ★).`,
    },
    {
      href: "/about",
      title: "Profile",
      text: "Background, experience and toolkit.",
    },
    {
      href: "#contact",
      title: "Contact",
      text: person.email,
    },
  ];

  const contents = [
    {
      title: "Selected works",
      text: `${capital(spell(selected.length))} projects across web, desktop and browser.`,
      href: "#selected",
    },
    {
      title: "Works",
      text: `All ${spell(projects.length)} projects, with source code and links.`,
      href: "/projects",
    },
    {
      title: "Open source",
      text: `Merged contributions to ${contributions
        .slice(0, 2)
        .map((c) => c.project)
        .join(", ")} and others.`,
      href: "/projects#contributions",
    },
    {
      title: "Profile",
      text: "Background, experience and toolkit.",
      href: "/about",
    },
    {
      title: "Contact",
      text: "Email, GitHub and LinkedIn.",
      href: "#contact",
    },
  ];

  return (
    <>
      {/* ---------------------------------------------------------- Cover */}
      <section
        aria-labelledby="cover-title"
        className="frame relative pt-5 pb-2 md:pt-7"
      >
        <CropMarks />
        <div className="cover">
          <EditionLine printedAt={printedAt} />
          <div className="rule-double enter-draw" style={{ "--d": 80 } as React.CSSProperties} />
          <Masthead />

          <div className="grid-12 relative gap-y-10 pb-8">
            <div className="cover__portrait relative z-10 order-first col-span-12 md:col-span-8 md:col-start-3 lg:order-none lg:col-span-5 lg:col-start-5 lg:row-start-1">
              <Portrait animate />
              <Stamp className="enter absolute right-[4%] bottom-[20%] [--d:1500]" />
            </div>

            <div className="enter col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:self-end" style={{ "--d": 500 } as React.CSSProperties}>
              <h1
                id="cover-title"
                className="font-serif text-[clamp(3.2rem,6.2vw,5.6rem)] leading-[0.9] font-light tracking-[-0.025em] italic"
              >
                Terry Cheng
              </h1>
              <p className="dek mt-5 max-w-[24ch] text-[clamp(1.2rem,1.8vw,1.45rem)]">
                Full-stack developer and software engineer based in{" "}
                {person.city}, {person.region}.
              </p>
            </div>

            <ol className="col-span-12 space-y-5 md:col-span-6 lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:self-end">
              {coverLines.map((line, i) => (
                <li
                  key={line.href}
                  className="enter"
                  style={{ "--d": 650 + i * 90 } as React.CSSProperties}
                >
                  <Link
                    href={line.href}
                    className="group grid grid-cols-[1.9rem_1fr] gap-x-3"
                  >
                    <span className="numeral pt-1 text-[2.4rem]">{i + 1}</span>
                    <span>
                      <span className="block font-serif text-[1.2rem] leading-tight font-medium">
                        <span className="marker">{line.title}</span>
                      </span>
                      <span className="mt-1 block text-[0.95rem] leading-snug break-words text-ink-soft">
                        {line.text}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>

          <div className="rule enter-draw" style={{ "--d": 300 } as React.CSSProperties} />
          <div className="kicker enter flex items-end justify-between gap-6 pt-3" style={{ "--d": 1100 } as React.CSSProperties}>
            <span className="flex items-end gap-3">
              <Barcode text="LEMONTEA" className="h-9 w-24" />
              <span className="leading-none text-ink-soft">
                {person.site}
              </span>
            </span>
            <a href="#contents" className="ink-link">
              Contents ↓
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- Contents */}
      <section
        id="contents"
        aria-labelledby="contents-title"
        className="frame mt-28 md:mt-40"
      >
        <div className="grid-12 gap-y-10">
          <div className="reveal col-span-12 lg:sticky lg:top-8 lg:col-span-4 lg:self-start">
            <h2
              id="contents-title"
              className="display text-[clamp(4.5rem,11vw,9.5rem)]"
            >
              Contents
            </h2>
          </div>

          <ol className="col-span-12 lg:col-span-8">
            {contents.map((entry, i) => (
              <li
                key={entry.href}
                className={cn("reveal", i === 0 ? "rule" : "rule-hair")}
              >
                <Link
                  href={entry.href}
                  className="group grid grid-cols-[3.6rem_1fr_auto] items-baseline gap-x-4 py-5 md:grid-cols-[6.5rem_1fr_auto] md:py-6"
                >
                  <span className="numeral text-[2.75rem] md:text-[4.25rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-serif text-[1.5rem] leading-tight md:text-[1.95rem]">
                      <span className="marker">{entry.title}</span>
                    </span>
                    <span className="mt-1.5 block max-w-[54ch] leading-snug text-ink-soft">
                      {entry.text}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="kicker self-center transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------- Selected works */}
      <section
        id="selected"
        aria-labelledby="selected-title"
        className="frame mt-28 md:mt-40"
      >
        <SectionHead
          kicker="Works"
          folio={`${selected.length} of ${projects.length}`}
        />
        <div className="grid-12 mt-6 gap-y-6 md:mt-8">
          <h2
            id="selected-title"
            className="display reveal col-span-12 text-[clamp(3.75rem,10vw,9rem)] lg:col-span-8"
          >
            Selected works
          </h2>
        </div>

        <div className="mt-12 grid gap-x-[var(--col-gap)] gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {selected.map((project) => (
            <article key={project.title} className="reveal border-t border-ink pt-4">
              <Link
                href={`/projects#${entrySlug(project)}`}
                className="group block"
              >
                <p className="kicker flex justify-between gap-4 text-ink-soft">
                  <span>No. {entryNumber(project)}</span>
                  <span>{project.kind}</span>
                </p>
                <Plate
                  project={project}
                  caption={false}
                  className="mt-4"
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                />
                <h3 className="mt-5 font-serif text-[1.85rem] leading-[1.05] tracking-[-0.01em] balance">
                  <span className="marker">{project.title}</span>
                </h3>
                <p className="mt-3 leading-snug text-ink-soft">{project.dek}</p>
                <p className="kicker mt-4">Details →</p>
              </Link>
            </article>
          ))}
        </div>

        <p className="kicker reveal mt-16 border-t border-hair pt-4">
          <Link href="/projects" className="ink-link">
            All {spell(projects.length)} works →
          </Link>
        </p>
      </section>

    </>
  );
}
