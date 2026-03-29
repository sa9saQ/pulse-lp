"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import BarChart from "./BarChart";

type TabKey = "revenue" | "users" | "performance";

interface TabData {
  label: string;
  mainValue: string;
  mainLabel: string;
  change: string;
  chartData: { label: string; value: number; color?: string }[];
  rows: { label: string; value: string; status: string }[];
}

const tabData: Record<TabKey, TabData> = {
  revenue: {
    label: "Revenue",
    mainValue: "¥12.8M",
    mainLabel: "今月の売上",
    change: "+18.2% vs 先月",
    chartData: [
      { label: "4月", value: 680 },
      { label: "5月", value: 720 },
      { label: "6月", value: 850 },
      { label: "7月", value: 790 },
      { label: "8月", value: 920 },
      { label: "9月", value: 1080 },
      { label: "10月", value: 1280 },
    ],
    rows: [
      { label: "Stripe", value: "¥8.4M", status: "+22%" },
      { label: "Shopify", value: "¥3.1M", status: "+9%" },
      { label: "Invoice", value: "¥1.3M", status: "+4%" },
    ],
  },
  users: {
    label: "Users",
    mainValue: "8,429",
    mainLabel: "アクティブユーザー",
    change: "+340 今週",
    chartData: [
      { label: "月", value: 420, color: "var(--amber)" },
      { label: "火", value: 580, color: "var(--amber)" },
      { label: "水", value: 510, color: "var(--amber)" },
      { label: "木", value: 690, color: "var(--amber)" },
      { label: "金", value: 620, color: "var(--amber)" },
      { label: "土", value: 340, color: "var(--amber)" },
      { label: "日", value: 280, color: "var(--amber)" },
    ],
    rows: [
      { label: "新規登録", value: "142", status: "+18%" },
      { label: "復帰ユーザー", value: "89", status: "+31%" },
      { label: "解約", value: "23", status: "-12%" },
    ],
  },
  performance: {
    label: "Performance",
    mainValue: "99.97%",
    mainLabel: "アップタイム",
    change: "過去30日間",
    chartData: [
      { label: "API", value: 45, color: "var(--emerald)" },
      { label: "Query", value: 120, color: "var(--emerald)" },
      { label: "Render", value: 82, color: "var(--emerald)" },
      { label: "WS", value: 28, color: "var(--emerald)" },
      { label: "Cache", value: 8, color: "var(--emerald)" },
    ],
    rows: [
      { label: "平均レスポンス", value: "47ms", status: "正常" },
      { label: "p95レイテンシ", value: "142ms", status: "正常" },
      { label: "エラー率", value: "0.02%", status: "正常" },
    ],
  },
};

const tabs: { key: TabKey; label: string }[] = [
  { key: "revenue", label: "Revenue" },
  { key: "users", label: "Users" },
  { key: "performance", label: "Performance" },
];

export default function Demo() {
  const [activeTab, setActiveTab] = useState<TabKey>("revenue");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const current = tabData[activeTab];

  return (
    <section
      id="demo"
      ref={ref}
      className="relative"
      style={{ paddingTop: "48px", paddingBottom: "96px" }}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
          className="mb-10 text-center"
        >
          <h2
            className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl"
            style={{
              fontFamily: "var(--font-heading), system-ui, sans-serif",
              color: "var(--text-primary)",
            }}
          >
            触って、確かめる。
          </h2>
          <p style={{ color: "var(--text-muted)" }} className="text-base">
            タブを切り替えて、実際の操作感を試してみてください。
          </p>
        </motion.div>

        {/* Dashboard frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0, 0, 0.2, 1] }}
          className="overflow-hidden"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "16px",
          }}
        >
          {/* Tab bar */}
          <div
            className="flex items-center gap-1 px-4 pt-4 sm:px-6"
            role="tablist"
            aria-label="ダッシュボードビュー切り替え"
          >
            {tabs.map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={activeTab === tab.key}
                aria-controls={`panel-${tab.key}`}
                onClick={() => setActiveTab(tab.key)}
                className="relative px-4 py-2 text-sm font-medium transition-colors"
                style={{
                  color:
                    activeTab === tab.key
                      ? "var(--text-primary)"
                      : "var(--text-muted)",
                  borderRadius: "8px",
                  transitionTimingFunction: "var(--ease-spring)",
                  transitionDuration: "200ms",
                }}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0"
                    style={{
                      background: "rgba(16, 185, 129, 0.08)",
                      borderRadius: "8px",
                      border: "1px solid rgba(16, 185, 129, 0.2)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={`panel-${activeTab}`}
              role="tabpanel"
              aria-label={current.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
              className="p-4 sm:p-6"
            >
              <div className="grid gap-6 md:grid-cols-[1fr_280px]">
                {/* Left: Chart */}
                <div>
                  {/* Main metric */}
                  <div className="mb-6">
                    <p
                      className="text-xs font-medium uppercase tracking-wider"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {current.mainLabel}
                    </p>
                    <p
                      className="mt-1 text-3xl font-bold tabular-nums sm:text-4xl"
                      style={{
                        fontFamily:
                          "var(--font-heading), system-ui, sans-serif",
                        color: "var(--text-primary)",
                      }}
                    >
                      {current.mainValue}
                    </p>
                    <p
                      className="mt-1 text-sm font-medium"
                      style={{ color: "var(--emerald)" }}
                    >
                      {current.change}
                    </p>
                  </div>

                  {/* Bar chart */}
                  <div
                    className="p-4"
                    style={{
                      background: "var(--bg-primary)",
                      borderRadius: "12px",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <BarChart data={current.chartData} height={180} />
                  </div>
                </div>

                {/* Right: data rows */}
                <div
                  className="flex flex-col gap-3 p-4"
                  style={{
                    background: "var(--bg-primary)",
                    borderRadius: "12px",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <p
                    className="text-xs font-medium uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    内訳
                  </p>
                  {current.rows.map((row, i) => (
                    <motion.div
                      key={row.label}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: i * 0.08,
                        ease: [0, 0, 0.2, 1],
                      }}
                      className="flex items-center justify-between py-2.5"
                      style={{
                        borderBottom:
                          i < current.rows.length - 1
                            ? "1px solid var(--border-subtle)"
                            : "none",
                      }}
                    >
                      <span
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {row.label}
                      </span>
                      <div className="flex items-center gap-3">
                        <span
                          className="text-sm font-semibold tabular-nums"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {row.value}
                        </span>
                        <span
                          className="text-xs font-medium"
                          style={{
                            color: row.status.startsWith("-")
                              ? "#ef4444"
                              : row.status === "正常"
                                ? "var(--emerald)"
                                : "var(--emerald)",
                          }}
                        >
                          {row.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
