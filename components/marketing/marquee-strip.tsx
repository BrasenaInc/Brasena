"use client";

import { motion } from "framer-motion";
import type { Locale } from "./marketing-page";

const itemsEn = ["BRONX LAUNCH", "★", "B2B WHOLESALE", "★", "REAL-TIME TRACKING", "★", "RESTAURANT & LOUNGES", "★", "BEEF · CHICKEN · PORK", "★", "VENDOR NETWORK", "★", "SAME-DAY DELIVERY", "★", "B2C & B2B PRICING", "★", "98% ORDER ACCURACY", "★", "EXPANDING TO NYC & BEYOND", "★"];
const itemsEs = ["LANZAMIENTO EN EL BRONX", "★", "MAYORISTA B2B", "★", "SEGUIMIENTO EN TIEMPO REAL", "★", "RESTAURANTES Y LOUNGES", "★", "RES · POLLO · CERDO", "★", "RED DE PROVEEDORES", "★", "ENTREGA EL MISMO DÍA", "★", "PRECIOS B2C Y B2B", "★", "98% PRECISIÓN EN PEDIDOS", "★", "EXPANSIÓN A NYC Y MÁS", "★"];

export function MarqueeStrip({ locale = "en" }: { locale?: Locale }) {
  const items = locale === "es" ? itemsEs : itemsEn;
  return (
    <div className="relative overflow-hidden bg-sage py-5">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-6 text-xs font-bold uppercase tracking-[0.3em] text-white/90"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
