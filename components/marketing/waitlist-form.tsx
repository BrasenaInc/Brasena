"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trpc } from "@/lib/trpc/client";
import { Loader2, CheckCircle } from "lucide-react";

export function WaitlistForm({ theme }: { theme: "dark" | "light" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState<"residential" | "business">("residential");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isDark = theme === "dark";

  const join = trpc.settings.joinWaitlist.useMutation({
    onSuccess: () => setSubmitted(true),
    onError: (err) => setError(err.message),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim()) return setError("Please enter your name.");
    if (!email.trim() || !email.includes("@"))
      return setError("Please enter a valid email.");
    join.mutate({ name: name.trim(), email: email.trim().toLowerCase(), type });
  };

  const inputClass = `w-full rounded-xl px-4 py-3 text-sm outline-none transition-all border focus:ring-2 focus:ring-sage/40 ${
    isDark
      ? "bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-sage/50"
      : "bg-white border-[#D9CFC0] text-[#1F1812] placeholder:text-[#6B6058]/50 focus:border-sage"
  }`;

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          className="flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage/20">
            <CheckCircle className="h-7 w-7 text-sage" />
          </div>
          <div>
            <p
              className={`mb-1 font-serif text-xl font-bold ${
                isDark ? "text-white" : "text-[#1F1812]"
              }`}
            >
              You're on the list.
            </p>
            <p
              className={`text-sm ${
                isDark ? "text-white/40" : "text-[#6B6058]"
              }`}
            >
              We'll reach out to {email} when Brasena launches.
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          className="flex w-full max-w-md flex-col gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
        >
          <div
            className={`flex rounded-xl p-1 ${
              isDark ? "bg-white/5" : "bg-[#E8DFD1]"
            }`}
          >
            {(["residential", "business"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                className={`flex-1 rounded-lg py-2 text-xs font-medium uppercase tracking-wider transition-all ${
                  type === t
                    ? "bg-sage text-white shadow-sm"
                    : isDark
                      ? "text-white/40 hover:text-white/70"
                      : "text-[#6B6058] hover:text-[#1F1812]"
                }`}
              >
                {t === "residential" ? "Residential" : "Business"}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            disabled={join.isPending}
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            disabled={join.isPending}
          />
          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}
          <button
            type="submit"
            disabled={join.isPending}
            className="w-full rounded-xl bg-sage px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-sage-dark disabled:opacity-70"
          >
            {join.isPending ? (
              <Loader2 className="mx-auto h-5 w-5 animate-spin" />
            ) : (
              "Join the waitlist"
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
