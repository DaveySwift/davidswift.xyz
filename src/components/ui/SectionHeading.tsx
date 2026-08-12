import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  className?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16 flex flex-col gap-6",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="h-px w-24 bg-gold/70"
      />
      {eyebrow ? (
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-display text-3xl uppercase tracking-[0.2em] text-gold md:text-4xl"
      >
        {title}
      </h2>
      <span
        aria-hidden="true"
        className="h-px w-24 bg-gold/70"
      />
    </div>
  );
}
