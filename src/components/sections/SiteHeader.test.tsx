import { act, render, screen } from "@testing-library/react";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { ConnectProvider } from "@/components/providers/ConnectProvider";

function setScrollY(y: number) {
  act(() => {
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: y,
    });
    window.dispatchEvent(new Event("scroll"));
  });
}

describe("SiteHeader", () => {
  afterEach(() => {
    setScrollY(0);
  });

  it("hides after a few pixels of scroll and returns at the top", () => {
    setScrollY(0);
    render(
      <ConnectProvider>
        <SiteHeader />
      </ConnectProvider>,
    );

    const header = screen.getByRole("banner");
    expect(header.className).toContain("translate-y-0");

    setScrollY(12);
    expect(header.className).toContain("-translate-y-full");
    expect(header).toHaveAttribute("inert");

    setScrollY(0);
    expect(header.className).toContain("translate-y-0");
    expect(header).not.toHaveAttribute("inert");
  });
});
