import type { Metadata } from "next";
import {
  contributions,
  entryNumber,
  entrySlug,
  projects,
} from "@/data/projects";
import { IndexFilter } from "@/components/index-filter";
import { Plate } from "@/components/plate";
import { SectionHead } from "@/components/section-head";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Projects by Terry Cheng: web apps, desktop and mobile apps, browser extensions, userscripts and an agent skill, plus open-source contributions.",
};

export default function WorksPage() {
  return (
    <>
      <header className="frame pt-10 md:pt-16">
        <SectionHead kicker="Index" folio={`${projects.length} projects`} />
        <div className="grid-12 mt-6 gap-y-6 md:mt-8">
          <h1 className="display enter col-span-12 text-[clamp(5.5rem,19vw,17rem)] lg:col-span-8">
            Works
          </h1>
          <p
            className="dek enter col-span-12 max-w-[32ch] text-[clamp(1.3rem,2vw,1.6rem)] lg:col-span-4 lg:self-end lg:pb-3"
            style={{ "--d": 200 } as React.CSSProperties}
          >
            Web apps, desktop and mobile apps, browser extensions, userscripts
            and an agent skill.
          </p>
        </div>
      </header>

      <section aria-label="Works" className="frame mt-10 md:mt-14">
        <div className="rule" />
        <IndexFilter>
          {projects.map((project, i) => (
            <li
              key={project.title}
              id={entrySlug(project)}
              data-dept={project.department}
              className="scroll-mt-6 border-t border-hair"
            >
              <article
                aria-labelledby={`${entrySlug(project)}-title`}
                className="group grid-12 gap-y-6 py-10 md:py-14"
              >
                <div className="col-span-12 flex items-baseline gap-4 md:col-span-2 md:flex-col md:gap-3">
                  <span className="numeral text-[4.25rem] md:text-[6rem]">
                    {entryNumber(project)}
                  </span>
                  <span className="kicker text-ink-soft">{project.kind}</span>
                </div>

                <div className="col-span-12 md:col-span-5">
                  <h2
                    id={`${entrySlug(project)}-title`}
                    className="font-serif text-[clamp(2rem,3.4vw,2.9rem)] leading-[1.02] tracking-[-0.015em] balance"
                  >
                    {project.title}
                  </h2>
                  <p className="prose-body mt-4">{project.description}</p>
                  <p className="kicker mt-6 leading-relaxed">
                    <span className="text-ink-soft">Stack — </span>
                    {project.stack.join(" / ")}
                  </p>
                  {(project.github || project.demo) && (
                    <p className="kicker mt-5 flex flex-wrap gap-x-6 gap-y-2">
                      {project.demo && (
                        <a
                          className="ink-link"
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit<span className="sr-only"> {project.title}</span> ↗
                        </a>
                      )}
                      {project.github && (
                        <a
                          className="ink-link"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Source<span className="sr-only"> of {project.title}</span> ↗
                        </a>
                      )}
                    </p>
                  )}
                </div>

                <div className="col-span-12 md:col-span-5">
                  <Plate
                    project={project}
                    priority={i < 2}
                    sizes="(min-width: 768px) 38vw, 100vw"
                  />
                </div>
              </article>
            </li>
          ))}
        </IndexFilter>
      </section>

      <section
        id="contributions"
        aria-labelledby="contributions-title"
        className="frame mt-28 scroll-mt-6 md:mt-40"
      >
        <SectionHead
          kicker="Open source"
          folio={`${contributions.length} projects`}
        />
        <div className="grid-12 mt-6 gap-y-6 md:mt-8">
          <h2
            id="contributions-title"
            className="display reveal col-span-12 text-[clamp(3.75rem,10vw,9rem)] balance lg:col-span-8"
          >
            Contributions
          </h2>
          <p className="dek reveal col-span-12 max-w-[30ch] text-[clamp(1.25rem,1.8vw,1.5rem)] lg:col-span-4 lg:self-end lg:pb-3">
            Merged pull requests to open-source projects.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2">
          {contributions.map((item, i) => (
            <article
              key={item.repo}
              className={cn(
                "reveal border-t border-hair py-8 md:py-10",
                i % 2 === 0 ? "md:pr-10" : "md:col-rule md:pl-10",
                i < 2 && "md:border-t-ink"
              )}
            >
              <p className="kicker flex flex-wrap justify-between gap-x-4 gap-y-1 text-ink-soft">
                <span>{item.repo}</span>
                <span className="tabular-nums">
                  ★ {item.stars}
                  <span className="sr-only"> stars</span>
                </span>
              </p>
              <h3 className="mt-5 font-serif text-[clamp(1.7rem,2.6vw,2.2rem)] leading-tight">
                {item.project}
              </h3>
              <p className="prose-body mt-3">{item.summary}</p>
              <p className="kicker mt-5">
                <a
                  className="ink-link"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pull requests
                  <span className="sr-only"> to {item.project}</span> ↗
                </a>
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
