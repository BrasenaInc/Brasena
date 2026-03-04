"use client";

import Link from "next/link";
import { Beef, Drumstick, Ham } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useShopLanguage } from "@/components/shop/shop-language-provider";

export function HomeHero() {
  const { t } = useShopLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-[200px] overflow-hidden rounded-2xl bg-[#2C3B2D] md:min-h-[280px]"
    >
      <div className="grid min-h-[200px] grid-cols-1 md:min-h-[280px] md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-10 md:px-10">
          <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
            {t("hero.title")}
          </h2>
          <p className="mt-3 text-white/70">
            {t("hero.subtitle")}
          </p>
          <Button
            asChild
            className="mt-6 w-fit bg-sage text-white hover:bg-sage-dark"
          >
            <Link href="/home#products">{t("hero.shopNow")}</Link>
          </Button>
        </div>
        <div className="flex items-center justify-center gap-6 p-8 opacity-20 md:gap-10">
          <Beef className="h-16 w-16 text-white md:h-24 md:w-24" />
          <Drumstick className="h-16 w-16 text-white md:h-24 md:w-24" />
          <Ham className="h-16 w-16 text-white md:h-24 md:w-24" />
        </div>
      </div>
    </section>
  );
}
