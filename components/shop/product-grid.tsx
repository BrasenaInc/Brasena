"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Beef, Drumstick, Ham } from "lucide-react";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useShopLanguage } from "@/components/shop/shop-language-provider";
import { categoryBadgeClass } from "@/lib/utils";
import type { products } from "@/db/schema";
import type { InferSelectModel } from "drizzle-orm";

type Product = InferSelectModel<typeof products>;

const CATEGORY_KEYS = ["all", "beef", "chicken", "pork"] as const;

function CategoryIcon({ category }: { category: string }) {
  switch (category) {
    case "beef":
      return <Beef className="h-8 w-8 text-muted-foreground" />;
    case "chicken":
      return <Drumstick className="h-8 w-8 text-muted-foreground" />;
    case "pork":
      return <Ham className="h-8 w-8 text-muted-foreground" />;
    default:
      return <Beef className="h-8 w-8 text-muted-foreground" />;
  }
}

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}/lb`;
}

export function ProductGrid({
  initialProducts,
}: {
  initialProducts: Product[];
}) {
  const { t } = useShopLanguage();
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const { data: products, isLoading } = trpc.products.list.useQuery(
    {},
    { initialData: initialProducts }
  );

  const filtered =
    categoryFilter === "all"
      ? products ?? []
      : (products ?? []).filter(
          (p) => p.category === categoryFilter.toLowerCase()
        );

  return (
    <div id="products" className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {CATEGORY_KEYS.map((key) => (
          <Button
            key={key}
            variant={categoryFilter === key ? "default" : "outline"}
            size="sm"
            className={
              categoryFilter === key
                ? "rounded-full bg-sage text-white hover:bg-sage-dark"
                : "rounded-full"
            }
            onClick={() => setCategoryFilter(key)}
          >
            {t(`categories.${key}`)}
          </Button>
        ))}
      </div>

      {isLoading && products === undefined ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="aspect-square rounded-xl" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">
          {t("products.noProducts")}
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { t } = useShopLanguage();
  const categoryLabel =
    product.category === "beef"
      ? t("categories.beef")
      : product.category === "chicken"
        ? t("categories.chicken")
        : product.category === "pork"
          ? t("categories.pork")
          : product.category;
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <span className="opacity-40">
              <CategoryIcon category={product.category} />
            </span>
          </div>
        )}
        <span
          className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-xs font-medium ${categoryBadgeClass(product.category)}`}
        >
          {categoryLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-3">
        <p className="truncate font-medium">{product.name}</p>
        <p className="font-semibold text-sage">
          {formatPrice(product.pricePerLbCents)}
        </p>
        <span className="mt-2 text-sm text-muted-foreground">
          {t("products.view")}
        </span>
      </div>
    </Link>
  );
}

