"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  roman: string;
  /** CSS object-position for the framed crop slice */
  objectPosition?: string;
};

type ImageCarouselProps = {
  images: readonly GalleryImage[];
  className?: string;
};

export function ImageCarousel({ images, className }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const total = images.length;
  const current = images[index];

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (lightboxOpen) {
        if (event.key === "Escape") {
          setLightboxOpen(false);
        }
        if (event.key === "ArrowRight") {
          setIndex((value) => (value + 1) % total);
        }
        if (event.key === "ArrowLeft") {
          setIndex((value) => (value - 1 + total) % total);
        }
        return;
      }

      if (event.key === "ArrowRight") {
        setIndex((value) => (value + 1) % total);
      }
      if (event.key === "ArrowLeft") {
        setIndex((value) => (value - 1 + total) % total);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total, lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) {
      return;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [lightboxOpen]);

  if (!current) {
    return null;
  }

  const goPrev = () => setIndex((value) => (value - 1 + total) % total);
  const goNext = () => setIndex((value) => (value + 1) % total);

  return (
    <div className={cn("mx-auto w-full max-w-md lg:mx-0", className)}>
      <div className="double-frame">
        <div className="double-frame-inner relative w-full overflow-hidden">
          <div
            className="flex w-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((image) => (
              <button
                key={image.src}
                type="button"
                className="group relative aspect-[3/4] w-full min-w-0 shrink-0 grow-0 basis-full cursor-zoom-in overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
                onClick={() => setLightboxOpen(true)}
                aria-label={`View full photo: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 28rem"
                  className="object-cover grayscale transition duration-500 ease-out group-hover:grayscale-0"
                  style={{
                    objectPosition: image.objectPosition ?? "center center",
                  }}
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-background/80 to-transparent px-4 py-3 font-sans text-[0.65rem] uppercase tracking-[0.28em] text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  Expand
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={goPrev}
          className="inline-flex h-12 min-w-12 items-center justify-center border border-gold/50 bg-transparent px-4 font-sans text-xs uppercase tracking-[0.28em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Previous photo"
        >
          Prev
        </button>

        <div
          className="flex items-center gap-3"
          role="tablist"
          aria-label="Family gallery"
        >
          {images.map((image, imageIndex) => (
            <button
              key={image.src}
              type="button"
              role="tab"
              aria-selected={imageIndex === index}
              aria-label={`${image.roman}. ${image.caption}`}
              onClick={() => setIndex(imageIndex)}
              className={cn(
                "font-display text-sm tracking-[0.2em] transition-colors duration-300",
                imageIndex === index
                  ? "text-gold"
                  : "text-muted hover:text-gold/80",
              )}
            >
              {image.roman}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          className="inline-flex h-12 min-w-12 items-center justify-center border border-gold/50 bg-transparent px-4 font-sans text-xs uppercase tracking-[0.28em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Next photo"
        >
          Next
        </button>
      </div>

      <p className="mt-4 text-center font-sans text-sm uppercase tracking-[0.22em] text-muted">
        {current.caption}
      </p>

      {lightboxOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/92 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative flex max-h-full w-full max-w-5xl flex-col animate-deco-fade-up"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <p
                id={titleId}
                className="font-sans text-xs uppercase tracking-[0.3em] text-gold"
              >
                {current.roman} · {current.caption}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="inline-flex h-12 items-center justify-center border border-gold/60 px-5 font-sans text-xs uppercase tracking-[0.28em] text-gold transition-all duration-300 hover:bg-gold hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Close
              </button>
            </div>

            <div className="double-frame glow-gold">
              <div className="double-frame-inner relative flex max-h-[min(80vh,900px)] items-center justify-center overflow-auto bg-card">
                <Image
                  src={current.src}
                  alt={current.alt}
                  width={1200}
                  height={1600}
                  className="h-auto max-h-[min(78vh,880px)] w-auto max-w-full object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex h-12 items-center justify-center border border-gold/50 px-5 font-sans text-xs uppercase tracking-[0.28em] text-gold transition-all duration-300 hover:bg-gold hover:text-background"
                aria-label="Previous photo"
              >
                Prev
              </button>
              <p className="max-w-md text-center font-sans text-sm leading-relaxed text-foreground/80">
                {current.alt}
              </p>
              <button
                type="button"
                onClick={goNext}
                className="inline-flex h-12 items-center justify-center border border-gold/50 px-5 font-sans text-xs uppercase tracking-[0.28em] text-gold transition-all duration-300 hover:bg-gold hover:text-background"
                aria-label="Next photo"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
