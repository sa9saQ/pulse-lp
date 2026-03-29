import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
  it("renders the headline", () => {
    render(<Hero />);
    expect(screen.getByText("2.4秒で、全部見える。")).toBeInTheDocument();
  });

  it("renders the sub headline", () => {
    render(<Hero />);
    expect(
      screen.getByText(
        "データ分析にかかる時間を87%削った。Pulseがやったのはそれだけ。"
      )
    ).toBeInTheDocument();
  });

  it("renders the CTA button", () => {
    render(<Hero />);
    expect(screen.getByText("無料で試す")).toBeInTheDocument();
  });
});
