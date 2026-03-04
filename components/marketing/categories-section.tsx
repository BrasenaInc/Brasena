"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    name: "Beef",
    description:
      "Ribeye, NY Strip, Ground Beef 80/20 and more. Priced for bulk — ordered by the case, priced like a distributor.",
    tag: "FROM $6.99/LB",
    bg: "bg-[#2C1810]",
    accent: "text-amber-400",
  },
  {
    name: "Chicken",
    description:
      "Whole birds and boneless breast by the case. Fresh supply, wholesale pricing, no retail markup.",
    tag: "FROM $3.49/LB",
    bg: "bg-[#1A1A0A]",
    accent: "text-yellow-400",
  },
  {
    name: "Pork",
    description:
      "Baby back ribs, pork shoulder, and more. Built for restaurant kitchens and serious home cooks.",
    tag: "FROM $5.99/LB",
    bg: "bg-[#1C0F15]",
    accent: "text-pink-400",
  },
];

interface CategoriesSectionProps {
  waitlistEnabled: boolean;
}

export function CategoriesSection({ waitlistEnabled }: CategoriesSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="bg-[#F5F0E8] px-6 pb-32 md:px-16">
      <motion.div
        className="mb-12 flex items-center gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="h-px w-12 bg-sage" />
        <span className="text-xs font-medium uppercase tracking-[0.4em] text-sage">
          What we carry
        </span>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            className={`${cat.bg} group relative flex min-h-[320px] cursor-pointer
                        flex-col justify-between overflow-hidden rounded-3xl p-8`}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
            whileHover={{ scale: 1.02 }}
          >
            <span
              className={`text-xs font-bold uppercase tracking-[0.3em] ${cat.accent}`}
            >
              {cat.tag}
            </span>
            <div>
              <h3 className="mb-3 font-serif text-5xl font-bold text-white">
                {cat.name}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-white/50">
                {cat.description}
              </p>
              {waitlistEnabled ? (
                <span className="inline-flex items-center gap-2 rounded-full
                                 border border-white/20 px-5 py-2 text-xs
                                 font-medium uppercase tracking-wider text-white/50">
                  Coming soon →
                </span>
              ) : (
                <Link
                  href="/auth/sign-up"
                  className="inline-flex items-center gap-2 rounded-full
                             border border-white/20 px-5 py-2 text-xs
                             font-medium uppercase tracking-wider text-white/70
                             transition-all hover:border-white/50 hover:text-white"
                >
                  Shop {cat.name}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
