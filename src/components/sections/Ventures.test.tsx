import { fireEvent, render, screen } from "@testing-library/react";
import { Ventures } from "@/components/sections/Ventures";

describe("Ventures", () => {
  it("opens an iframe preview only after clicking an embed venture card", () => {
    render(<Ventures />);

    expect(screen.queryByTitle(/website$/i)).not.toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", {
        name: /open plant force britain website preview/i,
      }),
    );

    expect(screen.getByTitle("Plant Force Britain website")).toHaveAttribute(
      "src",
      "https://www.plantforcebritain.co.uk",
    );
    expect(
      screen.getByRole("link", { name: /visit plantforcebritain\.co\.uk/i }),
    ).toHaveAttribute("href", "https://www.plantforcebritain.co.uk");

    fireEvent.click(screen.getByRole("button", { name: /^close$/i }));
    expect(screen.queryByTitle(/website$/i)).not.toBeInTheDocument();
  });

  it("opens Elektra-Axelrod preview from its card", () => {
    render(<Ventures />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /open elektra-axelrod\.com website preview/i,
      }),
    );

    expect(screen.getByTitle("Elektra-Axelrod.com website")).toHaveAttribute(
      "src",
      "https://elektra-axelrod.com",
    );
  });
});
