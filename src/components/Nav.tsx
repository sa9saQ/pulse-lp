"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "機能", href: "#features" },
  { label: "デモ", href: "#demo" },
  { label: "連携", href: "#integrations" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all"
      style={{
        transitionTimingFunction: "var(--ease-standard)",
        transitionDuration: "250ms",
        background: scrolled
          ? "rgba(6, 8, 15, 0.85)"
          : "rgba(6, 8, 15, 0.4)",
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border-subtle)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-[1200px] flex items-center justify-between px-6 py-4 md:px-8">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-bold tracking-tight"
          style={{
            fontFamily: "var(--font-heading), system-ui, sans-serif",
            color: "var(--text-primary)",
          }}
          aria-label="Pulse ホームに戻る"
        >
          <svg
            width="28"
            height="28"
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
          <span>Pulse</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors"
              style={{
                color: "var(--text-secondary)",
                transitionTimingFunction: "var(--ease-standard)",
                transitionDuration: "150ms",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold transition-colors"
            style={{
              borderRadius: "8px",
              backgroundColor: "var(--emerald)",
              color: "var(--bg-primary)",
              transitionTimingFunction: "var(--ease-spring)",
              transitionDuration: "200ms",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--emerald-dim)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--emerald)")
            }
          >
            無料で始める
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          style={{ borderRadius: "8px" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={mobileOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className="block h-0.5 w-5 transition-transform"
              style={{
                backgroundColor: "var(--text-primary)",
                transitionTimingFunction: "var(--ease-spring)",
                transitionDuration: "200ms",
                transform: mobileOpen
                  ? "translateY(4px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              className="block h-0.5 w-5 transition-opacity"
              style={{
                backgroundColor: "var(--text-primary)",
                transitionTimingFunction: "var(--ease-standard)",
                transitionDuration: "100ms",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-0.5 w-5 transition-transform"
              style={{
                backgroundColor: "var(--text-primary)",
                transitionTimingFunction: "var(--ease-spring)",
                transitionDuration: "200ms",
                transform: mobileOpen
                  ? "translateY(-4px) rotate(-45deg)"
                  : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute inset-x-0 top-full md:hidden"
            style={{
              borderBottom: "1px solid var(--border-subtle)",
              background: "rgba(6, 8, 15, 0.95)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium transition-colors"
                  style={{
                    color: "var(--text-secondary)",
                    transitionTimingFunction: "var(--ease-standard)",
                    transitionDuration: "150ms",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                className="mt-2 inline-flex items-center justify-center px-5 py-3 text-sm font-semibold"
                style={{
                  borderRadius: "8px",
                  backgroundColor: "var(--emerald)",
                  color: "var(--bg-primary)",
                }}
                onClick={() => setMobileOpen(false)}
              >
                無料で始める
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
