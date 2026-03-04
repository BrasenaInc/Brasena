"use client";

import Link from "next/link";

export function MarketingFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#0C0F0C] px-8 py-10">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <span className="font-serif text-base font-bold tracking-[0.2em] text-white/40">
          BRASENA
        </span>
        <span className="text-xs text-white/20">
          The Bronx, NYC · Launching 2026 · © Brasena Inc.
        </span>
        <div className="flex gap-6">
          <Link
            href="/auth/login"
            className="text-xs uppercase tracking-wider text-white/30
                       transition-colors hover:text-white/60"
          >
            Sign in
          </Link>
          <Link
            href="/auth/sign-up"
            className="text-xs uppercase tracking-wider text-white/30
                       transition-colors hover:text-white/60"
          >
            Get started
          </Link>
        </div>
      </div>
    </footer>
  );
}
