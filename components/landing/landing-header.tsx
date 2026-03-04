"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrasenaLogo } from "@/components/brand/brasena-logo";

export function LandingHeader() {
  return (
    <motion.header
      className="relative z-10 flex h-16 items-center justify-between border-b border-border px-6"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2">
        <BrasenaLogo className="h-8 w-8" />
        <span className="font-serif text-xl font-bold tracking-wider text-sage">
          BRASENA
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Link
          href="/auth/login"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Sign in
        </Link>
        <Link
          href="/auth/sign-up"
          className="rounded-md bg-sage px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sage-dark"
        >
          Get started
        </Link>
      </div>
    </motion.header>
  );
}
