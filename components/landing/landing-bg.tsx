"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Beef, Drumstick, Flame, Wheat } from "lucide-react";
import { FloatingIcon } from "./floating-icon";

const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E";

const FLOATING_ICONS: Array<{
  top: string;
  left?: string;
  right?: string;
  size: number;
  icon: typeof Beef;
  delay: number;
  duration: number;
}> = [
  { top: "8%", left: "6%", size: 120, icon: Beef, delay: 0, duration: 10 },
  { top: "15%", right: "8%", size: 96, icon: Drumstick, delay: 1.5, duration: 12 },
  { top: "55%", left: "3%", size: 80, icon: Flame, delay: 0.8, duration: 9 },
  { top: "65%", right: "5%", size: 110, icon: Wheat, delay: 2.5, duration: 14 },
  { top: "75%", left: "25%", size: 88, icon: Drumstick, delay: 3.2, duration: 11 },
];

export function LandingBg() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const blobSageOpacity = isDark ? 0.18 : 0.12;
  const blobAmberOpacity = isDark ? 0.14 : 0.1;
  const centerIconOpacity = isDark ? 0.02 : 0.03;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Layer 1 — Grain */}
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `url("${GRAIN_SVG}")`,
          opacity: 0.035,
          mixBlendMode: "multiply" as const,
        }}
      />

      {/* Layer 2 — Floating icons (5 standard + 1 subtle center) */}
      {FLOATING_ICONS.map((item, i) => (
        <FloatingIcon
          key={i}
          icon={item.icon}
          size={item.size}
          delay={item.delay}
          duration={item.duration}
          style={{
            top: item.top,
            ...(item.left != null && { left: item.left }),
            ...(item.right != null && { right: item.right }),
          }}
        />
      ))}
      {/* Large center icon — very subtle, no rotation */}
      <motion.div
        className="absolute pointer-events-none text-sage"
        style={{
          top: "35%",
          left: "45%",
          width: 140,
          height: 140,
          opacity: centerIconOpacity,
        }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Beef size={140} strokeWidth={1} />
      </motion.div>

      {/* Layer 3 — Gradient blobs */}
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 600,
          height: 600,
          top: "-15%",
          left: "-10%",
          background: `radial-gradient(circle, hsl(125 20% 62% / ${blobSageOpacity}), transparent 70%)`,
        }}
        animate={{ scale: [1, 1.08, 1], x: [0, 20, 0], y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 500,
          height: 500,
          bottom: "-10%",
          right: "-8%",
          background: `radial-gradient(circle, hsl(35 60% 65% / ${blobAmberOpacity}), transparent 70%)`,
        }}
        animate={{ scale: [1, 1.12, 1], x: [0, -15, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </div>
  );
}
