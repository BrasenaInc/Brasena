"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Preloader } from "./preloader";
import { MarketingNav } from "./marketing-nav";
import { HeroSection } from "./hero-section";
import { MarqueeStrip } from "./marquee-strip";
import { AboutSection } from "./about-section";
import { HowItWorksSection } from "./how-it-works-section";
import { AudienceSection } from "./audience-section";
import { CategoriesSection } from "./categories-section";
import { ExpansionSection } from "./expansion-section";
import { CtaSection } from "./cta-section";
import { MarketingFooter } from "./marketing-footer";

export type Locale = "en" | "es";

interface MarketingPageProps {
  waitlistEnabled: boolean;
}

export function MarketingPage({ waitlistEnabled }: MarketingPageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    if (isLoading) return;
    let lenis: any;
    import("@studio-freight/lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    });
    return () => lenis?.destroy?.();
  }, [isLoading]);

  return (
    <>
      <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
        <MarketingNav
          waitlistEnabled={waitlistEnabled}
          locale={locale}
          setLocale={setLocale}
        />
        <HeroSection waitlistEnabled={waitlistEnabled} locale={locale} />
        <MarqueeStrip locale={locale} />
        <AboutSection locale={locale} />
        <HowItWorksSection locale={locale} />
        <AudienceSection locale={locale} />
        <CategoriesSection waitlistEnabled={waitlistEnabled} locale={locale} />
        <ExpansionSection locale={locale} />
        <CtaSection waitlistEnabled={waitlistEnabled} locale={locale} />
        <MarketingFooter waitlistEnabled={waitlistEnabled} locale={locale} />
      </div>

      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
