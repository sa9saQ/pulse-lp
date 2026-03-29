import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Demo from "./Demo";

describe("Demo", () => {
  it("renders the demo section heading", () => {
    render(<Demo />);
    expect(screen.getByText("触って、確かめる。")).toBeInTheDocument();
  });

  it("renders tab buttons", () => {
    render(<Demo />);
    expect(screen.getByRole("tab", { name: "Revenue" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Users" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Performance" })).toBeInTheDocument();
  });

  it("has accessible tablist", () => {
    render(<Demo />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
  });
});
