"use client";

import { useState } from "react";
import { CornerFrame } from "@/components/ui/CornerFrame";
import { DiamondIcon } from "@/components/ui/DiamondIcon";
import { OffsiteFrame } from "@/components/ui/OffsiteFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site, type Venture } from "@/content/site";
import { cn } from "@/lib/cn";

type Preview = Pick<Venture, "name" | "href"> & { href: string };

export function Ventures() {
  const [preview, setPreview] = useState<Preview | null>(null);

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
            const embed = Boolean(venture.href && venture.embed);
            const card = (
              <CornerFrame
                className={cn(
                  "h-full",
                  wide &&
                    "border-gold/50 lg:flex lg:min-h-[11rem] lg:flex-col lg:justify-center",
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
                {embed ? (
                  <p className="mt-4 font-sans text-xs uppercase tracking-[0.22em] text-gold/80">
                    View site
                  </p>
                ) : null}
              </CornerFrame>
            );

            return (
              <li
                key={venture.name}
                className={cn(wide && "md:col-span-2 lg:col-span-2")}
              >
                {embed && venture.href ? (
                  <button
                    type="button"
                    onClick={() =>
                      setPreview({ name: venture.name, href: venture.href })
                    }
                    className="block h-full w-full cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label={`Open ${venture.name} website preview`}
                  >
                    {card}
                  </button>
                ) : venture.href ? (
                  <a
                    href={venture.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label={`${venture.name} (opens in a new tab)`}
                  >
                    {card}
                  </a>
                ) : (
                  card
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {preview ? (
        <OffsiteFrame
          open
          src={preview.href}
          name={preview.name}
          onClose={() => setPreview(null)}
        />
      ) : null}
    </section>
  );
}
