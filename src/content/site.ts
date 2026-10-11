export type Venture = {
  roman: string;
  name: string;
  note?: string;
  href?: string;
  embed?: boolean;
  /** Show under-construction treatment even when a link is present */
  underConstruction?: boolean;
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

export type WorkPillar = {
  eyebrow: string;
  title: string;
  body: string;
  themes: readonly string[];
  ventures: readonly string[];
};

export type HorizonStage = {
  label: string;
  title: string;
  body: string;
};

export const site = {
  name: "David Swift",
  title: "Capability Builder",
  roles: ["CEO", "CTO", "COO", "CAIO"] as const,
  eyebrow: "Technology · Ventures · A 100-year horizon",
  headlineLines: ["Science.", "Technology.", "What comes next."] as const,
  headline: "Advancing humanity's leap capability",
  support:
    "Entrepreneur and green-fingered technologist — building toward an amazing, environmentally positive future.",
  heroSupport:
    "David Swift builds and backs technology ventures designed around the systems, knowledge and human capability future generations will need.",
  mission:
    "Provisioning humanity to take its next great leap by building businesses and systems whose fruits will give future generations the capability, opportunity, and hope to flourish.",
  missionHeadline:
    "Build useful resources today while expanding what people will be capable of tomorrow.",
  quote: "Solving problems to enable others.",
  tagline: "Build the capacity to thrive.",
  impactLine: "Long-term thinking. Real-world impact.",
  meet:
    "David Swift is an entrepreneur, green-fingered technologist and long-horizon founder — building MacroAgri from Abu Dhabi, advancing Plant Force Britain, and shaping a house that spans intelligent systems, capital, precision manufacturing and human capability. He works where regenerative infrastructure meets modern enterprise: solving problems to enable others, and advancing the capacity for future generations to thrive on Earth and beyond.",
  familyLine:
    "With family at the centre — a shared story of ambition, partnership, and the long view.",
  territory:
    "Where capacity building, Earth systems and future life beyond Earth converge.",
  architectureNote:
    "The founder brand is the connective layer — making the shared purpose across the portfolio clear, memorable and directional.",
  marquee: [
    "Build what comes next",
    "Think in decades",
    "Increase human capability",
  ] as const,
  workPillars: [
    {
      eyebrow: "Foundation",
      title: "Infrastructure",
      body: "Sustainable future crops and low-carbon technologies: carbon credits and green energy engineered to prove their value in the world now.",
      themes: ["Future crops", "Carbon credits", "Green energy"],
      ventures: ["MacroAgri", "Plant Force Britain"],
    },
    {
      eyebrow: "Capability",
      title: "Intelligence",
      body: "Education, applied intelligence and human systems that expand what people are capable of learning, building and becoming.",
      themes: ["Cosmic intelligence", "Human resources", "Capability"],
      ventures: ["Superintelligence coming soon"],
    },
    {
      eyebrow: "Frontier",
      title: "Enterprise 2.0",
      body: "Precision technology, manufacturing and patient capital shaping how the next century builds, funds and scales.",
      themes: ["Precision tech", "Funds & resources", "Long horizon"],
      ventures: ["Elektra-Axelrod.com"],
    },
  ] satisfies WorkPillar[],
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
      body: "Sustainable planetary infrastructure is where resilient human progress begins.",
    },
    {
      roman: "III",
      title: "Think in decades, not quarters",
      body: "Prioritise the systems that give people enduring agency across decades: knowledge to understand, wisdom to choose well, and technology to meet the next challenge.",
    },
    {
      roman: "IV",
      title: "Prepare Earth for space",
      body: "Begin with the conditions that sustain life here, then extend that capability beyond Earth.",
    },
  ] satisfies Belief[],
  horizon: [
    {
      label: "Years 0 to 25",
      title: "Build",
      body: "Current technology ventures, useful systems and ideas designed to prove their value in the world now.",
    },
    {
      label: "Years 25+",
      title: "Capability",
      body: "Knowledge, human capability and enduring communities that can carry the work forward.",
    },
    {
      label: "Years 70+",
      title: "Beyond",
      body: "The conditions for life beyond Earth, built on everything the first century makes possible.",
    },
  ] satisfies HorizonStage[],
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
      alt: "David Swift at DIFC Innovation Hub",
      caption: "Builder · DIFC Innovation Hub",
      objectPosition: "18% 42%",
    },
    {
      roman: "II",
      src: "/images/bio-family.jpg",
      alt: "David Swift with his wife during a collaborative strategy session",
      caption: "Family · Shared mission",
      objectPosition: "48% 32%",
    },
  ] as const,
  logo: {
    src: "/images/logo-swift-sf.png",
    alt: "David Swift — retro space mark",
  },
  heroLogo: {
    src: "/images/logo-swift-sf-hero.png",
    alt: "David Swift — DS space mark",
  },
  heroEarth: {
    src: "/images/hero-earth.jpg",
    alt: "Earth from space",
  },
  heroPortrait: {
    src: "/images/hero-portrait.png",
    alt: "David Swift — mugshot-style portrait",
  },
  ventures: [
    {
      roman: "I",
      name: "Plant Force Britain",
      note: "1/3 participant",
      href: "https://www.plantforcebritain.co.uk",
      embed: true,
    },
    {
      roman: "II",
      name: "MacroAgri",
      note: "Founder · Abu Dhabi",
      href: "https://macroagri.com",
      embed: true,
    },
    {
      roman: "III",
      name: "mindout.ai",
      note: "Cosmic intelligence",
      href: "https://x.com/mindoutai",
      underConstruction: true,
    },
    { roman: "IV", name: "GLYDx", note: "50% owner" },
    { roman: "V", name: "TheCandidate.io", note: "Human resources" },
    { roman: "VI", name: "Axelrod.Inc", note: "Funds & Resources" },
    {
      roman: "VII",
      name: "Elektra.Inc",
      note: "Precision tech & Manufacturing",
    },
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
    { href: "#work", label: "Work" },
    { href: "#mission", label: "Mission" },
    { href: "#horizon", label: "Horizon" },
    { href: "#about", label: "About" },
  ] as const,
  ctaHeadline: ["Build the next", "hundred years."] as const,
} as const;

export type SiteContent = typeof site;
