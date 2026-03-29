import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Features from "./Features";

describe("Features", () => {
  it("renders all three feature titles", () => {
    render(<Features />);
    expect(screen.getByText("1画面に、全データ。")).toBeInTheDocument();
    expect(screen.getByText("聞けば、答える。")).toBeInTheDocument();
    expect(screen.getByText("異常を、先に知る。")).toBeInTheDocument();
  });

  it("renders feature descriptions", () => {
    render(<Features />);
    expect(
      screen.getByText(/Slack、GA4、Stripe、Notion/)
    ).toBeInTheDocument();
    expect(screen.getByText(/自然言語で質問するだけ/)).toBeInTheDocument();
    expect(screen.getByText(/KPIが普段と違う動き/)).toBeInTheDocument();
  });

  it("has features section id", () => {
    render(<Features />);
    const section = document.getElementById("features");
    expect(section).not.toBeNull();
  });
});
