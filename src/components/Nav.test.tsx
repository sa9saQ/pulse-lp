import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Nav from "./Nav";

describe("Nav", () => {
  it("renders the Pulse logo text", () => {
    render(<Nav />);
    expect(screen.getByText("Pulse")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Nav />);
    expect(screen.getByText("機能")).toBeInTheDocument();
    expect(screen.getByText("デモ")).toBeInTheDocument();
    expect(screen.getByText("連携")).toBeInTheDocument();
  });

  it("renders CTA button", () => {
    render(<Nav />);
    const ctaButtons = screen.getAllByText("無料で始める");
    expect(ctaButtons.length).toBeGreaterThanOrEqual(1);
  });

  it("has accessible home link", () => {
    render(<Nav />);
    expect(screen.getByLabelText("Pulse ホームに戻る")).toBeInTheDocument();
  });

  it("has accessible mobile menu button", () => {
    render(<Nav />);
    expect(screen.getByLabelText("メニューを開く")).toBeInTheDocument();
  });
});
