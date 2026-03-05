"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Locale } from "./marketing-page";

const copy = {
  en: {
    eyebrow: "The platform",
    lines: ["A full logistics platform", "connecting wholesale", "meat distributors to", "restaurants, lounges,", "and families."],
    stats: [
      { value: "< 2min", label: "From order placement to vendor notification" },
      { value: "98%", label: "Order accuracy target from day one" },
      { value: "99.9%", label: "Uptime during business hours (6AM–11PM EST)" },
    ],
  },
  es: {
    eyebrow: "La plataforma",
    lines: ["Una plataforma logística completa", "que conecta distribuidores", "mayoristas de carne con", "restaurantes, lounges", "y familias."],
    stats: [
      { value: "< 2min", label: "Desde el pedido hasta la notificación al proveedor" },
      { value: "98%", label: "Precisión en pedidos desde el primer día" },
      { value: "99.9%", label: "Disponibilidad en horario comercial (6AM–11PM EST)" },
    ],
  },
};

export function AboutSection({ locale = "en" }: { locale?: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const t = copy[locale];

  return (
    <section ref={ref} className="relative bg-[#F5F0E8] px-6 py-32 md:px-16">
      <motion.div
        className="mb-16 flex items-center gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="h-px w-12 bg-sage" />
        <span className="text-xs font-medium uppercase tracking-[0.4em] text-sage">
          {t.eyebrow}
        </span>
      </motion.div>

      <div className="max-w-4xl">
        {t.lines.map((line, i) => (
          <div key={i} className="overflow-hidden px-3">
            <motion.p
              className="font-serif text-[clamp(2rem,5vw,5rem)] font-bold
                         leading-tight tracking-tight text-[#1F1812]"
              initial={{ y: "110%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {line}
            </motion.p>
          </div>
        ))}
      </div>

      <motion.div
        className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-3"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        {t.stats.map((stat, idx) => (
          <div key={idx} className="border-t border-[#D9CFC0] pt-6">
            <div className="mb-2 font-serif text-4xl font-bold text-sage">
              {stat.value}
            </div>
            <div className="text-sm leading-relaxed text-[#6B6058]">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
