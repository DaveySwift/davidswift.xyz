import type { Metadata } from "next";
import { Barlow, Space_Grotesk } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const pageTitle = "David Swift | Regenerative · Intelligence · Enterprise 2.0";

const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${site.website}/#page`,
      url: `${site.website}/`,
      name: pageTitle,
      description: site.heroSupport,
      inLanguage: "en",
      about: { "@id": `${site.website}/#david-swift` },
    },
    {
      "@type": "Person",
      "@id": `${site.website}/#david-swift`,
      name: site.name,
      url: site.website,
      description: site.heroSupport,
      image: `${site.website}${site.bioGallery[0].src}`,
      homeLocation: {
        "@type": "Place",
        name: "Dubai",
      },
      sameAs: [site.linkedIn, site.x],
      knowsAbout: site.workPillars.map((pillar) => pillar.title),
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://davidswift.xyz"),
  title: pageTitle,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=badge", sizes: "48x48" },
      { url: "/favicon.png?v=badge", type: "image/png", sizes: "64x64" },
      {
        url: "/images/logo-swift-sf-icon.png?v=badge",
        type: "image/png",
        sizes: "180x180",
      },
    ],
    apple: "/images/logo-swift-sf-icon.png?v=badge",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://davidswift.xyz",
    siteName: "David Swift",
    title: pageTitle,
    images: [
      {
        url: "https://davidswift.xyz/og.jpg?v=lv3",
        width: 1200,
        height: 630,
        alt: "David Swift — Science. Technology. What comes next.",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    images: ["https://davidswift.xyz/og.jpg?v=lv3"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${barlow.variable} h-full antialiased`}
    >
      <head>
        <meta name="description" content={site.heroSupport} />
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="Summary for language models"
        />
        <link
          rel="preload"
          as="image"
          href={site.heroEarth.src}
          fetchPriority="high"
          blocking="render"
        />
      </head>
      <body className="site-shell min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-lime focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:uppercase focus:tracking-widest focus:text-background"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
