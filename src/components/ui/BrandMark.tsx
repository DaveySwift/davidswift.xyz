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
};

export function BrandMark({
  className,
  size = 48,
  showWordmark = true,
  wordmarkClassName,
  href = "/",
}: BrandMarkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-95",
        className,
      )}
    >
      <span className="relative inline-flex shrink-0 items-center justify-center">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full opacity-50 blur-md transition-opacity duration-500 group-hover:opacity-80"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.35) 0%, transparent 70%)",
          }}
        />
        <Image
          src={site.logo.src}
          alt={site.logo.alt}
          width={size}
          height={size}
          className="relative z-10 h-auto w-auto object-contain"
          style={{ width: size, height: size }}
          priority
          unoptimized
        />
      </span>
      {showWordmark ? (
        <span
          className={cn(
            "font-display text-sm uppercase tracking-[0.28em] text-foreground md:text-base",
            wordmarkClassName,
          )}
        >
          {site.name}
        </span>
      ) : null}
    </Link>
  );
}
