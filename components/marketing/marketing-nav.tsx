"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface MarketingNavProps {
  waitlistEnabled: boolean;
}

export function MarketingNav({ waitlistEnabled }: MarketingNavProps) {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center
                 justify-between px-8 py-6 mix-blend-difference"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <Link href="/marketing" className="flex items-center gap-2">
        <span className="font-serif text-lg font-bold tracking-[0.2em] text-white">
          BRASENA
        </span>
      </Link>
      {!waitlistEnabled && (
        <div className="flex items-center gap-8">
          <Link
            href="/auth/login"
            className="text-sm font-medium tracking-wider text-white/70
                       transition-colors hover:text-white uppercase"
          >
            Sign in
          </Link>
          <Link
            href="/auth/sign-up"
            className="rounded-full border border-white/30 px-5 py-2 text-sm
                       font-medium tracking-wider text-white transition-all
                       hover:bg-white hover:text-[#0C0F0C] uppercase"
          >
            Get started
          </Link>
        </div>
      )}
    </motion.header>
  );
}
