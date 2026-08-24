export type Venture = {
  roman: string;
  name: string;
  note?: string;
  href?: string;
  embed?: boolean;
  /** Column span on large screens (default 1) */
  span?: 1 | 2;
};

export type Belief = {
  roman: string;
  title: string;
  body: string;
};

export type Pillar = {
  roman: string;
  name: string;
  body: string;
};

export const site = {
  name: "David J Swift",
  title: "Capability Builder",
  roles: ["CEO", "CTO", "COO", "CAIO"] as const,
  headline: "Advancing humanity's leap capability",
  support:
    "Entrepreneur, farmer and technologist — Building towards the amazing carbon-negative future.",
  mission:
    "To advance humanity's capability by building the knowledge, technologies, businesses and systems that enable future generations to thrive.",
  quote: "I don't solve problems. I build the human capacity to solve them.",
  tagline: "Build the capacity to thrive.",
  impactLine: "Long-term thinking. Real-world impact.",
  meet:
    "David J Swift is an entrepreneur turned farmer and technologist — a long-horizon founder building carbon-negative infrastructure and human capability. Founder of MacroAgri in Abu Dhabi and partner in Plant Force Britain, he brings permaculture, the decades-ahead whole-systems design methodology rooted in farming, to modern technology and infrastructure.",
  territory:
    "Where capacity building, Earth systems and future life beyond Earth converge.",
  architectureNote:
    "The founder brand is the connective layer — making the shared purpose across the portfolio clear, memorable and directional.",
  pillars: [
    {
      roman: "I",
      name: "Education",
      body: "Build human capability through knowledge.",
    },
    {
      roman: "II",
      name: "Sustainable Infrastructure",
      body: "Build a more regenerative physical world.",
    },
    {
      roman: "III",
      name: "Capital",
      body: "Back and scale people, ideas and ventures.",
    },
  ] satisfies Pillar[],
  beliefs: [
    {
      roman: "I",
      title: "Build capacity, not fixes",
      body: "Prioritise the knowledge, tools and systems that give people greater agency at the next challenge.",
    },
    {
      roman: "II",
      title: "Regenerate before expanding",
      body: "Treat sustainable land, crops and infrastructure as the foundation of resilient human progress.",
    },
    {
      roman: "III",
      title: "Think in decades, not quarters",
      body: "Compound the portfolio through patient action, stewardship and durable institutions.",
    },
    {
      roman: "IV",
      title: "Prepare Earth for space",
      body: "Begin with the conditions that sustain life here, then extend that capability beyond Earth.",
    },
  ] satisfies Belief[],
  values: [
    "Curiosity",
    "Growth",
    "Generosity",
    "Connection",
    "Optimism",
    "Independence",
  ] as const,
  linkedIn: "https://www.linkedin.com/in/dave-s-53620b124",
  x: "https://x.com/DaveySwift",
  website: "https://davidswift.xyz",
  eopt: "https://eopt.uk",
  bioGallery: [
    {
      roman: "I",
      src: "/images/bio-portrait.png",
      alt: "David J Swift at DIFC Innovation Hub",
      caption: "Builder · DIFC Innovation Hub",
      objectPosition: "18% 42%",
    },
    {
      roman: "II",
      src: "/images/bio-family.jpg",
      alt: "David J Swift with his wife during a collaborative strategy session",
      caption: "Family · Shared mission",
      objectPosition: "48% 32%",
    },
  ] as const,
  logo: {
    src: "/images/logo-djs.png",
    alt: "David J Swift — DJS monogram",
  },
  heroPortrait: {
    src: "/images/hero-portrait.png",
    alt: "David J Swift — mugshot-style portrait",
  },
  ventures: [
    { roman: "I", name: "Swift-Tech Industries" },
    { roman: "II", name: "Swift-Agrosphere" },
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
      name: "MacroAgri",
      note: "Founder · Abu Dhabi",
      href: "https://macroagri.com",
      embed: true,
    },
    {
      roman: "IX",
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
    { href: "#principles", label: "Principles" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ] as const,
} as const;

export type SiteContent = typeof site;
