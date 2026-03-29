"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      id="cta"
      ref={ref}
      className="relative"
      style={{ paddingTop: "64px", paddingBottom: "128px" }}
    >
      <div className="mx-auto max-w-[600px] px-6 text-center md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
          className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
          style={{
            fontFamily: "var(--font-heading), system-ui, sans-serif",
            color: "var(--text-primary)",
          }}
        >
          30秒で始める。カード不要。
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15, ease: [0, 0, 0.2, 1] }}
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all"
            style={{
              borderRadius: "8px",
              backgroundColor: "var(--emerald)",
              color: "var(--bg-primary)",
              transitionTimingFunction: "var(--ease-spring)",
              transitionDuration: "200ms",
              boxShadow: "0 0 40px rgba(16, 185, 129, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--emerald-dim)";
              e.currentTarget.style.boxShadow =
                "0 0 60px rgba(16, 185, 129, 0.3)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--emerald)";
              e.currentTarget.style.boxShadow =
                "0 0 40px rgba(16, 185, 129, 0.2)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            無料で始める
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3, ease: [0, 0, 0.2, 1] }}
          className="mt-4 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          14日間無料。いつでもキャンセル可能。
        </motion.p>
      </div>
    </section>
  );
}
