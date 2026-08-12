import { BrandMark } from "@/components/ui/BrandMark";
import { site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/20 px-6 py-16 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm">
          <BrandMark size={36} />
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted">
            {site.pillars.join(" · ")}
          </p>
        </div>
        <div className="flex flex-col gap-3 font-sans text-xs uppercase tracking-[0.28em] text-foreground/80">
          <a
            href={site.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-gold"
          >
            LinkedIn
          </a>
          <a
            href={site.x}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-gold"
          >
            @{`DaveySwift`}
          </a>
          <a
            href={site.eopt}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-gold"
          >
            eopt.uk
          </a>
        </div>
        <p className="font-sans text-xs uppercase tracking-[0.22em] text-muted lg:text-right">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
