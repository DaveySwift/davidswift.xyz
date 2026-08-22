import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 px-6 py-32 md:px-8"
    >
      <div className="mx-auto max-w-5xl text-center">
        <SectionHeading
          id="contact-heading"
          eyebrow="Correspondence"
          title="Contact"
        />
        <p className="mx-auto max-w-2xl font-display text-2xl uppercase tracking-[0.16em] text-foreground md:text-3xl">
          {site.tagline}
        </p>
        <p className="mx-auto mt-6 max-w-xl font-sans text-lg leading-relaxed text-muted">
          {site.territory}
        </p>
        <p className="mx-auto mt-4 max-w-lg font-sans text-base leading-relaxed text-foreground/70">
          Connect to discuss ventures, regenerative infrastructure, capability
          building, and long-horizon collaboration.
        </p>
        <p className="mt-8 font-sans text-xs uppercase tracking-[0.35em] text-gold">
          {site.roles.join(" · ")}
        </p>
        <div className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <Button
            href={site.linkedIn}
            variant="solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
          <Button href="#ventures" variant="outline">
            View Ventures
          </Button>
        </div>
      </div>
    </section>
  );
}
