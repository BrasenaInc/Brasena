"use client";

import { motion } from "framer-motion";

const items = [
  "BRONX LAUNCH",
  "★",
  "B2B WHOLESALE",
  "★",
  "REAL-TIME TRACKING",
  "★",
  "RESTAURANT & LOUNGES",
  "★",
  "BEEF · CHICKEN · PORK",
  "★",
  "VENDOR NETWORK",
  "★",
  "SAME-DAY DELIVERY",
  "★",
  "B2C & B2B PRICING",
  "★",
  "98% ORDER ACCURACY",
  "★",
  "EXPANDING TO NYC & BEYOND",
  "★",
];

export function MarqueeStrip() {
  return (
    <div className="relative overflow-hidden bg-sage py-5">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-6 text-xs font-bold uppercase tracking-[0.3em] text-white/90"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
