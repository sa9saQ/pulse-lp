import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LineChart from "./LineChart";

describe("LineChart", () => {
  it("renders an SVG with accessible label", () => {
    render(<LineChart />);
    expect(
      screen.getByLabelText("上昇トレンドを示す折れ線グラフ")
    ).toBeInTheDocument();
  });

  it("renders with custom dimensions", () => {
    render(<LineChart width={400} height={200} />);
    const svg = screen.getByLabelText("上昇トレンドを示す折れ線グラフ");
    expect(svg).toHaveAttribute("viewBox", "0 0 400 200");
  });
});
