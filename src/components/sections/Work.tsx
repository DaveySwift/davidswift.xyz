import { site } from "@/content/site";

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative scroll-mt-24 px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4 border-b border-foreground/15 pb-4">
          <p
            id="work-heading"
            className="font-sans text-xs font-semibold uppercase tracking-[0.32em] text-muted"
          >
            The work
          </p>
          <p className="font-display text-sm tracking-[0.2em] text-muted">01</p>
        </div>

        <ul className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {site.workPillars.map((pillar) => (
            <li
              key={pillar.title}
              className="flex flex-col border border-foreground/10 bg-card/80 p-6 md:p-7"
            >
              <span aria-hidden="true" className="mb-6 h-1 w-10 bg-lime" />
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-lime">
                {pillar.eyebrow}
              </p>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {pillar.title}
              </h3>
              <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-foreground/75 md:text-base">
                {pillar.body}
              </p>
              <ul className="mt-6 flex flex-col gap-2">
                {pillar.themes.map((theme) => (
                  <li
                    key={theme}
                    className="font-sans text-sm font-medium text-lime"
                  >
                    {theme}
                  </li>
                ))}
              </ul>
              {pillar.ventures.length > 0 ? (
                <div className="mt-8 border-t border-foreground/10 pt-5">
                  <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-foreground/60">
                    Ventures
                  </p>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {pillar.ventures.map((venture) => (
                      <li
                        key={venture}
                        className="font-sans text-sm text-foreground/90"
                      >
                        {venture}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
