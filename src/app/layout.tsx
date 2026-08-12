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
    icon: "/images/logo-swift-gold.png",
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
