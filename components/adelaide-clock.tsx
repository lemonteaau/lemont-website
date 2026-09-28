"use client";

import { useEffect, useState } from "react";

const timeFormat = new Intl.DateTimeFormat("en-AU", {
  timeZone: "Australia/Adelaide",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

const zoneFormat = new Intl.DateTimeFormat("en-AU", {
  timeZone: "Australia/Adelaide",
  timeZoneName: "short",
});

/** Local time at the editorial office. Blank until mounted, so it never mismatches. */
export function AdelaideClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 15_000);
    return () => window.clearInterval(id);
  }, []);

  const zone = now
    ? zoneFormat.formatToParts(now).find((p) => p.type === "timeZoneName")
        ?.value
    : undefined;

  return (
    <span className="kicker whitespace-nowrap tabular-nums">
      <span className="text-ink-soft">Adelaide </span>
      <time dateTime={now?.toISOString()} suppressHydrationWarning>
        {now ? timeFormat.format(now) : "--:--"}
      </time>
      <span className="text-ink-soft"> {zone ?? "ACST"}</span>
    </span>
  );
}
