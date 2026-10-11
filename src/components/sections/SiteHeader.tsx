"use client";

import { BrandMark } from "@/components/ui/BrandMark";
import { useConnect } from "@/components/providers/ConnectProvider";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { useEffect, useState } from "react";

const HIDE_AFTER_PX = 8;

export function SiteHeader() {
  const { openConnect } = useConnect();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nextHidden = y > HIDE_AFTER_PX;
      const nextScrolled = y > 24;
      setHidden((current) => (current === nextHidden ? current : nextHidden));
      setScrolled((current) =>
        current === nextScrolled ? current : nextScrolled,
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      inert={hidden ? true : undefined}
      className={cn(
        "site-header",
        "fixed inset-x-0 top-0 z-40 transition-[transform,background-color,border-color,backdrop-filter] duration-300 ease-out motion-reduce:transition-none",
        hidden ? "-translate-y-full" : "translate-y-0",
        scrolled
          ? "border-b border-foreground/10 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5 md:px-8">
        <BrandMark size={44} mark="icon" showWordmark={false} />
        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 lg:flex"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-foreground/75 transition-colors duration-300 hover:text-lime"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={openConnect}
          className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-lime transition-opacity duration-300 hover:opacity-80"
        >
          Get in touch
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </header>
  );
}
