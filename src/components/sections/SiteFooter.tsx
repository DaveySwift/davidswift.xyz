import { BrandMark } from "@/components/ui/BrandMark";
import { HeaderSocialLinks } from "@/components/ui/SocialLinks";
import { site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 px-6 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <BrandMark size={40} mark="icon" showWordmark />
        <HeaderSocialLinks linkedIn={site.linkedIn} x={site.x} />
        <p className="font-sans text-xs uppercase tracking-[0.22em] text-muted md:text-right">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
