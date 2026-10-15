import { render, screen } from "@testing-library/react";
import { Work } from "@/components/sections/Work";

describe("Work", () => {
  it("renders the three work pillars with current ventures", () => {
    render(<Work />);

    expect(screen.getByText("Regenerative")).toBeInTheDocument();
    expect(screen.getByText("Intelligence")).toBeInTheDocument();
    expect(screen.getByText("Enterprise 2.0")).toBeInTheDocument();
    expect(screen.getByText("MacroAgri")).toBeInTheDocument();
    expect(screen.getByText("Plant Force Britain")).toBeInTheDocument();
    expect(screen.getByText("Elektra")).toBeInTheDocument();
    expect(screen.getByText("Superintelligence")).toBeInTheDocument();
    expect(screen.queryByText("mindout.ai")).not.toBeInTheDocument();
    expect(screen.queryByText("TheCandidate.io")).not.toBeInTheDocument();
    expect(screen.queryByText("GLYDx")).not.toBeInTheDocument();
    expect(screen.queryByText("Elektra.Inc")).not.toBeInTheDocument();
    expect(screen.queryByText("Axelrod.Inc")).not.toBeInTheDocument();
  });
});
