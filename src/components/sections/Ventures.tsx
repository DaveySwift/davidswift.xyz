import { CornerFrame } from "@/components/ui/CornerFrame";
import { DiamondIcon } from "@/components/ui/DiamondIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Ventures() {
  return (
    <section
      id="ventures"
      aria-labelledby="ventures-heading"
      className="relative scroll-mt-24 px-6 py-32 md:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-16 left-1/2 hidden w-px -translate-x-1/2 bg-gold/15 lg:block"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          id="ventures-heading"
          eyebrow="The House"
          title="Ventures"
        />
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {site.ventures.map((venture) => {
            const wide = venture.span === 2;
            return (
              <li
                key={venture.name}
                className={cn(wide && "md:col-span-2 lg:col-span-2")}
              >
                <CornerFrame
                  className={cn(
                    "h-full",
                    wide && "border-gold/50 lg:flex lg:min-h-[11rem] lg:flex-col lg:justify-center",
                  )}
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <DiamondIcon>
                      <span aria-hidden="true">{venture.roman}</span>
                    </DiamondIcon>
                    <span className="sr-only">Venture {venture.roman}</span>
                  </div>
                  <h3
                    className={cn(
                      "font-display uppercase tracking-[0.16em] text-gold",
                      wide ? "text-2xl md:text-3xl" : "text-xl",
                    )}
                  >
                    {venture.name}
                  </h3>
                  {venture.note ? (
                    <p className="mt-3 font-sans text-sm text-muted">
                      {venture.note}
                    </p>
                  ) : (
                    <p className="mt-3 font-sans text-sm text-muted/80">
                      Builder &amp; steward
                    </p>
                  )}
                </CornerFrame>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
