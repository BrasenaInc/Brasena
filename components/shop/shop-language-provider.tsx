"use client";

import { createContext, useContext, useMemo } from "react";
import { trpc } from "@/lib/trpc/client";
import {
  createShopT,
  type ShopLang,
  type ShopT,
} from "@/lib/i18n/shop-translations";
import type { users } from "@/db/schema";
import type { InferSelectModel } from "drizzle-orm";

type User = InferSelectModel<typeof users>;

const ShopLanguageContext = createContext<{
  language: ShopLang;
  t: ShopT;
  user: User;
} | null>(null);

export function ShopLanguageProvider({
  initialUser,
  children,
}: {
  initialUser: User;
  children: React.ReactNode;
}) {
  const { data: user = initialUser } = trpc.users.me.useQuery(undefined, {
    initialData: initialUser,
  });

  const value = useMemo(() => {
    const language = (user.language ?? "en") as ShopLang;
    return {
      language,
      t: createShopT(language),
      user,
    };
  }, [user]);

  return (
    <ShopLanguageContext.Provider value={value}>
      {children}
    </ShopLanguageContext.Provider>
  );
}

export function useShopLanguage() {
  const ctx = useContext(ShopLanguageContext);
  if (!ctx) {
    throw new Error("useShopLanguage must be used within ShopLanguageProvider");
  }
  return ctx;
}
