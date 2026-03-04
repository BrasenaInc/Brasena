import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { router, protectedProcedure } from "../trpc";
import { db } from "@/db";
import {
  orders,
  orderItems,
  cartItems,
  products,
  users,
  addresses,
} from "@/db/schema";
import { eq, and, desc } from "drizzle-orm";

export const ordersRouter = router({
  create: protectedProcedure
    .input(z.object({
      addressId: z.string().uuid(),
      paymentMethod: z.enum(["card", "invoice"]),
      deliveryNotes: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const [dbUser] = await db
        .select()
        .from(users)
        .where(eq(users.id, ctx.user.id));

      const cartResult = await db
        .select({ cartItem: cartItems, product: products })
        .from(cartItems)
        .innerJoin(products, eq(cartItems.productId, products.id))
        .where(eq(cartItems.customerId, ctx.user.id));

      if (cartResult.length === 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Cart is empty",
        });
      }

      const [address] = await db
        .select()
        .from(addresses)
        .where(
          and(
            eq(addresses.id, input.addressId),
            eq(addresses.customerId, ctx.user.id)
          )
        );

      if (!address) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Address not found",
        });
      }

      const discount =
        dbUser.customerType === "business" ? dbUser.b2bDiscountPct : 0;
      const minimumCents = dbUser.customerType === "business" ? 15000 : 2500;

      const lineItems = cartResult.map(({ cartItem, product }) => {
        const effectivePrice = Math.round(
          product.pricePerLbCents * (1 - discount / 100)
        );
        return {
          cartItemId: cartItem.id,
          productId: product.id,
          productName: product.name,
          weightLbs: cartItem.weightLbs,
          quantity: cartItem.quantity,
          pricePerLbCents: effectivePrice,
          subtotalCents:
            effectivePrice * cartItem.weightLbs * cartItem.quantity,
        };
      });

      const subtotalCents = lineItems.reduce(
        (sum, i) => sum + i.subtotalCents,
        0
      );

      if (subtotalCents < minimumCents) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `Minimum order is $${(minimumCents / 100).toFixed(2)}`,
        });
      }

      const deliveryFeeCents = subtotalCents >= 15000 ? 0 : 499;
      const totalCents = subtotalCents + deliveryFeeCents;

      const status = "pending";

      const [order] = await db
        .insert(orders)
        .values({
          customerId: ctx.user.id,
          status,
          subtotalCents,
          deliveryFeeCents: deliveryFeeCents,
          totalCents,
          deliveryStreet: address.street,
          deliveryApt: address.apt ?? null,
          deliveryCity: address.city,
          deliveryState: address.state,
          deliveryZip: address.zip,
          deliveryNotes: input.deliveryNotes ?? null,
        })
        .returning();

      await db.insert(orderItems).values(
        lineItems.map(({ cartItemId: _, ...item }) => ({
          ...item,
          orderId: order.id,
        }))
      );

      await db
        .delete(cartItems)
        .where(eq(cartItems.customerId, ctx.user.id));

      return {
        orderId: order.id,
        totalCents,
        paymentMethod: input.paymentMethod,
      };
    }),

  list: protectedProcedure.query(async ({ ctx }) => {
    return db
      .select()
      .from(orders)
      .where(eq(orders.customerId, ctx.user.id))
      .orderBy(desc(orders.createdAt));
  }),

  byId: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const [order] = await db
        .select()
        .from(orders)
        .where(
          and(
            eq(orders.id, input.id),
            eq(orders.customerId, ctx.user.id)
          )
        );

      if (!order) throw new TRPCError({ code: "NOT_FOUND" });

      const items = await db
        .select()
        .from(orderItems)
        .where(eq(orderItems.orderId, order.id));

      return { ...order, items };
    }),
});
