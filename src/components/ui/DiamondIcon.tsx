import { cn } from "@/lib/cn";

type DiamondIconProps = {
  className?: string;
  children: React.ReactNode;
};

export function DiamondIcon({ className, children }: DiamondIconProps) {
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center border border-gold/60 bg-background/40 transition-transform duration-500 ease-out hover:rotate-0",
        "rotate-45",
        className,
      )}
    >
      <div className="-rotate-45 font-display text-sm text-gold">{children}</div>
    </div>
  );
}
