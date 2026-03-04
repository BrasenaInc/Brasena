"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Beef, Check, Drumstick, Ham } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { products, weightTiers } from "@/db/schema";
import type { InferSelectModel } from "drizzle-orm";

type Product = InferSelectModel<typeof products> & {
  weightTiers: InferSelectModel<typeof weightTiers>[];
};

const categoryBadgeClass = (c: string) => {
  switch (c) {
    case "beef":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
    case "chicken":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "pork":
      return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200";
    default:
      return "";
  }
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
  const [selectedTierIndex, setSelectedTierIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [toast, setToast] = useState<string | null>(null);

  const tier = product.weightTiers[selectedTierIndex];
  const pricePerLbCents = product.pricePerLbCents;
  const subtotalCents = tier
    ? tier.weightLbs * pricePerLbCents * quantity
    : 0;

  const showCartToast = () => {
    setToast("Cart coming in Sprint 2");
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <Link
        href="/home"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to shop
      </Link>

      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 672px"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-sage/10">
            <CategoryIcon category={product.category} />
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
          <Label>Select package size</Label>
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
        <Label>Quantity</Label>
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
          Subtotal:{" "}
          <span className="font-semibold text-foreground">
            {formatPrice(subtotalCents)}
          </span>
        </p>
      </div>

      <Button
        className="w-full bg-sage py-6 text-base font-semibold text-white hover:bg-sage-dark"
        onClick={showCartToast}
      >
        Add to cart
      </Button>

      {toast && (
        <p className="rounded-lg border bg-sage/10 px-4 py-2 text-center text-sm text-sage">
          {toast}
        </p>
      )}
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
