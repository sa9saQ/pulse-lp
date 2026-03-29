import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Integrations from "./Integrations";

const integrationNames = [
  "Slack",
  "Google Analytics",
  "Stripe",
  "Notion",
  "Salesforce",
  "HubSpot",
  "GitHub",
  "Shopify",
];

describe("Integrations", () => {
  it("renders all integration names", () => {
    render(<Integrations />);
    for (const name of integrationNames) {
      expect(screen.getByText(name)).toBeInTheDocument();
    }
  });

  it("has integrations section id", () => {
    render(<Integrations />);
    const section = document.getElementById("integrations");
    expect(section).not.toBeNull();
  });
});
