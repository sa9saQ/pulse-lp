"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: "32px",
        paddingBottom: "32px",
      }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 sm:flex-row md:px-8">
        {/* Logo */}
        <div
          className="flex items-center gap-2 text-sm font-bold tracking-tight"
          style={{
            fontFamily: "var(--font-heading), system-ui, sans-serif",
            color: "var(--text-primary)",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 28 28"
            fill="none"
            aria-hidden="true"
          >
            <rect width="28" height="28" rx="6" fill="var(--emerald)" />
            <path
              d="M7 14h3l2-6 3 12 2-8 2 4h2"
              stroke="var(--bg-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Pulse
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          {["利用規約", "プライバシー", "お問い合わせ"].map((label) => (
            <a
              key={label}
              href="#"
              className="text-xs font-medium transition-colors"
              style={{
                color: "var(--text-muted)",
                transitionTimingFunction: "var(--ease-standard)",
                transitionDuration: "150ms",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              {label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          &copy; 2026 Pulse Inc.
        </p>
      </div>
    </footer>
  );
}
