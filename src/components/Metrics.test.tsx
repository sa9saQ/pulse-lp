import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Metrics from "./Metrics";

describe("Metrics", () => {
  it("renders the three metric labels", () => {
    render(<Metrics />);
    expect(screen.getByText("導入企業")).toBeInTheDocument();
    expect(screen.getByText("レスポンス")).toBeInTheDocument();
    expect(screen.getByText(/週あたり削減/)).toBeInTheDocument();
  });
});
