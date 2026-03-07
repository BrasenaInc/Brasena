"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Locale } from "./marketing-page";

interface MarketingNavProps {
  waitlistEnabled: boolean;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export function MarketingNav({
  locale,
  setLocale,
}: MarketingNavProps) {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center
                 justify-between px-4 py-4 md:px-8 md:py-6 mix-blend-difference gap-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <Link href="/marketing" className="flex items-center gap-2">
        <span className="font-serif text-lg font-bold tracking-[0.2em] text-white">
          BRASENA
        </span>
      </Link>
      <div className="flex min-w-0 shrink-0 items-center gap-3 md:gap-6">
        <div className="flex rounded-full border border-white/20 bg-white/5 p-0.5">
          <button
            type="button"
            onClick={() => setLocale("en")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
              locale === "en"
                ? "bg-white text-[#0C0F0C]"
                : "text-white/70 hover:text-white"
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLocale("es")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
              locale === "es"
                ? "bg-white text-[#0C0F0C]"
                : "text-white/70 hover:text-white"
            }`}
          >
            ES
          </button>
        </div>
      </div>
    </motion.header>
  );
}
