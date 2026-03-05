import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { router, publicProcedure } from "../trpc";
import { adminProcedure } from "../trpc";
import { db } from "@/db";
import { products, weightTiers, productImages } from "@/db/schema";
import { eq, desc, and, count, inArray } from "drizzle-orm";

function withImageUrls<T extends { id: string; imageUrl: string | null }>(
  items: T[],
  imagesByProductId: Map<string, string[]>
): (T & { imageUrls: string[] })[] {
  return items.map((item) => {
    const urls = imagesByProductId.get(item.id);
    const imageUrls =
      urls && urls.length > 0 ? urls : item.imageUrl ? [item.imageUrl] : [];
    return { ...item, imageUrls };
  });
}

export const productsRouter = router({
  // Public — customers and unauthenticated users can list products
  list: publicProcedure
    .input(z.object({
      category: z.string().optional(),
    }))
    .query(async ({ input }) => {
      const list = await db
        .select()
        .from(products)
        .where(
          input.category
            ? and(eq(products.isActive, true), eq(products.category, input.category))
            : eq(products.isActive, true)
        )
        .orderBy(desc(products.createdAt));
      if (list.length === 0) return [];
      const allImages = await db
        .select()
        .from(productImages)
        .where(inArray(productImages.productId, list.map((p) => p.id)))
        .orderBy(productImages.displayOrder);
      const imagesByProductId = new Map<string, string[]>();
      for (const img of allImages) {
        const arr = imagesByProductId.get(img.productId) ?? [];
        arr.push(img.imageUrl);
        imagesByProductId.set(img.productId, arr);
      }
      return withImageUrls(list, imagesByProductId);
    }),

  // Public — fetch single product with its weight tiers
  bySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const [product] = await db
        .select()
        .from(products)
        .where(and(eq(products.slug, input.slug), eq(products.isActive, true)));

      if (!product) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Product not found" });
      }

      const [tiers, images] = await Promise.all([
        db
          .select()
          .from(weightTiers)
          .where(eq(weightTiers.productId, product.id))
          .orderBy(weightTiers.displayOrder),
        db
          .select({ imageUrl: productImages.imageUrl })
          .from(productImages)
          .where(eq(productImages.productId, product.id))
          .orderBy(productImages.displayOrder),
      ]);
      const imageUrls =
        images.length > 0
          ? images.map((i) => i.imageUrl)
          : product.imageUrl
            ? [product.imageUrl]
            : [];
      return { ...product, weightTiers: tiers, imageUrls };
    }),

  // Admin — get one product with weight tiers (for edit form)
  getForEdit: adminProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ input }) => {
      const [product] = await db
        .select()
        .from(products)
        .where(eq(products.id, input.id));
      if (!product) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Product not found" });
      }
      const [tiers, images] = await Promise.all([
        db
          .select()
          .from(weightTiers)
          .where(eq(weightTiers.productId, product.id))
          .orderBy(weightTiers.displayOrder),
        db
          .select({ imageUrl: productImages.imageUrl })
          .from(productImages)
          .where(eq(productImages.productId, product.id))
          .orderBy(productImages.displayOrder),
      ]);
      const imageUrls =
        images.length > 0
          ? images.map((i) => i.imageUrl)
          : product.imageUrl
            ? [product.imageUrl]
            : [];
      return { ...product, weightTiers: tiers, imageUrls };
    }),

  // Admin — list ALL products including inactive ones (with tier count)
  adminList: adminProcedure.query(async () => {
    const productsList = await db.select().from(products).orderBy(desc(products.createdAt));
    if (productsList.length === 0) return [];
    const [tierCounts, allImages] = await Promise.all([
      db
        .select({ productId: weightTiers.productId, count: count(weightTiers.id) })
        .from(weightTiers)
        .groupBy(weightTiers.productId),
      db
        .select()
        .from(productImages)
        .where(inArray(productImages.productId, productsList.map((p) => p.id)))
        .orderBy(productImages.displayOrder),
    ]);
    const countMap = Object.fromEntries(tierCounts.map((r) => [r.productId, Number(r.count)]));
    const imagesByProductId = new Map<string, string[]>();
    for (const img of allImages) {
      const arr = imagesByProductId.get(img.productId) ?? [];
      arr.push(img.imageUrl);
      imagesByProductId.set(img.productId, arr);
    }
    return withImageUrls(productsList, imagesByProductId).map((p) => ({
      ...p,
      tierCount: countMap[p.id] ?? 0,
    }));
  }),

  // Admin — create product
  create: adminProcedure
    .input(z.object({
      name: z.string().min(1).trim(),
      slug: z.string().min(1).trim().toLowerCase(),
      description: z.string().optional(),
      category: z.enum(["beef", "chicken", "pork"]),
      pricePerLbCents: z.number().int().positive(),
      imageUrls: z.array(z.string().url()).optional(),
      isActive: z.boolean().default(true),
      weightTiers: z.array(z.object({
        weightLbs: z.number().int().positive(),
        label: z.string().min(1),
        displayOrder: z.number().int().default(0),
      })).min(1),
    }))
    .mutation(async ({ input }) => {
      const { weightTiers: tiers, imageUrls, ...rest } = input;
      const firstImage = imageUrls?.[0] ?? null;

      const [newProduct] = await db
        .insert(products)
        .values({ ...rest, imageUrl: firstImage })
        .returning();

      if (!newProduct) {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to create product" });
      }

      if (tiers.length > 0) {
        await db.insert(weightTiers).values(
          tiers.map((t) => ({ ...t, productId: newProduct.id }))
        );
      }
      if (imageUrls && imageUrls.length > 0) {
        await db.insert(productImages).values(
          imageUrls.map((imageUrl, i) => ({
            productId: newProduct.id,
            imageUrl,
            displayOrder: i,
          }))
        );
      }

      return newProduct;
    }),

  // Admin — update product
  update: adminProcedure
    .input(z.object({
      id: z.string().uuid(),
      name: z.string().min(1).trim().optional(),
      description: z.string().optional(),
      category: z.enum(["beef", "chicken", "pork"]).optional(),
      pricePerLbCents: z.number().int().positive().optional(),
      imageUrls: z.array(z.string().url()).optional(),
      isActive: z.boolean().optional(),
    }))
    .mutation(async ({ input }) => {
      const { id, imageUrls, ...data } = input;
      const [updated] = await db
        .update(products)
        .set({
          ...data,
          ...(imageUrls !== undefined && { imageUrl: imageUrls[0] ?? null }),
          updatedAt: new Date(),
        })
        .where(eq(products.id, id))
        .returning();

      if (!updated) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Product not found" });
      }
      if (imageUrls !== undefined) {
        await db.delete(productImages).where(eq(productImages.productId, id));
        if (imageUrls.length > 0) {
          await db.insert(productImages).values(
            imageUrls.map((imageUrl, i) => ({
              productId: id,
              imageUrl,
              displayOrder: i,
            }))
          );
        }
      }
      return updated;
    }),

  // Admin — toggle active status
  toggleActive: adminProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ input }) => {
      const [current] = await db
        .select()
        .from(products)
        .where(eq(products.id, input.id));

      if (!current) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Product not found" });
      }

      const [updated] = await db
        .update(products)
        .set({ isActive: !current.isActive, updatedAt: new Date() })
        .where(eq(products.id, input.id))
        .returning();

      return updated!;
    }),

  // Admin — replace weight tiers for a product (for edit form)
  replaceWeightTiers: adminProcedure
    .input(z.object({
      productId: z.string().uuid(),
      tiers: z.array(z.object({
        weightLbs: z.number().int().positive(),
        label: z.string().min(1),
        displayOrder: z.number().int().default(0),
      })).min(1),
    }))
    .mutation(async ({ input }) => {
      await db.delete(weightTiers).where(eq(weightTiers.productId, input.productId));
      await db.insert(weightTiers).values(
        input.tiers.map((t) => ({ ...t, productId: input.productId }))
      );
      return { success: true };
    }),

  // Admin — delete product
  delete: adminProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ input }) => {
      const [deleted] = await db
        .delete(products)
        .where(eq(products.id, input.id))
        .returning();

      if (!deleted) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Product not found" });
      }
      return { success: true };
    }),
});
