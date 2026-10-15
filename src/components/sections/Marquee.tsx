import { site } from "@/content/site";

export function Marquee() {
  const items = [...site.marquee, ...site.marquee, ...site.marquee, ...site.marquee];

  return (
    <div
      className="relative overflow-hidden border-y border-background/20 bg-lime py-4"
      aria-hidden="true"
    >
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-display text-sm font-bold uppercase tracking-[0.22em] text-background md:text-base"
          >
            {item}
            <span className="ml-8 text-background/50">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
