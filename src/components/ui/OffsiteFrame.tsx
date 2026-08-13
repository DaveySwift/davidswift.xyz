"use client";

import { useEffect, useId, useRef } from "react";

type Props = {
  open: boolean;
  src: string;
  name: string;
  onClose: () => void;
};

export function OffsiteFrame({ open, src, name, onClose }: Props) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const host = new URL(src).hostname.replace(/^www\./, "");

  useEffect(() => {
    if (!open) {
      return;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-background/92 p-4 backdrop-blur-sm md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="relative flex h-[min(88svh,52rem)] w-full max-w-6xl flex-col animate-deco-fade-up border border-gold/40 bg-card p-4 glow-gold sm:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-gold/60"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-gold/60"
        />

        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold">
              Offsite
            </p>
            <h2
              id={titleId}
              className="mt-2 truncate font-display text-xl uppercase tracking-[0.18em] text-foreground md:text-2xl"
            >
              {name}
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center border border-gold/50 px-4 font-sans text-xs uppercase tracking-[0.22em] text-gold transition-all duration-300 hover:bg-gold hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Visit {host}
            </a>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="inline-flex h-12 items-center justify-center border border-gold/50 px-4 font-sans text-xs uppercase tracking-[0.28em] text-gold transition-all duration-300 hover:bg-gold hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Close
            </button>
          </div>
        </div>

        <div className="relative min-h-0 flex-1 overflow-hidden border border-gold/40 bg-background">
          <iframe
            src={src}
            title={`${name} website`}
            referrerPolicy="strict-origin-when-cross-origin"
            className="block h-full w-full bg-background"
          />
        </div>
      </div>
    </div>
  );
}
