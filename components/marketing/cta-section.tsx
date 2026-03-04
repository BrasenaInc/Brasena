"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WaitlistForm } from "./waitlist-form";

interface CtaSectionProps {
  waitlistEnabled: boolean;
}

export function CtaSection({ waitlistEnabled }: CtaSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#0C0F0C] px-6 py-40 text-center md:px-16"
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px]
                   -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[100px]"
        style={{ background: "#8BAF8E" }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        <motion.div
          className="mb-6 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px w-12 bg-sage/50" />
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-sage/70">
            {waitlistEnabled ? "Launching in the Bronx" : "Ready to order?"}
          </span>
          <div className="h-px w-12 bg-sage/50" />
        </motion.div>

        {["Get wholesale", "prices now."].map((line, i) => (
          <div key={i} className="overflow-hidden">
            <motion.h2
              className="font-serif text-[clamp(3rem,8vw,7rem)] font-bold
                         leading-none text-white"
              initial={{ y: "110%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{
                duration: 0.9,
                delay: i * 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {line}
            </motion.h2>
          </div>
        ))}

        <motion.p
          className="mx-auto mt-8 max-w-sm text-base text-white/40"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {waitlistEnabled
            ? "Join restaurants, lounges, and Bronx families already on the waitlist. We're launching soon — get early access."
            : "Join restaurants, lounges, and Bronx families already ordering wholesale cuts through Brasena."}
        </motion.p>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          {waitlistEnabled ? (
            <WaitlistForm theme="dark" />
          ) : (
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <motion.a
                href="/auth/sign-up"
                className="rounded-full bg-sage px-10 py-4 text-sm font-semibold
                           uppercase tracking-wider text-white transition-all
                           hover:bg-sage-dark"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Create account
              </motion.a>
              <motion.a
                href="/auth/login"
                className="rounded-full border border-white/20 px-10 py-4 text-sm
                           font-medium uppercase tracking-wider text-white/60
                           transition-all hover:border-white/50 hover:text-white"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Sign in
              </motion.a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
