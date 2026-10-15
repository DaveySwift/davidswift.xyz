"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useConnect } from "@/components/providers/ConnectProvider";
import { site } from "@/content/site";

export function Bio() {
  const { openConnect } = useConnect();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4 border-b border-foreground/15 pb-4">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.32em] text-muted">
            About David
          </p>
          <p className="font-display text-sm tracking-[0.2em] text-muted">03</p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative overflow-hidden border border-foreground/10 bg-card">
            <Image
              src={site.bioGallery[0].src}
              alt={site.bioGallery[0].alt}
              width={768}
              height={1024}
              className="aspect-[3/4] w-full object-cover object-[18%_42%] grayscale transition duration-500 hover:grayscale-0"
              unoptimized
            />
          </div>

          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-lime">
              Profile
            </p>
            <h2
              id="about-heading"
              className="sr-only"
            >
              About {site.name}
            </h2>
            <div className="mt-6 space-y-5 font-sans text-base leading-relaxed text-foreground/80 md:text-lg">
              {site.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <p className="mt-10 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-lime text-muted">
              {site.values.join(" · ")}
            </p>

            <Button
              type="button"
              variant="solid"
              className="mt-10"
              onClick={openConnect}
            >
              Get in touch
              <span aria-hidden="true">↗</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
