/** A decorative barcode whose bars are derived from the text beneath it. */
export function Barcode({ text, className }: { text: string; className?: string }) {
  const bars: { x: number; w: number; tall: boolean }[] = [];
  let x = 0;
  const guard = () => {
    for (let i = 0; i < 2; i++) {
      bars.push({ x, w: 1, tall: true });
      x += 3;
    }
  };

  guard();
  for (const ch of text) {
    const code = ch.charCodeAt(0);
    for (let bit = 0; bit < 4; bit++) {
      const w = ((code >> (bit * 2)) & 3) + 1;
      if ((code + bit) % 2 === 0) bars.push({ x, w, tall: false });
      x += w + 1;
    }
  }
  guard();

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox={`0 0 ${x} 40`}
      preserveAspectRatio="none"
      fill="currentColor"
    >
      {bars.map((bar, i) => (
        <rect key={i} x={bar.x} y={0} width={bar.w} height={bar.tall ? 40 : 34} />
      ))}
    </svg>
  );
}
