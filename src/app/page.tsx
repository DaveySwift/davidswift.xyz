import { Bio } from "@/components/sections/Bio";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Horizon } from "@/components/sections/Horizon";
import { Marquee } from "@/components/sections/Marquee";
import { Mission } from "@/components/sections/Mission";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Work } from "@/components/sections/Work";
import { ConnectProvider } from "@/components/providers/ConnectProvider";

export default function Home() {
  return (
    <ConnectProvider>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <Marquee />
        <Work />
        <Mission />
        <Horizon />
        <Bio />
        <Contact />
      </main>
      <SiteFooter />
    </ConnectProvider>
  );
}
