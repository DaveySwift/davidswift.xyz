import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export function Bio() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 px-6 py-32 md:px-8"
    >
      <div
        id="mission"
        className="absolute -top-24"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <ImageCarousel images={site.bioGallery} />
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-8 top-0 hidden h-full w-px bg-gold/25 lg:block"
            />
            <SectionHeading
              id="about-heading"
              eyebrow="Origin"
              title="About"
              align="left"
              className="mb-10"
            />
            <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold">
              Mission
            </p>
            <p className="mt-6 font-display text-2xl leading-snug tracking-wide text-foreground md:text-3xl">
              {site.mission}
            </p>
            <blockquote className="mt-10 border-l-2 border-gold/50 pl-6 font-sans text-lg italic leading-relaxed text-foreground/80">
              “{site.quote}”
            </blockquote>
            <p className="mt-8 font-sans text-base uppercase tracking-[0.2em] text-muted">
              {site.tagline}
            </p>
            <p className="mt-6 font-sans text-base leading-relaxed text-foreground/75">
              Built with family at the centre — a shared story of ambition,
              partnership, and the long view.
            </p>
            <ul className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
              {site.pillars.map((pillar, index) => (
                <li
                  key={pillar}
                  className="flex items-center gap-3 font-sans text-sm uppercase tracking-[0.22em] text-foreground"
                >
                  <span className="font-display text-gold" aria-hidden="true">
                    {["I", "II", "III"][index]}
                  </span>
                  {pillar}
                </li>
              ))}
            </ul>
            <p className="mt-10 font-sans text-sm uppercase tracking-[0.28em] text-gold/80">
              {site.roles.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
