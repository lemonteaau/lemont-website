"use client";

import { useEffect, useState } from "react";

const TZ = "Australia/Adelaide";
/** lemontea was first used in 2016, so 2017 is Vol. I. */
const FIRST_YEAR = 2016;

const dateFormat = new Intl.DateTimeFormat("en-AU", {
  timeZone: TZ,
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});
const numberFormat = new Intl.DateTimeFormat("en-AU", {
  timeZone: TZ,
  year: "numeric",
  month: "numeric",
});

function roman(n: number) {
  const table: [number, string][] = [
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let out = "";
  for (const [value, glyph] of table) {
    while (n >= value) {
      out += glyph;
      n -= value;
    }
  }
  return out;
}

/**
 * Volume, number and date of the current issue. Starts from the date the page
 * was printed (built) and moves to today once it reaches the reader.
 */
export function EditionLine({ printedAt }: { printedAt: string }) {
  const [date, setDate] = useState(() => new Date(printedAt));
  useEffect(() => setDate(new Date()), []);

  const parts = numberFormat.formatToParts(date);
  const year = Number(parts.find((p) => p.type === "year")?.value);
  const month = Number(parts.find((p) => p.type === "month")?.value);

  return (
    <div className="kicker enter flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pb-2">
      <span>
        Vol. {roman(Math.max(1, year - FIRST_YEAR))} — No.{" "}
        {String(month).padStart(2, "0")}
      </span>
      <time dateTime={date.toISOString()}>{dateFormat.format(date)}</time>
    </div>
  );
}
