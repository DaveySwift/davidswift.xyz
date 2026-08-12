import { Bio } from "@/components/sections/Bio";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Ventures } from "@/components/sections/Ventures";
import { ConnectProvider } from "@/components/providers/ConnectProvider";

export default function Home() {
  return (
    <ConnectProvider>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <Ventures />
        <Bio />
        <Contact />
      </main>
      <SiteFooter />
    </ConnectProvider>
  );
}
