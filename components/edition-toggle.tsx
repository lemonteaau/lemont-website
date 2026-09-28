"use client";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const editions = [
  { theme: "light", label: "Day" },
  { theme: "dark", label: "Night" },
] as const;

/** Day and night editions of the same issue. */
export function EditionToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const current = mounted ? resolvedTheme : undefined;

  const choose = (theme: "light" | "dark") => {
    if (theme === current) return;
    // flushSync commits the new theme (and next-themes' effect that sets the
    // class) inside the transition callback, so the new snapshot is correct.
    const apply = () => flushSync(() => setTheme(theme));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduce) apply();
    else document.startViewTransition(apply);
  };

  return (
    <div
      role="group"
      aria-label="Edition"
      className={cn("kicker flex items-center gap-1", className)}
    >
      {editions.map(({ theme, label }, i) => (
        <span key={theme} className="flex items-center gap-1">
          {i > 0 && (
            <span aria-hidden="true" className="text-ink-faint">
              /
            </span>
          )}
          <button
            type="button"
            aria-pressed={current === theme}
            onClick={() => choose(theme)}
            className={cn(
              "cursor-pointer px-1 py-0.5 transition-colors",
              current === theme
                ? "bg-lemon text-on-lemon"
                : "text-ink-soft hover:text-ink"
            )}
          >
            {label}
          </button>
        </span>
      ))}
    </div>
  );
}
