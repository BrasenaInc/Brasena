"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingCart, Store, Truck, MapPin } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ShoppingCart,
    title: "Place your order",
    description:
      "Browse wholesale cuts online or by phone. B2B accounts get 15% off standard pricing automatically applied at checkout.",
  },
  {
    number: "02",
    icon: Store,
    title: "Vendor confirms",
    description:
      "Your order routes automatically to the nearest partner vendor based on your zip code. One-tap confirmation gets your order into preparation.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Driver dispatched",
    description:
      "5–10 minutes after vendor confirmation, your driver is automatically assigned and en route for pickup.",
  },
  {
    number: "04",
    icon: MapPin,
    title: "Track in real time",
    description:
      "Follow your order from preparation through delivery on a live map — the same experience you expect from Uber Eats, built for wholesale.",
  },
];

export function HowItWorksSection() {
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
          How it works
        </span>
      </motion.div>

      <div className="grid gap-px overflow-hidden rounded-2xl bg-[#D9CFC0] md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              className="flex flex-col gap-6 bg-[#F5F0E8] p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-4xl font-bold text-sage/30">
                  {step.number}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/10">
                  <Icon className="h-5 w-5 text-sage" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#1F1812]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#6B6058]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
