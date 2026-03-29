"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Pain() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative"
      style={{ paddingTop: "128px", paddingBottom: "64px" }}
    >
      <div className="mx-auto max-w-[800px] px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          className="mb-8 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
          style={{
            fontFamily: "var(--font-heading), system-ui, sans-serif",
            color: "var(--text-primary)",
          }}
        >
          先月のレポート、何時間かかった？
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15, ease: [0, 0, 0.2, 1] }}
          className="text-lg leading-relaxed sm:text-xl"
          style={{ color: "var(--text-secondary)" }}
        >
          スプレッドシート。コピペ。スクショ貼り付け。深夜2時のSlack。分析チームの月曜は、いつもそこから始まる。
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="mt-12 h-px origin-left"
          style={{
            background:
              "linear-gradient(to right, var(--emerald), transparent)",
          }}
        />
      </div>
    </section>
  );
}
