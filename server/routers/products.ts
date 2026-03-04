import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { router, publicProcedure } from "../trpc";
import { adminProcedure } from "../trpc";
import { db } from "@/db";
import { products, weightTiers } from "@/db/schema";
import { eq, desc, and, count } from "drizzle-orm";

export const productsRouter = router({
  // Public — customers and unauthenticated users can list products
  list: publicProcedure
    .input(z.object({
      category: z.string().optional(),
    }))
    .query(async ({ input }) => {
      const query = db
        .select()
        .from(products)
        .where(
          input.category
            ? and(eq(products.isActive, true), eq(products.category, input.category))
            : eq(products.isActive, true)
        )
        .orderBy(desc(products.createdAt));
      return query;
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

      const tiers = await db
        .select()
        .from(weightTiers)
        .where(eq(weightTiers.productId, product.id))
        .orderBy(weightTiers.displayOrder);

      return { ...product, weightTiers: tiers };
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
      const tiers = await db
        .select()
        .from(weightTiers)
        .where(eq(weightTiers.productId, product.id))
        .orderBy(weightTiers.displayOrder);
      return { ...product, weightTiers: tiers };
    }),

  // Admin — list ALL products including inactive ones (with tier count)
  adminList: adminProcedure.query(async () => {
    const productsList = await db.select().from(products).orderBy(desc(products.createdAt));
    const tierCounts = await db
      .select({ productId: weightTiers.productId, count: count(weightTiers.id) })
      .from(weightTiers)
      .groupBy(weightTiers.productId);
    const countMap = Object.fromEntries(tierCounts.map((r) => [r.productId, Number(r.count)]));
    return productsList.map((p) => ({ ...p, tierCount: countMap[p.id] ?? 0 }));
  }),

  // Admin — create product
  create: adminProcedure
    .input(z.object({
      name: z.string().min(1).trim(),
      slug: z.string().min(1).trim().toLowerCase(),
      description: z.string().optional(),
      category: z.enum(["beef", "chicken", "pork"]),
      pricePerLbCents: z.number().int().positive(),
      imageUrl: z.string().nullable().optional(),
      isActive: z.boolean().default(true),
      weightTiers: z.array(z.object({
        weightLbs: z.number().int().positive(),
        label: z.string().min(1),
        displayOrder: z.number().int().default(0),
      })).min(1),
    }))
    .mutation(async ({ input }) => {
      const { weightTiers: tiers, ...productData } = input;

      const [newProduct] = await db
        .insert(products)
        .values(productData)
        .returning();

      if (!newProduct) {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to create product" });
      }

      if (tiers.length > 0) {
        await db.insert(weightTiers).values(
          tiers.map((t) => ({ ...t, productId: newProduct.id }))
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
      imageUrl: z.string().nullable().optional(),
      isActive: z.boolean().optional(),
    }))
    .mutation(async ({ input }) => {
      const { id, ...data } = input;
      const [updated] = await db
        .update(products)
        .set({ ...data, updatedAt: new Date() })
        .where(eq(products.id, id))
        .returning();

      if (!updated) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Product not found" });
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
