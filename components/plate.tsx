import Image from "next/image";
import { cn } from "@/lib/utils";
import { entryNumber, projects, type Project } from "@/data/projects";

const patterns = ["ruled", "dots", "disc"] as const;

/**
 * A project's figure, printed onto the page: screenshots in black (or black
 * over lemon), and a type-only plate when there is no picture on file.
 */
export function Plate({
  project,
  tone = "paper",
  sizes,
  priority,
  caption = true,
  className,
}: {
  project: Project;
  tone?: "paper" | "lemon";
  sizes: string;
  priority?: boolean;
  caption?: boolean;
  className?: string;
}) {
  const number = entryNumber(project);
  const figure = project.figure;

  if (!figure) {
    const bare = projects.filter((p) => !p.figure);
    const pattern = patterns[bare.indexOf(project) % patterns.length];
    return (
      <div
        aria-hidden="true"
        className={cn("type-plate aspect-[4/3]", className)}
        data-pattern={pattern}
      >
        <span className="type-plate__title display relative">
          {project.title}
        </span>
      </div>
    );
  }

  return (
    <figure className={className}>
      <div
        className={cn(
          "plate aspect-[4/3]",
          tone === "lemon" && "plate--lemon",
          figure.fit === "contain" && "plate--specimen"
        )}
      >
        {figure.fit === "cover" ? (
          <Image
            src={figure.src}
            alt={caption ? "" : figure.caption}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
            style={{ objectPosition: figure.focus ?? "center top" }}
          />
        ) : (
          <div className="absolute inset-[9%]">
            <Image
              src={figure.src}
              alt={caption ? "" : figure.caption}
              fill
              sizes={sizes}
              priority={priority}
              className="object-contain"
            />
          </div>
        )}
      </div>
      {caption && <Caption number={number}>{figure.caption}</Caption>}
    </figure>
  );
}

export function Caption({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <figcaption className="mt-3 flex gap-3 text-[0.9rem] leading-snug text-ink-soft">
      <span className="kicker shrink-0 pt-[0.2em] text-ink">Fig. {number}</span>
      <span className="italic">{children}</span>
    </figcaption>
  );
}
