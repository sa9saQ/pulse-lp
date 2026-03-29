import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Pain from "./Pain";

describe("Pain", () => {
  it("renders the pain headline", () => {
    render(<Pain />);
    expect(
      screen.getByText("先月のレポート、何時間かかった？")
    ).toBeInTheDocument();
  });

  it("renders the pain description", () => {
    render(<Pain />);
    expect(
      screen.getByText(/スプレッドシート。コピペ。スクショ貼り付け。/)
    ).toBeInTheDocument();
  });
});
