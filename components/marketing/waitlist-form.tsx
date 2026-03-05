"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trpc } from "@/lib/trpc/client";
import { Home, Building2, CheckCircle, Loader2 } from "lucide-react";
import type { Locale } from "./marketing-page";

const waitlistCopy: Record<Locale, { title: string; subtitle: string; forFamilies: string; personalHousehold: string; familiesFeatures: string[]; fromPrice: string; vsRetail: string; forBusinesses: string; businessSub: string; businessFeatures: string[]; volumePricing: string; contactQuotes: string; select: string; yourName: string; emailAddress: string; joinCta: string; successTitle: string; successSub: string; errorName: string; errorEmail: string; errorAlready: string }> = {
  en: { title: "Join the waitlist", subtitle: "Choose how you'll use Brasena", forFamilies: "For Families", personalHousehold: "Personal & household", familiesFeatures: ["Premium cuts at wholesale prices", "Flexible box sizes (5–20 lbs)", "Weekly or monthly delivery", "No membership fee"], fromPrice: "From $4.99/lb", vsRetail: "vs $8–12/lb retail", forBusinesses: "For Businesses", businessSub: "Restaurants, lounges & catering", businessFeatures: ["Bulk pricing on full cases", "Custom cut specifications", "Priority delivery scheduling", "Dedicated account manager"], volumePricing: "Volume pricing available", contactQuotes: "Contact us for custom quotes", select: "Select", yourName: "Your name", emailAddress: "Email address", joinCta: "Join the waitlist →", successTitle: "You're on the list!", successSub: "We'll reach out when Brasena launches in your area.", errorName: "Please enter your name.", errorEmail: "Please enter a valid email.", errorAlready: "Already on the waitlist" },
  es: { title: "Únete a la lista de espera", subtitle: "Elige cómo usarás Brasena", forFamilies: "Para familias", personalHousehold: "Hogar y personal", familiesFeatures: ["Cortes premium a precios mayoristas", "Cajas flexibles (5–20 lbs)", "Entrega semanal o mensual", "Sin cuota de membresía"], fromPrice: "Desde $4.99/lb", vsRetail: "vs $8–12/lb al por menor", forBusinesses: "Para empresas", businessSub: "Restaurantes, lounges y catering", businessFeatures: ["Precios al por mayor en cajas completas", "Especificaciones de corte a medida", "Prioridad en horarios de entrega", "Gerente de cuenta dedicado"], volumePricing: "Precios por volumen disponibles", contactQuotes: "Contáctenos para cotizaciones", select: "Seleccionar", yourName: "Tu nombre", emailAddress: "Correo electrónico", joinCta: "Unirse a la lista →", successTitle: "¡Estás en la lista!", successSub: "Nos pondremos en contacto cuando Brasena llegue a tu zona.", errorName: "Por favor escribe tu nombre.", errorEmail: "Por favor escribe un correo válido.", errorAlready: "Ya estás en la lista de espera" },
};

export function WaitlistForm({ theme, locale = "en" }: { theme: "dark" | "light"; locale?: Locale }) {
  const [step, setStep] = useState<"select" | "form" | "success">("select");
  const [selectedType, setSelectedType] = useState<"residential" | "business" | null>(
    null
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const isDark = theme === "dark";
  const t = waitlistCopy[locale];

  const join = trpc.waitlist.export.useMutation({
    onSuccess: () => setStep("success"),
    onError: (err) => setError(err.message === "Already on the waitlist" ? t.errorAlready : err.message),
  });

  const handleSelect = (type: "residential" | "business") => {
    setSelectedType(type);
    setStep("form");
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim()) return setError(t.errorName);
    if (!email.trim() || !email.includes("@")) return setError(t.errorEmail);
    if (!selectedType) return;
    join.mutate({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: "—",
      birthday: "—",
      address: "—",
      type: selectedType,
    });
  };

  const inputClass = `w-full rounded-xl px-4 py-3 text-sm outline-none transition-all border focus:ring-2 focus:ring-sage/40 ${
    isDark
      ? "bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-sage/50"
      : "bg-white border-[#D9CFC0] text-[#1F1812] placeholder:text-[#6B6058]/50 focus:border-sage"
  }`;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {step === "select" && (
          <motion.div
            key="select"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-2xl font-bold text-white text-center">
              {t.title}
            </h2>
            <p className="text-center text-sm text-white/50">
              {t.subtitle}
            </p>

            <div className="grid gap-6 sm:grid-cols-2 sm:items-stretch">
              {/* Residential card */}
              <motion.div
                className={`flex h-full min-h-0 flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  isDark
                    ? "bg-[#111814] border-[#1E2B1E] hover:border-sage/50"
                    : "bg-[#111814] border-[#1E2B1E] hover:border-sage/50"
                }`}
                whileHover={{ y: -2 }}
              >
                <div className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sage/20">
                  <Home className="h-5 w-5 text-sage" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  {t.forFamilies}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.personalHousehold}
                </p>
                <div className="my-4 h-px shrink-0 bg-[#1E2B1E]" />
                <ul className="min-h-[7.5rem] space-y-2 text-sm text-white/80">
                  {t.familiesFeatures.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-sage">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <p className="font-semibold text-lg text-sage">
                    {t.fromPrice}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.vsRetail}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleSelect("residential")}
                    className="mt-6 w-full rounded-xl border border-[#1E2B1E] py-3 text-sm font-medium text-white transition-colors hover:bg-sage/10 hover:border-sage/50"
                  >
                    {t.select}
                  </button>
                </div>
              </motion.div>

              {/* Business card */}
              <motion.div
                className={`flex h-full min-h-0 flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  isDark
                    ? "bg-[#111814] border-[#1E2B1E] hover:border-sage/50"
                    : "bg-[#111814] border-[#1E2B1E] hover:border-sage/50"
                }`}
                whileHover={{ y: -2 }}
              >
                <div className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sage/20">
                  <Building2 className="h-5 w-5 text-sage" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  {t.forBusinesses}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.businessSub}
                </p>
                <div className="my-4 h-px shrink-0 bg-[#1E2B1E]" />
                <ul className="min-h-[7.5rem] space-y-2 text-sm text-white/80">
                  {t.businessFeatures.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-sage">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <p className="font-semibold text-lg text-sage">
                    {t.volumePricing}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.contactQuotes}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleSelect("business")}
                    className="mt-6 w-full rounded-xl border border-[#1E2B1E] py-3 text-sm font-medium text-white transition-colors hover:bg-sage/10 hover:border-sage/50"
                  >
                    {t.select}
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {step === "form" && (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <button
              type="button"
              onClick={() => setStep("select")}
              className="rounded-full border border-sage/30 bg-sage/10 px-3 py-1 text-xs font-medium text-sage"
            >
              {selectedType === "residential" ? "B2C" : "B2B"}
            </button>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder={t.yourName}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                disabled={join.isPending}
              />
              <div>
                <input
                  type="email"
                  placeholder={t.emailAddress}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  disabled={join.isPending}
                />
                {error && (
                  <p className="mt-2 text-sm text-red-400">{error}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={join.isPending}
                className="w-full rounded-xl bg-sage px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-sage/90 disabled:opacity-70"
              >
                {join.isPending ? (
                  <Loader2 className="mx-auto h-5 w-5 animate-spin" />
                ) : (
                  t.joinCta
                )}
              </button>
            </form>
          </motion.div>
        )}

        {step === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage/20">
              <CheckCircle className="h-7 w-7 text-sage" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              {t.successTitle}
            </h3>
            <p className="text-sm text-white/60">
              {t.successSub}
            </p>
            <span className="rounded-full border border-sage/30 bg-sage/15 px-3 py-1 text-xs font-medium text-sage">
              {selectedType === "residential" ? "B2C" : "B2B"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
