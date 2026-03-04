import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { router, protectedProcedure } from "../trpc";
import { db } from "@/db";
import { cartItems, products, users } from "@/db/schema";
import { eq, and } from "drizzle-orm";

export const cartRouter = router({
  get: protectedProcedure.query(async ({ ctx }) => {
    const [dbUser] = await db
      .select()
      .from(users)
      .where(eq(users.id, ctx.user.id));

    const items = await db
      .select({
        cartItem: cartItems,
        product: products,
      })
      .from(cartItems)
      .innerJoin(products, eq(cartItems.productId, products.id))
      .where(eq(cartItems.customerId, ctx.user.id));

    const discount =
      dbUser.customerType === "business" ? dbUser.b2bDiscountPct : 0;

    return items.map(({ cartItem, product }) => {
      const basePrice = product.pricePerLbCents;
      const effectivePrice = Math.round(basePrice * (1 - discount / 100));
      const subtotalCents =
        effectivePrice * cartItem.weightLbs * cartItem.quantity;
      return {
        ...cartItem,
        product,
        effectivePricePerLbCents: effectivePrice,
        subtotalCents,
        isWholesale: discount > 0,
      };
    });
  }),

  addItem: protectedProcedure
    .input(z.object({
      productId: z.string().uuid(),
      weightLbs: z.number().int().positive(),
      quantity: z.number().int().min(1).max(10),
    }))
    .mutation(async ({ ctx, input }) => {
      const [existing] = await db
        .select()
        .from(cartItems)
        .where(
          and(
            eq(cartItems.customerId, ctx.user.id),
            eq(cartItems.productId, input.productId),
            eq(cartItems.weightLbs, input.weightLbs)
          )
        );

      if (existing) {
        const newQty = Math.min(existing.quantity + input.quantity, 10);
        const [updated] = await db
          .update(cartItems)
          .set({ quantity: newQty })
          .where(eq(cartItems.id, existing.id))
          .returning();
        return updated;
      }

      const [created] = await db
        .insert(cartItems)
        .values({ ...input, customerId: ctx.user.id })
        .returning();
      return created;
    }),

  updateQuantity: protectedProcedure
    .input(z.object({
      id: z.string().uuid(),
      quantity: z.number().int().min(1).max(10),
    }))
    .mutation(async ({ ctx, input }) => {
      const [updated] = await db
        .update(cartItems)
        .set({ quantity: input.quantity })
        .where(
          and(
            eq(cartItems.id, input.id),
            eq(cartItems.customerId, ctx.user.id)
          )
        )
        .returning();
      if (!updated) throw new TRPCError({ code: "NOT_FOUND" });
      return updated;
    }),

  removeItem: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await db
        .delete(cartItems)
        .where(
          and(
            eq(cartItems.id, input.id),
            eq(cartItems.customerId, ctx.user.id)
          )
        );
      return { success: true };
    }),

  clear: protectedProcedure.mutation(async ({ ctx }) => {
    await db
      .delete(cartItems)
      .where(eq(cartItems.customerId, ctx.user.id));
    return { success: true };
  }),
});
