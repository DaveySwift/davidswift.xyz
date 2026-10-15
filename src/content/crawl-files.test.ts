import { readFileSync } from "node:fs";
import { join } from "node:path";
import { site } from "./site";

const publicFile = (name: string) =>
  readFileSync(join(process.cwd(), "public", name), "utf8");

describe("crawl files", () => {
  it("gives language models the same brief as the site", () => {
    const brief = publicFile("llms.txt");
    expect(brief).toContain(site.heroSupport);
    expect(brief).toContain(site.name);
    expect(brief).toContain(site.website);
    for (const pillar of site.workPillars) {
      expect(brief).toContain(pillar.title);
    }
    expect(brief).toContain(site.values.join(", "));
  });

  it("points crawlers at the sitemap and the language-model brief", () => {
    const robots = publicFile("robots.txt");
    expect(robots).toContain("Allow: /");
    expect(robots).toContain("Sitemap: https://davidswift.xyz/sitemap.xml");
    expect(robots).toContain("https://davidswift.xyz/llms.txt");
  });

  it("lists the canonical homepage", () => {
    const sitemap = publicFile("sitemap.xml");
    expect(sitemap).toContain("<loc>https://davidswift.xyz/</loc>");
  });
});
