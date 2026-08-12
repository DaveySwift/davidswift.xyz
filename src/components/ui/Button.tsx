import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "default" | "solid" | "outline";

const variantClasses: Record<Variant, string> = {
  default:
    "border-2 border-gold bg-transparent text-gold hover:bg-gold hover:text-background hover:glow-gold-strong",
  solid:
    "border-2 border-gold bg-gold text-background hover:bg-gold-light hover:border-gold-light",
  outline:
    "border border-gold bg-transparent text-gold hover:bg-midnight hover:text-foreground",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex h-12 min-h-12 items-center justify-center px-8 font-sans text-sm uppercase tracking-[0.2em] transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60",
    variantClasses[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
