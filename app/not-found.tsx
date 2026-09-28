import Link from "next/link";
import { SectionHead } from "@/components/section-head";

export default function NotFound() {
  return (
    <section className="frame pt-10 md:pt-16" aria-labelledby="erratum-title">
      <SectionHead kicker="Error" folio="404" />
      <div className="grid-12 mt-8 gap-y-8">
        <h1
          id="erratum-title"
          className="display enter col-span-12 text-[clamp(5rem,16vw,14rem)] balance lg:col-span-9"
        >
          Page not found
        </h1>
        <div className="enter col-span-12 lg:col-span-3 lg:self-end" style={{ "--d": 200 } as React.CSSProperties}>
          <p className="dek text-[1.4rem]">
            This page does not exist or has moved.
          </p>
          <p className="kicker mt-6 flex flex-col gap-2">
            <Link href="/" className="ink-link self-start">
              Home →
            </Link>
            <Link href="/projects" className="ink-link self-start">
              Works →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
