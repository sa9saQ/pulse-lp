import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the Pulse brand", () => {
    render(<Footer />);
    expect(screen.getByText("Pulse")).toBeInTheDocument();
  });

  it("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/2026 Pulse Inc/)).toBeInTheDocument();
  });

  it("renders footer links", () => {
    render(<Footer />);
    expect(screen.getByText("利用規約")).toBeInTheDocument();
    expect(screen.getByText("プライバシー")).toBeInTheDocument();
    expect(screen.getByText("お問い合わせ")).toBeInTheDocument();
  });
});
