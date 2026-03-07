"use client";

import Link from "next/link";
import type { Locale } from "./marketing-page";

const footerCopy = {
  en: { tagline: "The Bronx, NYC · Launching 2026 · © Brasena Inc." },
  es: { tagline: "El Bronx, NYC · Lanzamiento 2026 · © Brasena Inc." },
};

export function MarketingFooter({
  locale = "en",
}: {
  waitlistEnabled: boolean;
  locale?: Locale;
}) {
  const t = footerCopy[locale];
  return (
    <footer className="border-t border-white/5 bg-[#0C0F0C] px-8 py-10">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <span className="font-serif text-base font-bold tracking-[0.2em] text-white/40">
          BRASENA
        </span>
        <span className="text-xs text-white/20">{t.tagline}</span>
        <div className="flex gap-6">
          <Link
            href="/auth/login"
            className="text-xs uppercase tracking-wider text-white/25 transition-colors hover:text-white/50"
          >
            Sign in
          </Link>
        </div>
      </div>
    </footer>
  );
}
