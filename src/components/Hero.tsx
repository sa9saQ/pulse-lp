"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import LineChart from "./LineChart";

function MetricCard({
  label,
  value,
  change,
  delay,
}: {
  label: string;
  value: string;
  change: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0, 0, 0.2, 1] }}
      className="flex flex-col gap-1 px-4 py-3"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "12px",
      }}
    >
      <span
        className="text-[11px] font-medium uppercase tracking-wider"
        style={{ color: "var(--text-muted)" }}
      >
        {label}
      </span>
      <span
        className="text-lg font-bold tabular-nums"
        style={{
          fontFamily: "var(--font-heading), system-ui, sans-serif",
          color: "var(--text-primary)",
        }}
      >
        {value}
      </span>
      <span
        className="text-xs font-medium"
        style={{ color: "var(--emerald)" }}
      >
        {change}
      </span>
    </motion.div>
  );
}

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{ paddingTop: "96px", paddingBottom: "96px" }}
    >
      {/* Grain overlay */}
      <div className="grain absolute inset-0" />

      {/* Mouse-following glow */}
      <div
        ref={glowRef}
        className="mouse-glow"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, var(--emerald-glow), transparent 60%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-6 pt-16 md:px-8 md:pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium"
          style={{
            borderRadius: "999px",
            border: "1px solid var(--border-medium)",
            color: "var(--emerald)",
            background: "rgba(16, 185, 129, 0.06)",
          }}
        >
          <span
            className="inline-block h-1.5 w-1.5"
            style={{
              borderRadius: "999px",
              backgroundColor: "var(--emerald)",
            }}
          />
          1,200社が導入済み
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] }}
          className="mb-5 text-center text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          style={{
            fontFamily: "var(--font-heading), system-ui, sans-serif",
            color: "var(--text-primary)",
          }}
        >
          2.4秒で、全部見える。
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0, 0, 0.2, 1] }}
          className="mb-10 max-w-xl text-center text-base leading-relaxed sm:text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          データ分析にかかる時間を87%削った。Pulseがやったのはそれだけ。
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: [0, 0, 0.2, 1] }}
          className="mb-16 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#cta"
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold transition-colors sm:text-base"
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
            無料で試す
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium transition-colors sm:text-base"
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
            デモを見る
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0, 0, 0.2, 1] }}
          className="relative w-full max-w-[900px]"
        >
          {/* Glow behind card */}
          <div
            className="absolute -inset-4 opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, var(--emerald-glow), transparent 70%)",
            }}
          />

          {/* Dashboard frame */}
          <div
            className="relative overflow-hidden"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "16px",
            }}
          >
            {/* Title bar */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ borderBottom: "1px solid var(--border-subtle)" }}
            >
              <span
                className="h-3 w-3"
                style={{
                  borderRadius: "999px",
                  backgroundColor: "#ef4444",
                  opacity: 0.6,
                }}
              />
              <span
                className="h-3 w-3"
                style={{
                  borderRadius: "999px",
                  backgroundColor: "#f59e0b",
                  opacity: 0.6,
                }}
              />
              <span
                className="h-3 w-3"
                style={{
                  borderRadius: "999px",
                  backgroundColor: "#10b981",
                  opacity: 0.6,
                }}
              />
              <span
                className="ml-3 text-xs font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                Pulse Dashboard
              </span>
            </div>

            {/* Dashboard content */}
            <div className="p-4 sm:p-6">
              {/* Metric cards row */}
              <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <MetricCard
                  label="MRR"
                  value="¥4.2M"
                  change="+12.3%"
                  delay={0.7}
                />
                <MetricCard
                  label="Users"
                  value="8,429"
                  change="+340"
                  delay={0.85}
                />
                <MetricCard
                  label="Churn"
                  value="1.2%"
                  change="-0.3pp"
                  delay={1.0}
                />
                <MetricCard
                  label="NPS"
                  value="72"
                  change="+5"
                  delay={1.15}
                />
              </div>

              {/* Chart area */}
              <div
                className="overflow-hidden p-4"
                style={{
                  background: "var(--bg-primary)",
                  borderRadius: "12px",
                  border: "1px solid var(--border-subtle)",
                  height: "200px",
                }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className="text-xs font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Revenue Trend
                  </span>
                  <span
                    className="text-xs font-medium"
                    style={{ color: "var(--emerald)" }}
                  >
                    +23.4%
                  </span>
                </div>
                <div style={{ height: "140px" }}>
                  <LineChart delay={0.8} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
