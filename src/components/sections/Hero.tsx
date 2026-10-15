"use client";

import { Button } from "@/components/ui/Button";
import { useConnect } from "@/components/providers/ConnectProvider";
import { site } from "@/content/site";

export function Hero() {
  const { openConnect } = useConnect();

  return (
    <section
      id="hero"
      aria-labelledby="hero-brand"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 md:pb-24 md:pt-32"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-earth-drift absolute inset-0">
          <img
            src={site.heroEarth.src}
            alt=""
            fetchPriority="high"
            decoding="sync"
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover object-top"
            style={{ objectFit: "cover", objectPosition: "center top" }}
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-transparent via-[58%] to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/20" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-14 md:px-8">
        <div className="animate-sf-fade-up">
          <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.32em] text-lime">
            {site.eyebrow}
          </p>
          <h1
            id="hero-brand"
            className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-[-0.03em] text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {site.headlineLines.map((line, index) => (
              <span
                key={line}
                className={cnLine(index === site.headlineLines.length - 1)}
              >
                {line}
                {index < site.headlineLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>
        </div>

        <div className="animate-sf-fade-up [animation-delay:120ms] md:pb-2">
          <p className="max-w-md font-sans text-base leading-relaxed text-foreground/85 md:text-lg">
            {site.heroSupport}
          </p>
          <Button
            type="button"
            variant="solid"
            className="mt-8"
            onClick={openConnect}
          >
            Get in touch
            <span aria-hidden="true">↗</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

function cnLine(isAccent: boolean) {
  return isAccent ? "text-lime" : "text-foreground";
}
