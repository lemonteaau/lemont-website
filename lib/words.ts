const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

/** Spells out small numbers, as in running text. */
export const spell = (n: number) => words[n] ?? String(n);

export const capital = (s: string) => s[0].toUpperCase() + s.slice(1);
