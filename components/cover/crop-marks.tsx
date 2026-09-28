/** Printer's crop marks at the four corners of the cover. */
export function CropMarks() {
  const corners = [
    "top-0 left-0",
    "top-0 right-0 -scale-x-100",
    "bottom-0 left-0 -scale-y-100",
    "bottom-0 right-0 -scale-100",
  ];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-2 hidden text-ink-faint lg:block">
      {corners.map((pos) => (
        <svg key={pos} className={`absolute ${pos} size-5`} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0 8.5H6M8.5 0V6" />
        </svg>
      ))}
    </div>
  );
}
