import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/Hero";
import { ConnectProvider } from "@/components/providers/ConnectProvider";

describe("Hero", () => {
  it("presents the Science / Technology / What comes next brand headline", () => {
    render(
      <ConnectProvider>
        <Hero />
      </ConnectProvider>,
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /science\.\s*technology\.\s*what comes next\./i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /get in touch/i }),
    ).toBeInTheDocument();
    const earth = document.querySelector(".animate-earth-drift img");
    expect(earth).toBeInTheDocument();
    expect(earth).toHaveAttribute("fetchpriority", "high");
    expect(earth).toHaveAttribute("decoding", "sync");
    expect(earth).toHaveAttribute("loading", "eager");
  });
});
