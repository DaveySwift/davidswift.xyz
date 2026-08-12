import { cn } from "@/lib/cn";

type CornerFrameProps = {
  className?: string;
  children: React.ReactNode;
};

export function CornerFrame({ className, children }: CornerFrameProps) {
  return (
    <div
      className={cn(
        "group relative border border-gold/30 bg-card p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-gold hover:glow-gold",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-gold/50 transition-opacity duration-500 group-hover:border-gold group-hover:opacity-100"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2 border-gold/50 transition-opacity duration-500 group-hover:border-gold group-hover:opacity-100"
      />
      {children}
    </div>
  );
}
