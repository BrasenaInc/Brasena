"use client";

import { useState } from "react";
import { MarketingNav } from "./marketing-nav";
import { MarketingFooter } from "./marketing-footer";
import type { Locale } from "./marketing-page";

export function LegalPageShell({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  return (
    <>
      <MarketingNav
        waitlistEnabled={false}
        locale={locale}
        setLocale={setLocale}
      />
      {children}
      <MarketingFooter waitlistEnabled={false} locale={locale} />
    </>
  );
}
