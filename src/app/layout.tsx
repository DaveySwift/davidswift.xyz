import type { Metadata } from "next";
import { Josefin_Sans, Marcellus } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://davidswift.xyz"),
  title: "David Swift | Capability Builder",
  description:
    "David Swift — entrepreneur building knowledge, technologies, businesses and systems that enable future generations to thrive.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
      { url: "/images/logo-swift.png", type: "image/png", sizes: "688x688" },
    ],
    apple: "/images/logo-swift.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://davidswift.xyz",
    siteName: "David Swift",
    title: "David Swift | Capability Builder",
    description:
      "Building the knowledge, technologies, businesses and systems that enable future generations to thrive.",
    images: [
      {
        url: "https://davidswift.xyz/og.png?v=mugshot1",
        width: 1200,
        height: 630,
        alt: "David Swift — Capability Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Swift | Capability Builder",
    description:
      "Building the knowledge, technologies, businesses and systems that enable future generations to thrive.",
    images: ["https://davidswift.xyz/og.png?v=mugshot1"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${josefin.variable} h-full antialiased`}
    >
      <body className="site-shell min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:uppercase focus:tracking-widest focus:text-background"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
