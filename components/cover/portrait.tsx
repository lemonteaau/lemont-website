import { cn } from "@/lib/utils";

/**
 * Terry's line drawing, printed in two passes: a lemon silhouette slightly out
 * of register, then the ink. Both inks follow the day/night edition.
 */
export function Portrait({
  className,
  animate = false,
  label = "Line drawing of Terry at his laptop, a lemon on its lid",
}: {
  className?: string;
  animate?: boolean;
  label?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("portrait", animate && "portrait--enter", className)}
    >
      <div className="portrait__lemon" />
      <div className="portrait__paper" />
      <div className="portrait__ink" />
      <div className="portrait__color" />
    </div>
  );
}
