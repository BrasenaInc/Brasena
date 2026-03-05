"use client";

import { Bell, Megaphone, Package } from "lucide-react";
import { useShopLanguage } from "@/components/shop/shop-language-provider";

const copy = {
  en: {
    title: "Notifications",
    subtitle: "Choose how you want to hear from us.",
    orderUpdates: "Order updates",
    orderUpdatesDesc: "Delivery status, confirmations, and order changes.",
    promos: "Promotions & news",
    promosDesc: "Deals, new products, and Brasena updates.",
    save: "Save preferences",
    saved: "Saved",
  },
  es: {
    title: "Notificaciones",
    subtitle: "Elige cómo quieres que te contactemos.",
    orderUpdates: "Actualizaciones de pedidos",
    orderUpdatesDesc: "Estado de entrega, confirmaciones y cambios.",
    promos: "Ofertas y novedades",
    promosDesc: "Ofertas, nuevos productos y novedades de Brasena.",
    save: "Guardar preferencias",
    saved: "Guardado",
  },
};

export default function NotificationsPage() {
  const { language } = useShopLanguage();
  const t = copy[language as keyof typeof copy] ?? copy.en;

  return (
    <div className="mx-auto max-w-xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage/15 text-sage">
          <Bell className="h-6 w-6" />
        </div>
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">{t.title}</h1>
          <p className="text-sm text-muted-foreground">{t.subtitle}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Package className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-foreground">{t.orderUpdates}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{t.orderUpdatesDesc}</p>
              <label className="mt-3 flex cursor-pointer items-center gap-2">
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-border" />
                <span className="text-sm">Email</span>
              </label>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Megaphone className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-foreground">{t.promos}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{t.promosDesc}</p>
              <label className="mt-3 flex cursor-pointer items-center gap-2">
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-border" />
                <span className="text-sm">Email</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Preferences are saved automatically. Order updates are always sent for your active orders.
      </p>
    </div>
  );
}
