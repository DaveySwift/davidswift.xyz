"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useConnect } from "@/components/providers/ConnectProvider";
import { site } from "@/content/site";

export function Hero() {
  const { openConnect } = useConnect();

  return (
    <section
      id="hero"
      aria-labelledby="hero-brand"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="sunburst animate-deco-sunburst absolute inset-0"
      />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-24 pt-32 text-center md:px-8">
        <div className="relative mb-10 animate-deco-fade-up">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-2xl md:h-64 md:w-64"
            style={{
              background:
                "radial-gradient(circle, rgba(212,175,55,0.28) 0%, rgba(212,175,55,0.08) 45%, transparent 70%)",
            }}
          />
          <div className="relative z-10 mx-auto w-[9.5rem] border border-gold p-1.5 glow-gold md:w-[11.5rem]">
            <div className="border border-gold/35 bg-card p-1">
              <Image
                src={site.heroPortrait.src}
                alt={site.heroPortrait.alt}
                width={800}
                height={1024}
                className="aspect-[4/5] w-full object-cover object-[center_18%] grayscale transition duration-500 ease-out hover:grayscale-0"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
        <p className="mb-4 font-sans text-xs uppercase tracking-[0.4em] text-gold animate-deco-fade-up [animation-delay:80ms]">
          {site.title}
        </p>
        <h1
          id="hero-brand"
          className="font-display text-5xl uppercase tracking-[0.2em] text-foreground animate-deco-track sm:text-6xl md:text-7xl"
        >
          {site.name}
        </h1>
        <p className="mt-8 max-w-2xl font-display text-xl uppercase tracking-[0.18em] text-gold animate-deco-fade-up [animation-delay:160ms] md:text-2xl">
          {site.headline}
        </p>
        <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-foreground/85 animate-deco-fade-up [animation-delay:240ms]">
          {site.support}
        </p>
        <div className="mt-12 flex flex-col items-stretch gap-4 animate-deco-fade-up [animation-delay:320ms] sm:flex-row sm:items-center">
          <Button href="#ventures" variant="solid">
            Explore Ventures
          </Button>
          <Button type="button" variant="default" onClick={openConnect}>
            Connect
          </Button>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/40 to-gold/10"
      />
    </section>
  );
}
