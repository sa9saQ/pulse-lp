"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "1画面に、全データ。",
    description:
      "Slack、GA4、Stripe、Notion -- バラバラだった数字が、1つのダッシュボードに集まる。タブ切替もコピペもいらない。",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="7"
          height="7"
          rx="1.5"
          stroke="var(--emerald)"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="3"
          width="7"
          height="7"
          rx="1.5"
          stroke="var(--emerald)"
          strokeWidth="1.5"
        />
        <rect
          x="3"
          y="14"
          width="7"
          height="7"
          rx="1.5"
          stroke="var(--emerald)"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="14"
          width="7"
          height="7"
          rx="1.5"
          stroke="var(--emerald)"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "聞けば、答える。",
    description:
      "「先月の解約率は？」「前年比で伸びたチャネルは？」自然言語で質問するだけ。SQLも関数もいらない。",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          stroke="var(--amber)"
          strokeWidth="1.5"
        />
        <path
          d="M9.5 9.5a2.5 2.5 0 015 0c0 1.5-2.5 2-2.5 3.5"
          stroke="var(--amber)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="16" r="0.75" fill="var(--amber)" />
      </svg>
    ),
  },
  {
    title: "異常を、先に知る。",
    description:
      "KPIが普段と違う動きをしたら、Slackに飛ぶ。気づいた頃には手遅れ、をなくす。",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9z"
          stroke="var(--emerald)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.73 21a2 2 0 01-3.46 0"
          stroke="var(--emerald)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

function FeatureRow({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`grid items-center gap-8 md:grid-cols-[1fr_1.2fr] md:gap-16 ${
        isReversed ? "md:[direction:rtl]" : ""
      }`}
      style={{
        paddingTop: index === 0 ? "0" : "48px",
        paddingBottom: index === features.length - 1 ? "0" : "48px",
      }}
    >
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.6,
          ease: [0, 0, 0.2, 1],
        }}
        style={{ direction: "ltr" }}
      >
        <div
          className="mb-4 inline-flex items-center justify-center"
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background:
              index === 1
                ? "rgba(245, 158, 11, 0.08)"
                : "rgba(16, 185, 129, 0.08)",
            border: `1px solid ${
              index === 1
                ? "rgba(245, 158, 11, 0.15)"
                : "rgba(16, 185, 129, 0.15)"
            }`,
          }}
        >
          {feature.icon}
        </div>
        <h3
          className="mb-3 text-xl font-bold tracking-tight sm:text-2xl"
          style={{
            fontFamily: "var(--font-heading), system-ui, sans-serif",
            color: "var(--text-primary)",
          }}
        >
          {feature.title}
        </h3>
        <p
          className="text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {feature.description}
        </p>
      </motion.div>

      {/* Visual */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0, 0, 0.2, 1],
        }}
        className="overflow-hidden"
        style={{
          direction: "ltr",
          background: "var(--bg-card)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "16px",
          padding: "24px",
          minHeight: "200px",
        }}
      >
        <FeatureVisual index={index} isInView={isInView} />
      </motion.div>
    </div>
  );
}

function FeatureVisual({
  index,
  isInView,
}: {
  index: number;
  isInView: boolean;
}) {
  if (index === 0) {
    // Data consolidation visual
    const sources = ["Slack", "GA4", "Stripe", "Notion"];
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-2">
          {sources.map((source, i) => (
            <motion.div
              key={source}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium"
              style={{
                borderRadius: "999px",
                background: "var(--bg-primary)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-secondary)",
              }}
            >
              <span
                className="h-2 w-2"
                style={{
                  borderRadius: "999px",
                  backgroundColor:
                    i % 2 === 0 ? "var(--emerald)" : "var(--amber)",
                }}
              />
              {source}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="h-8 w-px origin-top"
          style={{ backgroundColor: "var(--border-medium)" }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7, ease: [0, 0, 0.2, 1] }}
          className="flex items-center gap-3 px-5 py-3 text-sm font-semibold"
          style={{
            borderRadius: "12px",
            background: "rgba(16, 185, 129, 0.08)",
            border: "1px solid rgba(16, 185, 129, 0.2)",
            color: "var(--emerald)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M2 8h12M8 2v12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Pulse Dashboard
        </motion.div>
      </div>
    );
  }

  if (index === 1) {
    // Natural language query visual
    return (
      <div className="flex flex-col gap-3">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2, ease: [0, 0, 0.2, 1] }}
          className="flex items-center gap-2 px-4 py-3 text-sm"
          style={{
            borderRadius: "12px",
            background: "var(--bg-primary)",
            border: "1px solid var(--border-subtle)",
            color: "var(--text-secondary)",
          }}
        >
          <span style={{ color: "var(--amber)" }}>Q:</span>
          先月の解約率は？
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5, ease: [0, 0, 0.2, 1] }}
          className="flex items-start gap-2 px-4 py-3 text-sm"
          style={{
            borderRadius: "12px",
            background: "rgba(16, 185, 129, 0.05)",
            border: "1px solid rgba(16, 185, 129, 0.12)",
            color: "var(--text-primary)",
          }}
        >
          <span style={{ color: "var(--emerald)" }}>A:</span>
          <div>
            <span className="font-semibold">1.2%</span>
            <span
              className="ml-2 text-xs"
              style={{ color: "var(--emerald)" }}
            >
              -0.3pp vs 前月
            </span>
            <p
              className="mt-1 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              プランBの解約率が最も低い (0.8%)
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  // Anomaly detection visual
  return (
    <div className="flex flex-col gap-3">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.2, ease: [0, 0, 0.2, 1] }}
        className="flex items-start gap-3 px-4 py-3"
        style={{
          borderRadius: "12px",
          background: "rgba(239, 68, 68, 0.06)",
          border: "1px solid rgba(239, 68, 68, 0.15)",
        }}
      >
        <span className="mt-0.5 text-sm">&#9888;</span>
        <div>
          <p
            className="text-sm font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            異常検出: DAU -23%
          </p>
          <p
            className="mt-0.5 text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            2分前 -- 過去30日平均を下回りました
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.5, ease: [0, 0, 0.2, 1] }}
        className="flex items-center gap-3 px-4 py-3"
        style={{
          borderRadius: "12px",
          background: "var(--bg-primary)",
          border: "1px solid var(--border-subtle)",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <rect
            width="18"
            height="18"
            rx="4"
            fill="var(--bg-card-hover)"
          />
          <path
            d="M5 9l3-4v3h2V5l3 4h-2v3H7V9H5z"
            fill="var(--text-muted)"
          />
        </svg>
        <span
          className="text-xs font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          #analytics に通知済み
        </span>
        <span
          className="text-[10px]"
          style={{ color: "var(--text-muted)" }}
        >
          14:32
        </span>
      </motion.div>
    </div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="relative"
      style={{ paddingTop: "48px", paddingBottom: "96px" }}
    >
      <div className="mx-auto max-w-[1000px] px-6 md:px-8">
        <div className="flex flex-col gap-16 md:gap-24">
          {features.map((feature, i) => (
            <FeatureRow key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
