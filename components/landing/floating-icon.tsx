"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface FloatingIconProps {
  icon: LucideIcon;
  size: number;
  style: React.CSSProperties;
  delay: number;
  duration: number;
}

export function FloatingIcon({
  icon: Icon,
  size,
  style,
  delay,
  duration,
}: FloatingIconProps) {
  return (
    <motion.div
      className="absolute pointer-events-none text-sage/8 dark:text-sage/5"
      style={style}
      animate={{
        y: [0, -18, 0],
        rotate: [0, 3, -3, 0],
        opacity: [0.5, 0.9, 0.5],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <Icon size={size} strokeWidth={1} />
    </motion.div>
  );
}
