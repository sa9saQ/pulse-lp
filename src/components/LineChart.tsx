"use client";

import { motion } from "framer-motion";

interface LineChartProps {
  width?: number;
  height?: number;
  color?: string;
  delay?: number;
}

export default function LineChart({
  width = 320,
  height = 160,
  color = "var(--emerald)",
  delay = 0.3,
}: LineChartProps) {
  const points = [
    [0, 120],
    [40, 105],
    [80, 110],
    [120, 85],
    [160, 70],
    [200, 75],
    [240, 45],
    [280, 35],
    [320, 20],
  ];

  const pathD = points
    .map((p, i) => {
      if (i === 0) return `M ${p[0]} ${p[1]}`;
      const prev = points[i - 1];
      const cx1 = prev[0] + (p[0] - prev[0]) * 0.5;
      const cy1 = prev[1];
      const cx2 = prev[0] + (p[0] - prev[0]) * 0.5;
      const cy2 = p[1];
      return `C ${cx1} ${cy1}, ${cx2} ${cy2}, ${p[0]} ${p[1]}`;
    })
    .join(" ");

  const fillD = `${pathD} L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      role="img"
      aria-label="上昇トレンドを示す折れ線グラフ"
    >
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      {[40, 80, 120].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2={width}
          y2={y}
          stroke="var(--border-subtle)"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
      ))}

      <motion.path
        d={fillD}
        fill="url(#chartFill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: delay + 0.5,
          ease: [0, 0, 0.2, 1],
        }}
      />

      <motion.path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, delay, ease: [0.4, 0, 0.2, 1] }}
      />

      <motion.circle
        cx={320}
        cy={20}
        r="4"
        fill={color}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: delay + 1.4,
          ease: [0.2, 0.8, 0.2, 1],
        }}
      />
      <motion.circle
        cx={320}
        cy={20}
        r="8"
        fill={color}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{
          duration: 0.4,
          delay: delay + 1.4,
          ease: [0.2, 0.8, 0.2, 1],
        }}
      />
    </svg>
  );
}
