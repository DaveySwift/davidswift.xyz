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

export const metadata: Metadata = {
  metadataBase: new URL("https://davidswift.xyz"),
  title: "David Swift | Technology. Ventures. A 100-Year Horizon.",
  description:
    "Entrepreneur and green-fingered technologist — building toward an amazing, environmentally positive future.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
      {
        url: "/images/logo-swift-sf-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
    apple: "/images/logo-swift-sf-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://davidswift.xyz",
    siteName: "David Swift",
    title: "David Swift | Technology. Ventures. A 100-Year Horizon.",
    description:
      "Entrepreneur and green-fingered technologist — building toward an amazing, environmentally positive future.",
    images: [
      {
        url: "https://davidswift.xyz/og.png?v=lv2",
        width: 1200,
        height: 630,
        alt: "David Swift — Technology. Ventures. A 100-Year Horizon.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Swift | Technology. Ventures. A 100-Year Horizon.",
    description:
      "Entrepreneur and green-fingered technologist — building toward an amazing, environmentally positive future.",
    images: ["https://davidswift.xyz/og.png?v=lv2"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${barlow.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href={site.heroEarth.src}
          fetchPriority="high"
          blocking="render"
        />
      </head>
      <body className="site-shell min-h-full flex flex-col bg-background text-foreground">
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
