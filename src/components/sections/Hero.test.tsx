import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/Hero";
import { ConnectProvider } from "@/components/providers/ConnectProvider";

describe("Hero", () => {
  it("presents David Swift as the hero brand", () => {
    render(
      <ConnectProvider>
        <Hero />
      </ConnectProvider>,
    );
    expect(
      screen.getByRole("heading", { level: 1, name: "David Swift" }),
    ).toBeInTheDocument();
  });
});
