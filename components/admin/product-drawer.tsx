"use client";

import { useEffect, useState } from "react";
import { z } from "zod";
import Image from "next/image";
import { Loader2, Plus, X, ImagePlus } from "lucide-react";
import { trpc } from "@/lib/trpc/client";
import { createClient } from "@/lib/supabase/client";
import { uploadProductImage } from "@/lib/supabase/storage";
import { useAuth } from "@/components/auth/auth-provider";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import type { products } from "@/db/schema";
import type { InferSelectModel } from "drizzle-orm";

type Product = InferSelectModel<typeof products>;

const categoryOptions = [
  { value: "beef" as const, label: "Beef" },
  { value: "chicken" as const, label: "Chicken" },
  { value: "pork" as const, label: "Pork" },
];

const formSchema = z.object({
  name: z.string().min(1, "Name is required").trim(),
  slug: z.string().min(1, "Slug is required").trim().toLowerCase(),
  description: z.string().optional(),
  category: z.enum(["beef", "chicken", "pork"]),
  priceDollars: z.string().min(1, "Price is required"),
  imageUrl: z.string().nullable().optional(),
  isActive: z.boolean(),
  weightTiers: z
    .array(
      z.object({
        weightLbs: z.number().int().positive(),
        label: z.string().min(1, "Label required"),
        displayOrder: z.number().int().default(0),
      })
    )
    .min(1, "At least one weight tier is required"),
});

function slugFromName(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function FormSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      {children}
    </section>
  );
}

export function ProductDrawer({
  mode,
  product,
  open,
  onOpenChange,
  onSuccess,
}: {
  mode: "create" | "edit";
  product?: Product & { tierCount?: number };
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}) {
  const user = useAuth();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [uploadProgress, setUploadProgress] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<"beef" | "chicken" | "pork">("beef");
  const [priceDollars, setPriceDollars] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(true);
  const [weightTiers, setWeightTiers] = useState<
    { weightLbs: number; label: string; displayOrder: number }[]
  >([{ weightLbs: 5, label: "", displayOrder: 0 }]);

  const utils = trpc.useUtils();
  const { data: editData, isLoading: isLoadingEdit } =
    trpc.products.getForEdit.useQuery(
      { id: product?.id ?? "00000000-0000-0000-0000-000000000000" },
      { enabled: mode === "edit" && open && !!product?.id }
    );

  useEffect(() => {
    if (mode === "create" && open) {
      setName("");
      setSlug("");
      setDescription("");
      setCategory("beef");
      setPriceDollars("");
      setImageUrl(null);
      setIsActive(true);
      setWeightTiers([{ weightLbs: 5, label: "", displayOrder: 0 }]);
      setErrors({});
      setSuccessMessage(null);
    }
  }, [mode, open]);

  useEffect(() => {
    if (mode === "edit" && editData) {
      setName(editData.name);
      setSlug(editData.slug);
      setDescription(editData.description ?? "");
      setCategory(editData.category as "beef" | "chicken" | "pork");
      setPriceDollars((editData.pricePerLbCents / 100).toFixed(2));
      setImageUrl(editData.imageUrl ?? null);
      setIsActive(editData.isActive);
      setWeightTiers(
        editData.weightTiers.length > 0
          ? editData.weightTiers.map((t) => ({
              weightLbs: t.weightLbs,
              label: t.label,
              displayOrder: t.displayOrder,
            }))
          : [{ weightLbs: 5, label: "", displayOrder: 0 }]
      );
      setErrors({});
    }
  }, [mode, editData]);

  useEffect(() => {
    if (mode === "create" && name) {
      setSlug(slugFromName(name));
    }
  }, [mode, name]);

  const createMutation = trpc.products.create.useMutation({
    onSuccess: () => {
      utils.products.adminList.invalidate();
      setSuccessMessage("Product created.");
      onSuccess?.();
      setTimeout(() => {
        onOpenChange(false);
        setSuccessMessage(null);
      }, 1500);
    },
  });

  const updateMutation = trpc.products.update.useMutation({
    onSuccess: () => {
      utils.products.adminList.invalidate();
      setSuccessMessage("Product updated.");
      onSuccess?.();
      setTimeout(() => {
        onOpenChange(false);
        setSuccessMessage(null);
      }, 1500);
    },
  });

  const replaceTiersMutation = trpc.products.replaceWeightTiers.useMutation({
    onSuccess: () => utils.products.adminList.invalidate(),
  });

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user?.id) return;
    setUploadProgress("Uploading...");
    try {
      const supabase = createClient();
      const url = await uploadProductImage(supabase, file, user.id);
      setImageUrl(url);
      setErrors((prev) => ({ ...prev, imageUrl: "" }));
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        imageUrl: err instanceof Error ? err.message : "Upload failed",
      }));
    } finally {
      setUploadProgress(null);
    }
  };

  const addTier = () => {
    setWeightTiers((prev) => [
      ...prev,
      { weightLbs: 5, label: "", displayOrder: prev.length },
    ]);
  };

  const removeTier = (index: number) => {
    setWeightTiers((prev) => prev.filter((_, i) => i !== index));
  };

  const updateTier = (
    index: number,
    field: "weightLbs" | "label" | "displayOrder",
    value: number | string
  ) => {
    setWeightTiers((prev) =>
      prev.map((t, i) => (i === index ? { ...t, [field]: value } : t))
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const priceNum = parseFloat(priceDollars);
    if (Number.isNaN(priceNum) || priceNum <= 0) {
      setErrors((prev) => ({ ...prev, pricePerLbCents: "Enter a valid price" }));
      return;
    }
    const pricePerLbCents = Math.round(priceNum * 100);

    const parsed = formSchema.safeParse({
      name,
      slug,
      description: description || undefined,
      category,
      priceDollars: priceDollars.trim(),
      imageUrl,
      isActive,
      weightTiers: weightTiers.map((t, i) => ({
        weightLbs: t.weightLbs,
        label: t.label.trim(),
        displayOrder: i,
      })),
    });

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.flatten().fieldErrors &&
        Object.entries(parsed.error.flatten().fieldErrors).forEach(
          ([k, v]) => (fieldErrors[k] = Array.isArray(v) ? v[0] : v)
        );
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    const tiers = parsed.data.weightTiers;

    if (mode === "create") {
      await createMutation.mutateAsync({
        name: parsed.data.name,
        slug: parsed.data.slug,
        description: parsed.data.description,
        category: parsed.data.category,
        pricePerLbCents,
        imageUrl: parsed.data.imageUrl ?? undefined,
        isActive: parsed.data.isActive,
        weightTiers: tiers,
      });
    } else if (product) {
      await updateMutation.mutateAsync({
        id: product.id,
        name: parsed.data.name,
        description: parsed.data.description,
        category: parsed.data.category,
        pricePerLbCents,
        imageUrl: parsed.data.imageUrl ?? null,
        isActive: parsed.data.isActive,
      });
      await replaceTiersMutation.mutateAsync({
        productId: product.id,
        tiers,
      });
    }
  };

  const isPending =
    createMutation.isPending ||
    updateMutation.isPending ||
    replaceTiersMutation.isPending;

  if (mode === "edit" && open && product && isLoadingEdit && !editData) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent className="flex flex-col items-center justify-center gap-4 bg-background sm:max-w-xl">
          <Loader2 className="h-10 w-10 animate-spin text-sage" />
          <p className="text-sm text-muted-foreground">Loading product…</p>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col overflow-hidden bg-background p-0 sm:max-w-xl">
        <SheetHeader className="shrink-0 border-b px-6 py-4">
          <SheetTitle>
            {mode === "create" ? "Add product" : "Edit product"}
          </SheetTitle>
          {successMessage && (
            <p className="text-sm font-normal text-sage">{successMessage}</p>
          )}
        </SheetHeader>

        <form
          onSubmit={handleSubmit}
          className="flex min-h-0 flex-1 flex-col overflow-hidden"
        >
          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
            <div className="space-y-6">
              {/* Basics */}
              <FormSection title="Basics">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ribeye Steak"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="slug">URL slug</Label>
                    <Input
                      id="slug"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      placeholder="ribeye-steak"
                      className="font-mono text-sm"
                    />
                    {mode === "create" && (
                      <p className="text-xs text-muted-foreground">
                        Auto-generated from name. You can edit it.
                      </p>
                    )}
                    {errors.slug && (
                      <p className="mt-1 text-xs text-destructive">{errors.slug}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description (optional)</Label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={2}
                    className="w-full resize-none rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Brief description for the product page"
                  />
                </div>
              </FormSection>

              <Separator />

              {/* Category & pricing */}
              <FormSection title="Category & pricing">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      value={category}
                      onChange={(e) =>
                        setCategory(
                          e.target.value as "beef" | "chicken" | "pork"
                        )
                      }
                      className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {categoryOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Price per lb ($)</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      min="0"
                      value={priceDollars}
                      onChange={(e) => setPriceDollars(e.target.value)}
                      placeholder="12.99"
                    />
                    {errors.priceDollars && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.priceDollars}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <Checkbox
                    id="isActive"
                    checked={isActive}
                    onCheckedChange={(v) => setIsActive(v === true)}
                  />
                  <Label
                    htmlFor="isActive"
                    className="cursor-pointer font-normal text-muted-foreground"
                  >
                    Active — visible in shop
                  </Label>
                </div>
              </FormSection>

              <Separator />

              {/* Image */}
              <FormSection title="Image">
                {imageUrl ? (
                  <div className="space-y-2">
                    <div className="relative aspect-video w-full max-w-xs overflow-hidden rounded-lg border bg-muted">
                      <Image
                        src={imageUrl}
                        alt="Product"
                        fill
                        className="object-cover"
                        sizes="(max-width: 512px) 100vw, 320px"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          document.getElementById("product-image-input")?.click()
                        }
                        disabled={!!uploadProgress}
                      >
                        {uploadProgress ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <ImagePlus className="h-4 w-4" />
                        )}
                        {uploadProgress ?? "Change image"}
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setImageUrl(null)}
                      >
                        Remove
                      </Button>
                    </div>
                    <input
                      id="product-image-input"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={handleImageChange}
                    />
                  </div>
                ) : (
                  <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/30 py-8 transition-colors hover:border-muted-foreground/40 hover:bg-muted/50">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      disabled={!!uploadProgress}
                      className="sr-only"
                    />
                    {uploadProgress ? (
                      <Loader2 className="h-10 w-10 animate-spin text-muted-foreground" />
                    ) : (
                      <ImagePlus className="h-10 w-10 text-muted-foreground" />
                    )}
                    <span className="mt-2 text-sm font-medium text-muted-foreground">
                      {uploadProgress ?? "Click to upload image"}
                    </span>
                    <span className="mt-0.5 text-xs text-muted-foreground">
                      JPEG, PNG, WebP · max 5MB
                    </span>
                  </label>
                )}
                {errors.imageUrl && (
                  <p className="mt-1 text-xs text-destructive">{errors.imageUrl}</p>
                )}
              </FormSection>

              <Separator />

              {/* Weight tiers */}
              <FormSection title="Weight tiers">
                <p className="text-xs text-muted-foreground">
                  Define package sizes (e.g. 5 lb box, 10 lb case). At least one
                  is required.
                </p>
                <div className="space-y-2">
                  {weightTiers.map((tier, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 rounded-lg border bg-card p-3"
                    >
                      <div className="flex shrink-0 items-center gap-1">
                        <Input
                          type="number"
                          min={1}
                          value={tier.weightLbs || ""}
                          onChange={(e) =>
                            updateTier(
                              index,
                              "weightLbs",
                              parseInt(e.target.value, 10) || 0
                            )
                          }
                          placeholder="lbs"
                          className="w-16 text-center"
                        />
                        <span className="text-xs text-muted-foreground">lb</span>
                      </div>
                      <Input
                        value={tier.label}
                        onChange={(e) =>
                          updateTier(index, "label", e.target.value)
                        }
                        placeholder="e.g. 10 lb box"
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="shrink-0 text-muted-foreground hover:text-destructive"
                        onClick={() => removeTier(index)}
                        disabled={weightTiers.length <= 1}
                        aria-label="Remove tier"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addTier}
                  className="w-full"
                >
                  <Plus className="h-4 w-4" />
                  Add tier
                </Button>
                {errors.weightTiers && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.weightTiers}
                  </p>
                )}
              </FormSection>
            </div>
          </div>

          {/* Sticky footer */}
          <div className="shrink-0 border-t bg-background px-6 py-4">
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isPending}
                className="bg-sage text-white hover:bg-sage-dark"
              >
                {isPending && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {mode === "create" ? "Create product" : "Save changes"}
              </Button>
            </div>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}
