"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { ArrowLeft, Beef, Check, Drumstick, Ham, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { useShopLanguage } from "@/components/shop/shop-language-provider";
import { ProductImageCycle } from "@/components/shop/product-image-cycle";
import { categoryBadgeClass } from "@/lib/utils";
import type { products, weightTiers } from "@/db/schema";
import type { InferSelectModel } from "drizzle-orm";

type Product = InferSelectModel<typeof products> & {
  weightTiers: InferSelectModel<typeof weightTiers>[];
  imageUrls?: string[];
};

function CategoryIcon({ category }: { category: string }) {
  switch (category) {
    case "beef":
      return <Beef className="h-12 w-12 text-muted-foreground" />;
    case "chicken":
      return <Drumstick className="h-12 w-12 text-muted-foreground" />;
    case "pork":
      return <Ham className="h-12 w-12 text-muted-foreground" />;
    default:
      return <Beef className="h-12 w-12 text-muted-foreground" />;
  }
}

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export function ProductDetail({ product }: { product: Product }) {
  const { t } = useShopLanguage();
  const [selectedTierIndex, setSelectedTierIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const utils = trpc.useUtils();
  const addToCart = trpc.cart.addItem.useMutation({
    onSuccess: () => {
      utils.cart.get.invalidate();
      toast.success(t("productDetail.addedToCart"), {
        description: `${product.name} ${t("productDetail.addedToCart").toLowerCase()}.`,
        action: {
          label: t("productDetail.viewCart"),
          onClick: () => window.location.assign("/cart"),
        },
      });
    },
    onError: (err) => {
      toast.error("Something went wrong", {
        description: err.message,
      });
    },
  });

  const tier = product.weightTiers[selectedTierIndex];
  const pricePerLbCents = product.pricePerLbCents;
  const subtotalCents = tier
    ? tier.weightLbs * pricePerLbCents * quantity
    : 0;

  const handleAddToCart = () => {
    if (!tier) return;
    addToCart.mutate({
      productId: product.id,
      weightLbs: tier.weightLbs,
      quantity,
    });
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <Link
        href="/home"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> {t("productDetail.backToShop")}
      </Link>

      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted">
        {product.imageUrls?.length ? (
          <ProductImageCycle
            imageUrls={product.imageUrls}
            className="h-full w-full"
            fill
            sizes="(max-width: 672px) 100vw, 672px"
            alt={product.name}
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <span className="opacity-40">
              <CategoryIcon category={product.category} />
            </span>
          </div>
        )}
        <span
          className={`absolute left-3 top-3 rounded-full px-2 py-1 text-xs font-medium ${categoryBadgeClass(product.category)}`}
        >
          {product.category}
        </span>
      </div>

      <div className="space-y-4">
        <span
          className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${categoryBadgeClass(product.category)}`}
        >
          {product.category}
        </span>
        <h1 className="font-serif text-3xl font-bold">{product.name}</h1>
        {product.description && (
          <p className="text-muted-foreground">{product.description}</p>
        )}
        <p className="text-2xl font-semibold text-sage">
          {formatPrice(pricePerLbCents)}/lb
        </p>
      </div>

      {product.weightTiers.length > 0 && (
        <div>
          <Label>{t("productDetail.selectPackage")}</Label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {product.weightTiers.map((t, i) => {
              const total = t.weightLbs * pricePerLbCents;
              const isSelected = selectedTierIndex === i;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedTierIndex(i)}
                  className={`relative rounded-xl border-2 p-4 text-left transition-colors ${
                    isSelected
                      ? "border-sage bg-sage/10"
                      : "border-border hover:bg-accent"
                  }`}
                >
                  {isSelected && (
                    <span className="absolute right-2 top-2 text-sage">
                      <Check className="h-5 w-5" />
                    </span>
                  )}
                  <p className="font-medium">{t.label}</p>
                  <p className="text-lg font-semibold">
                    {formatPrice(total)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatPrice(pricePerLbCents)}/lb
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div>
        <Label>{t("productDetail.quantity")}</Label>
        <div className="mt-2 flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            −
          </Button>
          <span className="min-w-[2rem] text-center font-medium">
            {quantity}
          </span>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => setQuantity((q) => Math.min(10, q + 1))}
          >
            +
          </Button>
        </div>
      </div>

      <div className="rounded-lg border bg-muted/50 p-4">
        <p className="text-sm text-muted-foreground">
          {t("productDetail.subtotal")}:{" "}
          <span className="font-semibold text-foreground">
            {formatPrice(subtotalCents)}
          </span>
        </p>
      </div>

      <Button
        className="w-full bg-sage py-6 text-base font-semibold text-white hover:bg-sage-dark"
        onClick={handleAddToCart}
        disabled={addToCart.isPending}
      >
        {addToCart.isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t("productDetail.adding")}
          </>
        ) : (
          t("productDetail.addToCart")
        )}
      </Button>
    </div>
  );
}

function Label({ children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className="block text-sm font-medium leading-none"
      {...props}
    >
      {children}
    </label>
  );
}
