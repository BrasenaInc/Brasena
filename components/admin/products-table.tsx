"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2, Beef, Drumstick, Ham } from "lucide-react";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ProductDrawer } from "@/components/admin/product-drawer";
import type { products } from "@/db/schema";
import type { InferSelectModel } from "drizzle-orm";

type Product = InferSelectModel<typeof products> & { tierCount: number };

const CATEGORIES = ["All", "Beef", "Chicken", "Pork"] as const;
const categoryPill = (c: string) => {
  const base = "rounded-full px-3 py-1 text-xs font-medium";
  switch (c) {
    case "beef":
      return `${base} bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200`;
    case "chicken":
      return `${base} bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200`;
    case "pork":
      return `${base} bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200`;
    default:
      return base;
  }
};

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}/lb`;
}

function CategoryIcon({ category }: { category: string }) {
  switch (category) {
    case "beef":
      return <Beef className="h-5 w-5" />;
    case "chicken":
      return <Drumstick className="h-5 w-5" />;
    case "pork":
      return <Ham className="h-5 w-5" />;
    default:
      return <Beef className="h-5 w-5" />;
  }
}

export function ProductsTable({
  initialProducts,
}: {
  initialProducts: Product[];
}) {
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerMode, setDrawerMode] = useState<"create" | "edit">("create");
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const utils = trpc.useUtils();
  const { data: products = initialProducts } = trpc.products.adminList.useQuery(
    undefined,
    { initialData: initialProducts }
  );

  const toggleActive = trpc.products.toggleActive.useMutation({
    onSuccess: () => utils.products.adminList.invalidate(),
  });
  const deleteProduct = trpc.products.delete.useMutation({
    onSuccess: () => {
      utils.products.adminList.invalidate();
      setDeleteId(null);
    },
  });

  const filtered =
    categoryFilter === "All"
      ? products
      : products.filter((p) => p.category === categoryFilter.toLowerCase());

  const total = products.length;
  const activeCount = products.filter((p) => p.isActive).length;
  const inactiveCount = total - activeCount;

  const openCreate = () => {
    setEditingProduct(undefined);
    setDrawerMode("create");
    setDrawerOpen(true);
  };
  const openEdit = (product: Product) => {
    setEditingProduct(product);
    setDrawerMode("edit");
    setDrawerOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold">Products</h1>
        <Button onClick={openCreate} className="bg-sage hover:bg-sage-dark text-white">
          Add Product
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">Total products</p>
          <p className="text-2xl font-semibold">{total}</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">Active</p>
          <p className="text-2xl font-semibold text-sage">{activeCount}</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">Inactive</p>
          <p className="text-2xl font-semibold">{inactiveCount}</p>
        </div>
      </div>

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

      <div className="rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left font-medium">Image</th>
                <th className="px-4 py-3 text-left font-medium">Name</th>
                <th className="px-4 py-3 text-left font-medium">Category</th>
                <th className="px-4 py-3 text-left font-medium">Price</th>
                <th className="px-4 py-3 text-left font-medium">Tiers</th>
                <th className="px-4 py-3 text-left font-medium">Status</th>
                <th className="px-4 py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center">
                    <p className="text-muted-foreground">No products yet</p>
                    <Button
                      variant="outline"
                      className="mt-2"
                      onClick={openCreate}
                    >
                      Add your first product
                    </Button>
                  </td>
                </tr>
              ) : (
                filtered.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-muted/30">
                    <td className="px-4 py-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded bg-muted">
                        {product.imageUrl ? (
                          <Image
                            src={product.imageUrl}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="40px"
                          />
                        ) : (
                          <span className="flex h-full w-full items-center justify-center text-muted-foreground">
                            <CategoryIcon category={product.category} />
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-medium">{product.name}</span>
                      <br />
                      <span className="text-xs text-muted-foreground">
                        {product.slug}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={categoryPill(product.category)}>
                        {product.category}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {formatPrice(product.pricePerLbCents)}
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant="secondary">{product.tierCount}</Badge>
                    </td>
                    <td className="px-4 py-3">
                      <Switch
                        checked={product.isActive}
                        onCheckedChange={() =>
                          toggleActive.mutate({ id: product.id })
                        }
                        disabled={toggleActive.isPending}
                      />
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => openEdit(product)}
                        aria-label="Edit"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setDeleteId(product.id)}
                        aria-label="Delete"
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ProductDrawer
        mode={drawerMode}
        product={editingProduct}
        open={drawerOpen}
        onOpenChange={(open) => {
          setDrawerOpen(open);
          if (!open) setEditingProduct(undefined);
        }}
        onSuccess={() => utils.products.adminList.invalidate()}
      />

      <AlertDialog open={deleteId !== null} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete product?</AlertDialogTitle>
            <AlertDialogDescription>
              This cannot be undone. The product and its weight tiers will be removed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteId && deleteProduct.mutate({ id: deleteId })}
              disabled={deleteProduct.isPending}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
