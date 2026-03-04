"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Home } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    type: "Business",
    tag: "B2B",
    tagColor: "bg-purple-100 text-purple-800",
    title: "Restaurants & Lounges",
    description:
      "Automatic wholesale pricing with 15% off. Invoice payment terms available. Minimum $150 order. Built for kitchens that need reliable bulk supply.",
    features: ["Wholesale pricing", "Invoice / Net 30", "Bulk ordering", "Priority routing"],
  },
  {
    icon: Home,
    type: "Personal",
    tag: "B2C",
    tagColor: "bg-blue-100 text-blue-800",
    title: "Families & Households",
    description:
      "Premium cuts at prices far below retail. Order by the case or box. No membership required. Just real food at honest prices.",
    features: ["No membership fee", "Case & box sizes", "Card payment", "$25 minimum order"],
  },
];

export function AudienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="bg-[#F5F0E8] px-6 pb-32 md:px-16">
      <motion.div
        className="mb-16 flex items-center gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="h-px w-12 bg-sage" />
        <span className="text-xs font-medium uppercase tracking-[0.4em] text-sage">
          Who it&apos;s for
        </span>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {audiences.map((audience, i) => {
          const Icon = audience.icon;
          return (
            <motion.div
              key={audience.type}
              className="rounded-3xl border border-[#D9CFC0] bg-white/60 p-10"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/10">
                  <Icon className="h-6 w-6 text-sage" />
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${audience.tagColor}`}
                >
                  {audience.tag}
                </span>
              </div>

              <h3 className="mb-3 font-serif text-3xl font-bold text-[#1F1812]">
                {audience.title}
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-[#6B6058]">
                {audience.description}
              </p>

              <ul className="space-y-2">
                {audience.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-[#1F1812]"
                  >
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
