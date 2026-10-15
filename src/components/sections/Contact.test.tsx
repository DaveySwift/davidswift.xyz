import { render, screen } from "@testing-library/react";
import { Contact } from "@/components/sections/Contact";
import { ConnectProvider } from "@/components/providers/ConnectProvider";

describe("Contact", () => {
  it("lists the other ventures roster", () => {
    render(
      <ConnectProvider>
        <Contact />
      </ConnectProvider>,
    );

    expect(screen.getByText("Plant Force Britain")).toBeInTheDocument();
    expect(screen.getByText("MacroAgri")).toBeInTheDocument();
    expect(screen.getByText("Superintelligence")).toBeInTheDocument();
    expect(screen.getByText("Elektra")).toBeInTheDocument();
    expect(screen.getByText("Conversations")).toBeInTheDocument();
    expect(screen.getByText("Counsel")).toBeInTheDocument();
    expect(screen.getByText("Ventures")).toBeInTheDocument();
    expect(
      screen.getByText("Keynotes and panels on building for the long horizon."),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Whole-systems thinking across technology, land and infrastructure.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Partnerships, from early ideas to patient capital."),
    ).toBeInTheDocument();
    expect(screen.queryByText("mindout.ai")).not.toBeInTheDocument();
    expect(screen.queryByText("TheCandidate.io")).not.toBeInTheDocument();
    expect(screen.queryByText("GLYDx")).not.toBeInTheDocument();
    expect(screen.queryByText("Elektra.Inc")).not.toBeInTheDocument();
    expect(screen.queryByText("Axelrod.Inc")).not.toBeInTheDocument();
  });
});
