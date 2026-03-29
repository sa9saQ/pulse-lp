"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

function useCountUp(
  end: number,
  isInView: boolean,
  duration: number = 1800,
  decimals: number = 0
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * end).toFixed(decimals)));

      if (progress < 1) {
        animFrame = requestAnimationFrame(step);
      }
    };

    animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [isInView, end, duration, decimals]);

  return value;
}

interface MetricItemProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  label: string;
  isInView: boolean;
  duration?: number;
}

function MetricItem({
  value: endValue,
  decimals = 0,
  prefix = "",
  suffix,
  label,
  isInView,
  duration = 1800,
}: MetricItemProps) {
  const count = useCountUp(endValue, isInView, duration, decimals);

  return (
    <div className="flex flex-col items-center text-center">
      <span
        className="text-4xl font-bold tabular-nums sm:text-5xl md:text-6xl"
        style={{
          fontFamily: "var(--font-heading), system-ui, sans-serif",
          color: "var(--text-primary)",
        }}
      >
        {prefix}
        {decimals > 0
          ? count.toFixed(decimals)
          : count.toLocaleString()}
        <span style={{ color: "var(--emerald)" }}>{suffix}</span>
      </span>
      <span
        className="mt-2 text-sm font-medium sm:text-base"
        style={{ color: "var(--text-muted)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Metrics() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative"
      style={{ paddingTop: "64px", paddingBottom: "128px" }}
    >
      <div className="mx-auto max-w-[1000px] px-6 md:px-8">
        <div
          className="grid grid-cols-1 gap-12 py-12 sm:grid-cols-3 sm:gap-8"
          style={{
            borderTop: "1px solid var(--border-subtle)",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <MetricItem
            value={1200}
            suffix="+"
            label="導入企業"
            isInView={isInView}
            duration={2000}
          />
          <MetricItem
            value={0.3}
            decimals={1}
            suffix="秒"
            label="レスポンス"
            isInView={isInView}
            duration={1200}
          />
          <MetricItem
            value={12}
            suffix="時間/週"
            label="週あたり削減"
            isInView={isInView}
            duration={1600}
          />
        </div>
      </div>
    </section>
  );
}
