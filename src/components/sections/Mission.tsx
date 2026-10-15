import { site } from "@/content/site";

export function Mission() {
  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="relative scroll-mt-24 px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4 border-b border-foreground/15 pb-4">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.32em] text-muted">
            Mission
          </p>
          <p className="font-display text-sm tracking-[0.2em] text-muted">02</p>
        </div>

        <h2
          id="mission-heading"
          className="max-w-4xl font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl"
        >
          {site.missionHeadline}
        </h2>

        <blockquote className="mt-12 max-w-3xl border-l-2 border-lime pl-6 md:pl-8">
          <p className="font-sans text-xl italic leading-relaxed text-foreground/85 md:text-2xl">
            “{site.quote}”
          </p>
        </blockquote>

        <p className="mt-10 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg">
          {site.mission}
        </p>
      </div>
    </section>
  );
}
