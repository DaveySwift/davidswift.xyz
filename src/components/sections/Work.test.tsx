import { render, screen } from "@testing-library/react";
import { Work } from "@/components/sections/Work";

describe("Work", () => {
  it("renders the three work pillars with current ventures", () => {
    render(<Work />);

    expect(screen.getByText("Infrastructure")).toBeInTheDocument();
    expect(screen.getByText("Intelligence")).toBeInTheDocument();
    expect(screen.getByText("Enterprise")).toBeInTheDocument();
    expect(screen.getByText("MacroAgri")).toBeInTheDocument();
    expect(screen.getByText("Plant Force Britain")).toBeInTheDocument();
    expect(screen.getByText("mindout.ai")).toBeInTheDocument();
    expect(screen.getByText("Elektra.Inc")).toBeInTheDocument();
  });
});
