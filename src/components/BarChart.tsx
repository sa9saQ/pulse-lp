"use client";

import { motion } from "framer-motion";

interface BarChartProps {
  data: { label: string; value: number; color?: string }[];
  height?: number;
  animate?: boolean;
}

export default function BarChart({
  data,
  height = 180,
  animate = true,
}: BarChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div
      className="flex items-end gap-3"
      style={{ height }}
      role="img"
      aria-label={`棒グラフ: ${data.map((d) => `${d.label} ${d.value}`).join(", ")}`}
    >
      {data.map((item, i) => {
        const barHeight = (item.value / maxValue) * (height - 28);
        const barColor = item.color || "var(--emerald)";

        return (
          <div
            key={item.label}
            className="flex flex-1 flex-col items-center gap-1.5"
          >
            <motion.span
              className="text-xs font-medium tabular-nums"
              style={{ color: "var(--text-secondary)" }}
              initial={animate ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: i * 0.08 + 0.6,
                ease: [0, 0, 0.2, 1],
              }}
            >
              {item.value.toLocaleString()}
            </motion.span>
            <motion.div
              className="w-full"
              style={{
                backgroundColor: barColor,
                borderRadius: "6px 6px 2px 2px",
                opacity: 0.85,
              }}
              initial={animate ? { height: 0 } : { height: barHeight }}
              animate={{ height: barHeight }}
              transition={{
                duration: 0.7,
                delay: i * 0.08 + 0.15,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            />
            <span
              className="mt-1 text-[11px] font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
