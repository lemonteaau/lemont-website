"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { departments, projects, type Department } from "@/data/projects";

const options: { id: Department | "all"; label: string }[] = [
  { id: "all", label: "All" },
  ...departments,
];

function count(id: Department | "all") {
  return id === "all"
    ? projects.length
    : projects.filter((p) => p.department === id).length;
}

/** Department tabs over the Index; entries are hidden by CSS, not re-rendered. */
export function IndexFilter({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState<Department | "all">("all");

  return (
    <>
      <div
        role="group"
        aria-label="Filter works by type"
        className="kicker flex flex-wrap items-baseline gap-x-5 gap-y-2 py-4"
      >
        <span className="text-ink-soft">Filter</span>
        {options.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
            className={cn(
              "group inline-flex cursor-pointer items-baseline gap-1",
              filter !== id && "text-ink-soft hover:text-ink"
            )}
          >
            <span className={cn("marker", filter === id && "is-on")}>
              {label}
            </span>
            <span className="text-[0.625rem] tabular-nums">{count(id)}</span>
          </button>
        ))}
      </div>
      <ol className="index-list" data-filter={filter}>
        {children}
      </ol>
    </>
  );
}
