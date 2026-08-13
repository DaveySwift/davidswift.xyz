export type Venture = {
  roman: string;
  name: string;
  note?: string;
  href?: string;
  embed?: boolean;
  /** Column span on large screens (default 1) */
  span?: 1 | 2;
};

export const site = {
  name: "David Swift",
  title: "Capability Builder",
  roles: ["CEO", "CTO", "COO", "CAIO"] as const,
  headline: "Advance humanity's capability to thrive",
  support:
    "Building the knowledge, technologies, businesses and systems that enable future generations to flourish.",
  mission:
    "To advance humanity's capability by building the knowledge, technologies, businesses and systems that enable future generations to thrive.",
  quote: "I don't solve problems. I build the human capacity to solve them.",
  tagline: "Building systems for a more abundant future.",
  impactLine: "Long-term thinking. Real-world impact.",
  pillars: ["Education", "Sustainable Infrastructure", "Capital"] as const,
  linkedIn: "https://www.linkedin.com/in/dave-s-53620b124",
  x: "https://x.com/DaveySwift",
  website: "https://davidswift.xyz",
  eopt: "https://eopt.uk",
  bioGallery: [
    {
      roman: "I",
      src: "/images/bio-portrait.png",
      alt: "David Swift at DIFC Innovation Hub",
      caption: "Builder · DIFC Innovation Hub",
      // Framed slice: focus on David at left, crop away excess wall
      objectPosition: "18% 42%",
    },
    {
      roman: "II",
      src: "/images/bio-family.jpg",
      alt: "David Swift with his wife during a collaborative strategy session",
      caption: "Family · Shared mission",
      // Couple centered in frame (faces / upper bodies)
      objectPosition: "48% 32%",
    },
  ] as const,
  logo: {
    src: "/images/logo-swift.png",
    alt: "David Swift logo — chrome swift emblem",
  },
  heroPortrait: {
    src: "/images/hero-portrait.png",
    alt: "David Swift — mugshot-style portrait",
  },
  ventures: [
    { roman: "I", name: "Swift-Tech Industries" },
    { roman: "II", name: "Swift-Agro Sphere" },
    {
      roman: "III",
      name: "Plant Force Britain",
      note: "1/3 participant",
      href: "https://www.plantforcebritain.co.uk",
      embed: true,
    },
    { roman: "IV", name: "GLYDx", note: "50% owner" },
    { roman: "V", name: "TheCandidate.io" },
    { roman: "VI", name: "Axelrod.Inc" },
    { roman: "VII", name: "Elektra.Inc" },
    {
      roman: "VIII",
      name: "Elektra-Axelrod.com",
      note: "Joint venture · Axelrod × Elektra",
      href: "https://elektra-axelrod.com",
      embed: true,
      span: 2,
    },
  ] satisfies Venture[],
  nav: [
    { href: "#mission", label: "Mission" },
    { href: "#ventures", label: "Ventures" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ] as const,
} as const;

export type SiteContent = typeof site;
