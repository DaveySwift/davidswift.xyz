import { cn } from "@/lib/cn";

type SocialIconLinkProps = {
  href: string;
  label: string;
  className?: string;
  children: React.ReactNode;
};

function SocialIconLink({
  href,
  label,
  className,
  children,
}: SocialIconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center border border-gold/45 text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-background hover:glow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-4 w-4 fill-current", className)}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-4 w-4 fill-current", className)}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type HeaderSocialLinksProps = {
  linkedIn: string;
  x: string;
  className?: string;
};

export function HeaderSocialLinks({
  linkedIn,
  x,
  className,
}: HeaderSocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <SocialIconLink href={x} label="David Swift on X">
        <XIcon />
      </SocialIconLink>
      <SocialIconLink href={linkedIn} label="David Swift on LinkedIn">
        <LinkedInIcon />
      </SocialIconLink>
    </div>
  );
}
