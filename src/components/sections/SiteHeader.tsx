"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "@/components/ui/BrandMark";
import { Button } from "@/components/ui/Button";
import { HeaderSocialLinks } from "@/components/ui/SocialLinks";
import { useConnect } from "@/components/providers/ConnectProvider";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const { openConnect } = useConnect();
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }
        setPastHero(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-72px 0px 0px 0px" },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-500 ease-out",
        pastHero
          ? "border-b border-gold/20 bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6 md:gap-6 md:px-8">
        <BrandMark size={64} showWordmark={false} />
        <nav
          aria-label="Primary"
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 lg:flex"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-xs uppercase tracking-[0.28em] text-foreground/80 transition-colors duration-300 hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center justify-end gap-2 sm:gap-3">
          <HeaderSocialLinks linkedIn={site.linkedIn} x={site.x} />
          <div
            className={cn(
              "overflow-hidden transition-[max-width,opacity,transform,margin] duration-500 ease-out",
              pastHero
                ? "ml-0 max-w-[11rem] translate-x-0 opacity-100"
                : "pointer-events-none ml-0 max-w-0 translate-x-6 opacity-0",
            )}
            aria-hidden={!pastHero}
          >
            <Button
              type="button"
              variant="outline"
              className="whitespace-nowrap px-4 sm:px-5"
              tabIndex={pastHero ? 0 : -1}
              onClick={openConnect}
            >
              Connect
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
