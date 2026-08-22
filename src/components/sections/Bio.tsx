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
      <div id="mission" className="absolute -top-24" aria-hidden="true" />
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
              Meet David
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-foreground/80 md:text-lg">
              {site.meet}
            </p>
            <p className="mt-10 font-sans text-xs uppercase tracking-[0.35em] text-gold">
              Mission
            </p>
            <p className="mt-4 font-display text-2xl leading-snug tracking-wide text-foreground md:text-3xl">
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
            <p className="mt-10 font-sans text-sm uppercase tracking-[0.28em] text-gold/80">
              {site.roles.join(" · ")}
            </p>
          </div>
        </div>

        <div className="mt-24 border-t border-gold/25 pt-16">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold">
            Brand architecture
          </p>
          <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-foreground/75">
            {site.architectureNote}
          </p>
          <ul className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {site.pillars.map((pillar) => (
              <li key={pillar.name} className="border-t border-gold/30 pt-6">
                <p className="font-display text-sm tracking-[0.28em] text-gold">
                  {pillar.roman}
                </p>
                <h3 className="mt-3 font-display text-lg uppercase tracking-[0.16em] text-foreground">
                  {pillar.name}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
                  {pillar.body}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-12 font-sans text-xs uppercase tracking-[0.28em] text-gold/70">
            {site.values.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}
