import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type BrandMarkProps = {
  className?: string;
  size?: number;
  showWordmark?: boolean;
  wordmarkClassName?: string;
  href?: string;
  /** Prefer circular DS hero mark for nav */
  mark?: "wordmark" | "icon";
};

export function BrandMark({
  className,
  size = 48,
  showWordmark = false,
  wordmarkClassName,
  href = "/",
  mark = "icon",
}: BrandMarkProps) {
  const src = mark === "icon" ? site.heroLogo.src : site.logo.src;
  const alt = mark === "icon" ? site.heroLogo.alt : site.logo.alt;

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-95",
        className,
      )}
      aria-label={`${site.name}, back to top`}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="relative z-10 h-auto w-auto object-contain"
        style={{ width: size, height: "auto" }}
        priority
        unoptimized
      />
      {showWordmark ? (
        <span
          className={cn(
            "font-display text-sm font-semibold uppercase tracking-[0.22em] text-foreground md:text-base",
            wordmarkClassName,
          )}
        >
          {site.name}
        </span>
      ) : null}
    </Link>
  );
}
