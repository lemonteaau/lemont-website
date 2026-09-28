import { cn } from "@/lib/utils";

/** Kicker and folio over a double rule, as at the top of a magazine section. */
export function SectionHead({
  kicker,
  folio,
  className,
}: {
  kicker: string;
  folio?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="kicker flex items-baseline justify-between gap-6 pb-2">
        <span>{kicker}</span>
        {folio && <span className="text-ink-soft">{folio}</span>}
      </div>
      <div className={cn("rule-double reveal-draw")} />
    </div>
  );
}
