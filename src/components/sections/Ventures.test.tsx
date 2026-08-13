import { fireEvent, render, screen } from "@testing-library/react";
import { ConnectProvider } from "@/components/providers/ConnectProvider";
import { Ventures } from "@/components/sections/Ventures";

function renderVentures() {
  return render(
    <ConnectProvider>
      <Ventures />
    </ConnectProvider>,
  );
}

describe("Ventures", () => {
  it("opens an iframe preview only after clicking an embed venture card", () => {
    renderVentures();

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
      screen.getByText(/mailing list · plant force britain/i),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /^close$/i }));
    expect(screen.queryByTitle(/website$/i)).not.toBeInTheDocument();
  });

  it("shows under-construction notice and opens mailing list capture", () => {
    renderVentures();

    expect(
      screen.getAllByText(
        /foundations under construction\. click to join-in\./i,
      ).length,
    ).toBeGreaterThanOrEqual(6);

    fireEvent.click(
      screen.getByRole("button", {
        name: /join mailing list for swift-tech industries/i,
      }),
    );

    expect(
      screen.getByRole("heading", { name: /join the list/i }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/^email$/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /^join mailing list$/i }),
    ).toBeInTheDocument();
  });
});
