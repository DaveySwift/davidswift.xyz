"use client";

import { Button } from "@/components/ui/Button";
import { HeaderSocialLinks } from "@/components/ui/SocialLinks";
import { useConnect } from "@/components/providers/ConnectProvider";
import { site } from "@/content/site";

export function Contact() {
  const { openConnect } = useConnect();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-foreground/10 px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="contact-heading"
          className="max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          {site.ctaHeadline[0]}
          <br />
          <span className="text-lime">{site.ctaHeadline[1]}</span>
        </h2>

        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Button type="button" variant="solid" onClick={openConnect}>
            Get in touch
            <span aria-hidden="true">↗</span>
          </Button>
          <HeaderSocialLinks linkedIn={site.linkedIn} x={site.x} />
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-8 border-t border-foreground/10 pt-10 md:grid-cols-3">
          <li>
            <p className="font-display text-lg font-semibold text-foreground">
              Speaking
            </p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
              Keynotes, panels and conversations on building for the long
              horizon.
            </p>
          </li>
          <li>
            <p className="font-display text-lg font-semibold text-foreground">
              Consultations
            </p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
              Whole-systems advice across technology, land and infrastructure.
            </p>
          </li>
          <li>
            <p className="font-display text-lg font-semibold text-foreground">
              Collaboration
            </p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
              Partnerships and ventures, from early ideas to patient capital.
            </p>
          </li>
        </ul>

        <div className="mt-16 border-t border-foreground/10 pt-10">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-lime">
            Other ventures
          </p>
          <p className="mt-3 max-w-xl font-sans text-sm text-muted">
            A broader commercial record across land, capital and community.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {site.ventures.map((venture) => (
              <li
                key={venture.name}
                className="font-sans text-sm text-foreground/85"
              >
                {venture.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
