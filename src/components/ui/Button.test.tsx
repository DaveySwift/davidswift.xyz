import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/Button";

describe("Button", () => {
  it("renders uppercase label text", () => {
    render(<Button>Connect</Button>);
    expect(screen.getByRole("button", { name: "Connect" })).toBeInTheDocument();
  });

  it("renders as a link when href is provided", () => {
    render(
      <Button href="https://example.com" variant="solid">
        Explore Ventures
      </Button>,
    );
    const link = screen.getByRole("link", { name: "Explore Ventures" });
    expect(link).toHaveAttribute("href", "https://example.com");
  });
});
