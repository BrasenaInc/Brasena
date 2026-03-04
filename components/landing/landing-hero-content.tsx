"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { WaitlistForm } from "@/components/marketing/waitlist-form";

export function LandingHeroContent({
  waitlistEnabled,
}: {
  waitlistEnabled: boolean;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const theme = mounted && resolvedTheme === "dark" ? "dark" : "light";

  return (
    <>
      <motion.h1
        className="font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Wholesale meat,
        <br />
        <span className="text-sage">delivered fresh.</span>
      </motion.h1>
      <motion.p
        className="mt-6 max-w-xl text-lg text-muted-foreground"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Restaurant-quality cuts at bulk prices. Order by the case — ribeye,
        ground beef, chicken, and more — delivered to your door in the Bronx.
      </motion.p>
      <motion.div
        className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {waitlistEnabled ? (
          <WaitlistForm theme={theme} />
        ) : (
          <>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/auth/sign-up"
                className="inline-block w-full rounded-xl bg-sage px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-sage-dark sm:w-auto"
              >
                Start ordering
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/auth/login"
                className="inline-block w-full rounded-xl border border-border px-8 py-4 text-base font-medium text-muted-foreground transition-colors hover:text-foreground sm:w-auto"
              >
                Sign in
              </Link>
            </motion.div>
          </>
        )}
      </motion.div>
    </>
  );
}
