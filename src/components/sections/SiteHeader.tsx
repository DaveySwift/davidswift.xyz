"use client";

import { BrandMark } from "@/components/ui/BrandMark";
import { useConnect } from "@/components/providers/ConnectProvider";
import { site } from "@/content/site";
import { useEffect, useState } from "react";

const HIDE_AFTER_PX = 8;

export function SiteHeader() {
  const { openConnect } = useConnect();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nextHidden = window.scrollY > HIDE_AFTER_PX;
      setHidden((current) => (current === nextHidden ? current : nextHidden));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      inert={hidden ? true : undefined}
      data-hidden={hidden ? "true" : "false"}
      className="site-header fixed inset-x-0 top-0 z-40 border-b border-transparent bg-transparent"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 md:px-8 md:py-4">
        <BrandMark
          mark="banner"
          showWordmark={false}
          imageClassName="h-12 w-auto sm:h-14 md:h-20"
        />
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
