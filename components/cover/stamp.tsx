import { cn } from "@/lib/utils";

/** A lemon-ink chop reading 柠檬茶, lemon tea. */
export function Stamp({ className }: { className?: string }) {
  return (
    <span
      lang="zh-Hans"
      className={cn(
        "cjk inline-flex rotate-[-6deg] items-center justify-center rounded-[3px] bg-lemon px-1.5 py-2 text-[1.05rem] leading-[1.05] font-bold text-on-lemon shadow-[inset_0_0_0_2px_var(--lemon),inset_0_0_0_3.5px_var(--on-lemon)] [writing-mode:vertical-rl]",
        className
      )}
    >
      <span className="sr-only">Lemon tea: </span>柠檬茶
    </span>
  );
}
