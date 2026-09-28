import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import {
  cv,
  nameStory,
  person,
  softSkills,
  toolkit,
  usageCount,
} from "@/data/profile";
import { Portrait } from "@/components/cover/portrait";
import { Stamp } from "@/components/cover/stamp";
import { SectionHead } from "@/components/section-head";
import { spell } from "@/lib/words";

export const metadata: Metadata = {
  title: "Profile",
  description:
    "Terry Cheng, full-stack developer and software engineer in Adelaide: background, experience and toolkit.",
};

export default function ProfilePage() {
  return (
    <>
      <header className="frame pt-10 md:pt-16">
        <SectionHead
          kicker="Profile"
          folio={`${person.city}, ${person.postcode}`}
        />
        <h1 className="display enter mt-6 text-[clamp(4.5rem,15vw,14rem)] md:mt-8">
          {person.name}
        </h1>
        <p
          className="dek enter mt-8 max-w-[40ch] text-[clamp(1.35rem,2.3vw,1.9rem)] md:mt-10"
          style={{ "--d": 200 } as React.CSSProperties}
        >
          Full-stack developer and software engineer based in {person.city},{" "}
          {person.region}.
        </p>
      </header>

      <div className="frame mt-12 md:mt-16">
        <div className="rule" />
        <div className="grid-12 gap-y-14 pt-10 md:pt-14">
          {/* ---------------------------------------------- Sidebar */}
          <aside className="col-span-12 md:col-span-5 lg:col-span-4">
            <div className="md:sticky md:top-8">
              <div className="relative bg-paper-deep px-[8%] pt-[12%]">
                <Portrait />
                <Stamp className="absolute top-[7%] right-[7%]" />
              </div>

              <section aria-labelledby="cv-title" className="mt-12">
                <h2 id="cv-title" className="kicker border-b border-ink pb-2">
                  Experience &amp; education
                </h2>
                <ol>
                  {cv.map((entry) => (
                    <li
                      key={entry.title}
                      className="grid grid-cols-[4.75rem_1fr] gap-x-3 border-b border-hair py-4"
                    >
                      <span className="numeral pt-1 text-[1.6rem]">
                        {entry.years}
                      </span>
                      <span>
                        <span className="block font-serif text-[1.1rem] leading-snug font-medium">
                          {entry.title}
                        </span>
                        <span className="block leading-snug italic">
                          {entry.place}
                        </span>
                        <span className="kicker mt-1.5 block text-ink-soft">
                          {entry.dates}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </aside>

          {/* ---------------------------------------------- Article */}
          <article className="col-span-12 md:col-span-7 lg:col-span-7 lg:col-start-6">
            <div className="prose-body max-w-[62ch] text-[1.2rem]">
              <p className="dropcap">
                Terry holds a Master of Computing and Innovation from the
                University of Adelaide (2024) and a Bachelor of Business
                Administration from Shanghai University (2022). From July 2024
                to February 2025 he worked as a software developer at Morialta
                Software.
              </p>
              <p>
                He works across the stack: TypeScript and React on the front
                end; Elixir, Python and PostgreSQL on the back end. His side
                projects include web platforms, a Rust desktop app, browser
                extensions and userscripts. All {spell(projects.length)} are
                listed under{" "}
                <Link href="/projects" className="ink-link">
                  Works
                </Link>
                .
              </p>
            </div>

            <figure className="reveal mt-12 max-w-[62ch]">
              <figcaption className="kicker text-ink-soft">
                On the name “lemontea”
              </figcaption>
              <blockquote className="mt-4 border-l-[3px] border-lemon pl-6 font-serif text-[1.3rem] leading-[1.55] md:pl-8">
                <p>{nameStory}</p>
              </blockquote>
            </figure>

            {/* ---------------------------------------------- Toolkit */}
            <section
              aria-labelledby="toolkit-title"
              className="mt-16 border-t border-ink pt-10 md:mt-20"
            >
              <h2
                id="toolkit-title"
                className="display text-[clamp(3.25rem,7vw,5.75rem)]"
              >
                Toolkit
              </h2>
              <p className="mt-4 max-w-[44ch] text-ink-soft">
                Figures show how many projects in Works use each tool.
              </p>

              <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
                {toolkit.map((group) => (
                  <section key={group.heading} aria-label={group.heading}>
                    <h3 className="kicker border-b border-ink pb-2">
                      {group.heading}
                    </h3>
                    <ul className="mt-2">
                      {group.items.map((tool) => {
                        const n = usageCount(tool);
                        return (
                          <li
                            key={tool}
                            className="flex items-baseline gap-2 py-[0.3rem] text-[1.02rem]"
                          >
                            <span className={n ? "" : "text-ink-soft"}>
                              {tool}
                            </span>
                            <span aria-hidden="true" className="leader" />
                            <span className="font-mono text-[0.8rem] tabular-nums">
                              {n ? (
                                <>
                                  {n}
                                  <span className="sr-only">
                                    {" "}
                                    {n === 1 ? "project" : "projects"}
                                  </span>
                                </>
                              ) : (
                                <span className="text-ink-soft">
                                  <span aria-hidden="true">—</span>
                                  <span className="sr-only">no projects</span>
                                </span>
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                ))}
              </div>

              <p className="mt-10 border-t border-hair pt-4 text-ink-soft">
                <span className="kicker mr-3 text-ink">Soft skills</span>
                {softSkills.join(", ")}
              </p>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
