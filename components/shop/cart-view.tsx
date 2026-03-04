"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ShoppingCart, Trash2, Minus, Plus, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useShopLanguage } from "@/components/shop/shop-language-provider";
import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "@/server/routers";
import type { users } from "@/db/schema";
import type { InferSelectModel } from "drizzle-orm";

type RouterOutputs = inferRouterOutputs<AppRouter>;
type CartItem = RouterOutputs["cart"]["get"][number];
type User = InferSelectModel<typeof users>;

const MIN_B2C_CENTS = 2500;
const MIN_B2B_CENTS = 15000;
const DELIVERY_FEE_CENTS = 499;

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export function CartView({
  initialItems,
  user,
}: {
  initialItems: CartItem[];
  user: User;
}) {
  const { t } = useShopLanguage();
  const { data: items = initialItems } = trpc.cart.get.useQuery(undefined, {
    initialData: initialItems,
  });

  const utils = trpc.useUtils();
  const updateQty = trpc.cart.updateQuantity.useMutation({
    onSuccess: () => utils.cart.get.invalidate(),
  });
  const pendingQtyRef = useRef<Record<string, { timeout: ReturnType<typeof setTimeout>; qty: number }>>({});
  const [pendingQtyState, setPendingQtyState] = useState<Record<string, number>>({});

  const getDisplayQty = (item: CartItem) => pendingQtyState[item.id] ?? item.quantity;

  const applyQtyChange = (item: CartItem, delta: number) => {
    const current = pendingQtyRef.current[item.id]?.qty ?? item.quantity;
    const next = Math.max(1, Math.min(10, current + delta));
    const prev = pendingQtyRef.current[item.id];
    if (prev?.timeout) clearTimeout(prev.timeout);
    pendingQtyRef.current[item.id] = {
      qty: next,
      timeout: setTimeout(() => {
        updateQty.mutate({ id: item.id, quantity: next });
        delete pendingQtyRef.current[item.id];
        setPendingQtyState((s) => {
          const nextS = { ...s };
          delete nextS[item.id];
          return nextS;
        });
      }, 300),
    };
    setPendingQtyState((s) => ({ ...s, [item.id]: next }));
  };

  const removeItem = trpc.cart.removeItem.useMutation({
    onSuccess: () => utils.cart.get.invalidate(),
  });

  const subtotalCents = items.reduce((sum, i) => sum + i.subtotalCents, 0);
  const isB2B = user.customerType === "business";
  const minCents = isB2B ? MIN_B2B_CENTS : MIN_B2C_CENTS;
  const meetsMinimum = subtotalCents >= minCents;
  const shortfallCents = meetsMinimum ? 0 : minCents - subtotalCents;
  const deliveryFeeCents = subtotalCents >= 15000 ? 0 : DELIVERY_FEE_CENTS;
  const totalCents = subtotalCents + deliveryFeeCents;

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <ShoppingCart className="mb-4 h-12 w-12 text-muted-foreground/40" />
        <h3 className="mb-1 text-base font-medium text-muted-foreground">
          {t("cart.empty")}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground/60">
          Add items from the shop to get started.
        </p>
        <Button asChild variant="outline">
          <Link href="/home">{t("cart.browseProducts")}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-2xl font-semibold tracking-tight">{t("cart.yourCart")}</h1>
          <span className="rounded-full bg-sage/20 px-2.5 py-0.5 text-sm font-medium text-sage">
            {itemCount} {itemCount === 1 ? t("cart.item") : t("cart.items")}
          </span>
        </div>
      </div>

      {!meetsMinimum && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-300">
          {isB2B
            ? `${t("cart.minOrderB2B")} ${formatPrice(shortfallCents)} ${t("cart.moreToPlace")}`
            : `${t("cart.minOrderB2C")} ${formatPrice(shortfallCents)} ${t("cart.more")}`}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex min-w-0 flex-col gap-3 rounded-xl border bg-card p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">
                  {item.product.name} — {item.weightLbs} {t("cart.lbBox")}
                </p>
                {item.isWholesale && (
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground line-through">
                      {formatPrice(item.product.pricePerLbCents)}/lb
                    </span>
                    <span className="text-sage">
                      {formatPrice(item.effectivePricePerLbCents)}/lb
                    </span>
                    <span className="rounded bg-sage/20 px-1.5 py-0.5 text-xs font-medium text-sage">
                      15% {t("cart.off")}
                    </span>
                  </div>
                )}
                {!item.isWholesale && (
                  <p className="text-sm text-muted-foreground">
                    {formatPrice(item.effectivePricePerLbCents)}/lb
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between gap-2 sm:justify-end">
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => applyQtyChange(item, -1)}
                    disabled={getDisplayQty(item) <= 1 || updateQty.isPending}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-l-lg border border-r-0 border-input bg-background text-foreground transition-opacity hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="flex h-9 w-12 shrink-0 items-center justify-center border-y border-input bg-background text-center text-sm font-medium">
                    {getDisplayQty(item)}
                  </span>
                  <button
                    type="button"
                    onClick={() => applyQtyChange(item, 1)}
                    disabled={getDisplayQty(item) >= 10 || updateQty.isPending}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-r-lg border border-l-0 border-input bg-background text-foreground transition-opacity hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
                <span className="min-w-16 text-right font-semibold text-sage">
                  {formatPrice(item.subtotalCents)}
                </span>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      disabled={removeItem.isPending}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Remove item?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This will remove {item.product.name} from your cart.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Keep it</AlertDialogCancel>
                      <AlertDialogAction
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        onClick={() => removeItem.mutate({ id: item.id })}
                        disabled={removeItem.isPending}
                      >
                        {removeItem.isPending ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          "Remove"
                        )}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-5">
            <h2 className="mb-4 text-base font-semibold">{t("cart.orderSummary")}</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t("cart.subtotal")}</span>
                <span className="text-foreground">{formatPrice(subtotalCents)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t("cart.delivery")}</span>
                <span className={deliveryFeeCents === 0 ? "font-medium text-sage" : "text-foreground"}>
                  {deliveryFeeCents === 0 ? t("cart.free") : formatPrice(deliveryFeeCents)}
                </span>
              </div>
              {isB2B && (
                <div className="flex justify-between font-medium text-sage">
                  <span>{t("cart.wholesaleDiscount")}</span>
                  <span>{t("cart.applied")}</span>
                </div>
              )}
            </div>
            <div className="my-4 border-t border-border pt-4">
              <div className="flex justify-between text-base font-bold text-foreground">
                <span>{t("cart.total")}</span>
                <span>{formatPrice(totalCents)}</span>
              </div>
            </div>
            {meetsMinimum ? (
              <Button asChild className="w-full bg-sage hover:bg-sage-dark text-white">
                <Link href="/checkout">{t("cart.proceedToCheckout")}</Link>
              </Button>
            ) : (
              <Button
                className="w-full bg-sage hover:bg-sage-dark text-white"
                disabled
              >
                {t("cart.proceedToCheckout")}
              </Button>
            )}
            {isB2B && (
              <p className="mt-2 text-center text-xs text-muted-foreground">
                {t("cart.payOnInvoiceNote")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
