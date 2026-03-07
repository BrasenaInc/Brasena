"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { WaitlistCard } from "@/components/marketing/hero-section";
import type { Locale } from "@/components/marketing/marketing-page";

function WaitlistShell({ locale, setLocale, source }: { locale: Locale; setLocale: (l: Locale) => void; source?: string }) {
  return (
    <div className="min-h-screen w-full bg-[#0C0F0C]">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-8 md:py-6">
        <Link href="/marketing" className="font-serif text-lg font-bold tracking-[0.2em] text-white">
          BRASENA
        </Link>
        <div className="flex rounded-full border border-white/20 bg-white/5 p-0.5">
          <button
            type="button"
            onClick={() => setLocale("en")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
              locale === "en" ? "bg-white text-[#0C0F0C]" : "text-white/70 hover:text-white"
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLocale("es")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
              locale === "es" ? "bg-white text-[#0C0F0C]" : "text-white/70 hover:text-white"
            }`}
          >
            ES
          </button>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center px-4 pt-20 pb-12">
        <div className="w-full max-w-[420px]">
          <WaitlistCard locale={locale} source={source} />
        </div>
      </main>
    </div>
  );
}

function WaitlistContent() {
  const [locale, setLocale] = useState<Locale>("en");
  const searchParams = useSearchParams();
  const source = searchParams.get("src") ?? undefined;
  return <WaitlistShell locale={locale} setLocale={setLocale} source={source} />;
}

export default function WaitlistPage() {
  return (
    <Suspense fallback={<WaitlistShell locale="en" setLocale={() => {}} />}>
      <WaitlistContent />
    </Suspense>
  );
}
