"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

/*
  B drawn as a single continuous stroke path.
  viewBox: "0 0 200 260"
  The path traces the B like a pen writing it:
  - Start top-left of stem, down the full left stem
  - Across the bottom base, up and around the bottom bowl
  - Back to midpoint, up and around the top bowl, back to top-left to close
*/

const B_PATH = `
  M 35 15
  L 35 245
  L 110 245
  C 162 245 188 218 188 185
  C 188 160 173 142 148 133
  C 168 123 180 104 180 78
  C 180 38 155 15 105 15
  Z
`;

export function Preloader({ onComplete }: PreloaderProps) {
  useEffect(() => {
    const t = setTimeout(onComplete, 3100);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080808]"
      initial={{ y: "0%" }}
      animate={{ y: "-100%" }}
      transition={{
        delay: 2.4,
        duration: 0.65,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <svg
        width="140"
        height="182"
        viewBox="0 0 200 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d={B_PATH}
          fill="white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.85,
            duration: 0.45,
            ease: "easeIn",
          }}
        />

        <motion.path
          d={B_PATH}
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          initial={{ pathLength: 0, opacity: 1 }}
          animate={{
            pathLength: 1,
            opacity: [1, 1, 0],
          }}
          transition={{
            pathLength: {
              duration: 2.0,
              ease: [0.4, 0, 0.6, 1],
            },
            opacity: {
              duration: 2.3,
              times: [0, 0.82, 1],
            },
          }}
        />
      </svg>
    </motion.div>
  );
}
