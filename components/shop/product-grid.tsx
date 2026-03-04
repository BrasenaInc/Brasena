"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Beef, Drumstick, Ham } from "lucide-react";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { products } from "@/db/schema";
import type { InferSelectModel } from "drizzle-orm";

type Product = InferSelectModel<typeof products>;

const CATEGORIES = ["All", "Beef", "Chicken", "Pork"] as const;

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
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const { data: products, isLoading } = trpc.products.list.useQuery(
    {},
    { initialData: initialProducts }
  );

  const filtered =
    categoryFilter === "All"
      ? products ?? []
      : (products ?? []).filter(
          (p) => p.category === categoryFilter.toLowerCase()
        );

  return (
    <div id="products" className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <Button
            key={cat}
            variant={categoryFilter === cat ? "default" : "outline"}
            size="sm"
            className={
              categoryFilter === cat
                ? "rounded-full bg-sage text-white hover:bg-sage-dark"
                : "rounded-full"
            }
            onClick={() => setCategoryFilter(cat)}
          >
            {cat}
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
          No products available yet
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
          <div className="flex h-full w-full items-center justify-center bg-sage/10">
            <CategoryIcon category={product.category} />
          </div>
        )}
        <span
          className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-xs font-medium ${categoryBadgeClass(product.category)}`}
        >
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-3">
        <p className="truncate font-medium">{product.name}</p>
        <p className="font-semibold text-sage">
          {formatPrice(product.pricePerLbCents)}
        </p>
        <span className="mt-2 text-sm text-muted-foreground">View</span>
      </div>
    </Link>
  );
}

