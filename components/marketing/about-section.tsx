"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} className="relative bg-[#F5F0E8] px-6 py-32 md:px-16">
      <motion.div
        className="mb-16 flex items-center gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="h-px w-12 bg-sage" />
        <span className="text-xs font-medium uppercase tracking-[0.4em] text-sage">
          The platform
        </span>
      </motion.div>

      <div className="max-w-4xl">
        {[
          "A full logistics platform",
          "connecting wholesale",
          "meat distributors to",
          "restaurants, lounges,",
          "and families.",
        ].map((line, i) => (
          <div key={i} className="overflow-hidden">
            <motion.p
              className="font-serif text-[clamp(2rem,5vw,5rem)] font-bold
                         leading-tight tracking-tight text-[#1F1812]"
              initial={{ y: "110%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {line}
            </motion.p>
          </div>
        ))}
      </div>

      <motion.div
        className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-3"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        {[
          { value: "< 2min", label: "From order placement to vendor notification" },
          { value: "98%", label: "Order accuracy target from day one" },
          { value: "99.9%", label: "Uptime during business hours (6AM–11PM EST)" },
        ].map((stat) => (
          <div key={stat.label} className="border-t border-[#D9CFC0] pt-6">
            <div className="mb-2 font-serif text-4xl font-bold text-sage">
              {stat.value}
            </div>
            <div className="text-sm leading-relaxed text-[#6B6058]">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
