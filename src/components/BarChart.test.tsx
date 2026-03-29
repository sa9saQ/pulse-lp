import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BarChart from "./BarChart";

const mockData = [
  { label: "1月", value: 120 },
  { label: "2月", value: 180 },
  { label: "3月", value: 240 },
];

describe("BarChart", () => {
  it("renders all bar labels", () => {
    render(<BarChart data={mockData} />);
    expect(screen.getByText("1月")).toBeInTheDocument();
    expect(screen.getByText("2月")).toBeInTheDocument();
    expect(screen.getByText("3月")).toBeInTheDocument();
  });

  it("renders all bar values", () => {
    render(<BarChart data={mockData} />);
    expect(screen.getByText("120")).toBeInTheDocument();
    expect(screen.getByText("180")).toBeInTheDocument();
    expect(screen.getByText("240")).toBeInTheDocument();
  });

  it("has accessible label", () => {
    render(<BarChart data={mockData} />);
    expect(
      screen.getByLabelText("棒グラフ: 1月 120, 2月 180, 3月 240")
    ).toBeInTheDocument();
  });
});
