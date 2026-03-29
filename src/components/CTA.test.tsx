import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CTA from "./CTA";

describe("CTA", () => {
  it("renders the CTA copy", () => {
    render(<CTA />);
    expect(
      screen.getByText("30秒で始める。カード不要。")
    ).toBeInTheDocument();
  });

  it("renders the CTA button", () => {
    render(<CTA />);
    expect(screen.getByText("無料で始める")).toBeInTheDocument();
  });

  it("has cta section id", () => {
    render(<CTA />);
    const section = document.getElementById("cta");
    expect(section).not.toBeNull();
  });
});
