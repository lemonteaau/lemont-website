const WORD = "LEMONTEA";

/** The nameplate, set edge to edge and raised letter by letter. */
export function Masthead() {
  return (
    <p className="display masthead">
      <span className="sr-only">lemontea</span>
      <span aria-hidden="true" className="masthead-line">
        {[...WORD].map((letter, i) => (
          <span key={i} style={{ "--i": i } as React.CSSProperties}>
            {letter}
          </span>
        ))}
      </span>
    </p>
  );
}
