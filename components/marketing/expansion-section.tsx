"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Locale } from "./marketing-page";

const markets = [
  { name: "The Bronx", status: "Launching", active: true },
  { name: "Queens", status: "Coming soon", active: false },
  { name: "Brooklyn", status: "Coming soon", active: false },
  { name: "Long Island", status: "Coming soon", active: false },
  { name: "Connecticut", status: "Coming soon", active: false },
  { name: "New Jersey", status: "Coming soon", active: false },
];

const expansionCopy = { en: { eyebrow: "Where we're going", lines: "Bronx first.\nNew York next.\nThen everywhere." }, es: { eyebrow: "A dónde vamos", lines: "Primero el Bronx.\nLuego Nueva York.\nY después todo." } };
const marketStatus = { en: { launching: "Launching", comingSoon: "Coming soon" }, es: { launching: "En camino", comingSoon: "Próximamente" } };

export function ExpansionSection({ locale = "en" }: { locale?: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const t = expansionCopy[locale];
  const status = marketStatus[locale];

  return (
    <section ref={ref} className="bg-[#0C0F0C] px-6 py-24 md:px-16">
      <motion.div
        className="mb-12 flex items-center gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="h-px w-12 bg-sage/50" />
        <span className="text-xs font-medium uppercase tracking-[0.4em] text-sage/70">
          {t.eyebrow}
        </span>
      </motion.div>

      <div className="overflow-hidden">
        {t.lines.split("\n").map((line, i) => (
          <div key={i} className="overflow-hidden px-3">
            <motion.h2
              className="font-serif text-[clamp(2rem,4vw,4rem)] font-bold
                         leading-tight text-white"
              initial={{ y: "110%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {line}
            </motion.h2>
          </div>
        ))}
      </div>

      <motion.div
        className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        {markets.map((market) => (
          <div
            key={market.name}
            className={`rounded-2xl border p-4 text-center transition-all ${
              market.active
                ? "border-sage bg-sage/10"
                : "border-white/10 bg-white/[0.02]"
            }`}
          >
            <div
              className={`mb-1 text-sm font-semibold ${
                market.active ? "text-sage" : "text-white/40"
              }`}
            >
              {market.name}
            </div>
            <div className="text-xs uppercase tracking-wider">
              {market.active ? (
                <span className="flex items-center justify-center gap-1 text-sage/70">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-sage" />
                  {status.launching}
                </span>
              ) : (
                <span className="text-white/20">{status.comingSoon}</span>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
