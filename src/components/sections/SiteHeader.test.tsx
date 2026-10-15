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
    expect(header).toHaveAttribute("data-hidden", "false");
    expect(header.className).not.toContain("bg-background/");

    setScrollY(12);
    expect(header).toHaveAttribute("data-hidden", "true");
    expect(header).toHaveAttribute("inert");
    expect(header.className).not.toContain("bg-background/");

    setScrollY(0);
    expect(header).toHaveAttribute("data-hidden", "false");
    expect(header).not.toHaveAttribute("inert");
  });
});
