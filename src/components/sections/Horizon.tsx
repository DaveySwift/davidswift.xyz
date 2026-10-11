import { site } from "@/content/site";

export function Horizon() {
  return (
    <section
      id="horizon"
      aria-labelledby="horizon-heading"
      className="relative scroll-mt-24 px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.32em] text-lime">
          The horizon
        </p>
        <h2
          id="horizon-heading"
          className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-foreground md:text-6xl"
        >
          Build for
          <br />
          <span className="text-lime">year 100.</span>
        </h2>

        <ol className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {site.horizon.map((stage, index) => (
            <li
              key={stage.title}
              className="border-t border-foreground/15 pt-6"
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                {String(index + 1).padStart(2, "0")} · {stage.label}
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground md:text-3xl">
                {stage.title}
              </h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-foreground/75 md:text-base">
                {stage.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
