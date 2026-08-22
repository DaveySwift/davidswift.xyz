import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export function Principles() {
  return (
    <section
      id="principles"
      aria-labelledby="principles-heading"
      className="relative scroll-mt-24 px-6 py-32 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="principles-heading"
          eyebrow="How it gets done"
          title="Principles"
        />
        <p className="mx-auto mb-16 max-w-2xl text-center font-sans text-base leading-relaxed text-muted md:text-lg">
          The beliefs that give the venture portfolio a clear and differentiated
          point of view.
        </p>
        <ol className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-14 md:gap-y-16">
          {site.beliefs.map((belief) => (
            <li key={belief.roman} className="relative border-t border-gold/30 pt-8">
              <p className="font-display text-sm tracking-[0.28em] text-gold">
                {belief.roman}
              </p>
              <h3 className="mt-4 font-display text-xl uppercase tracking-[0.14em] text-foreground md:text-2xl">
                {belief.title}
              </h3>
              <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-foreground/75">
                {belief.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
