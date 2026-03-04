import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { router, protectedProcedure, adminProcedure } from "../trpc";
import { db } from "@/db";
import {
  orders,
  orderItems,
  cartItems,
  products,
  users,
  addresses,
} from "@/db/schema";
import { eq, and, desc, inArray } from "drizzle-orm";

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
    const orderRows = await db
      .select()
      .from(orders)
      .where(eq(orders.customerId, ctx.user.id))
      .orderBy(desc(orders.createdAt));

    if (orderRows.length === 0) return [];

    const itemsRows = await db
      .select()
      .from(orderItems)
      .where(inArray(orderItems.orderId, orderRows.map((o) => o.id)));

    const itemsByOrderId = new Map<string, typeof itemsRows>();
    for (const item of itemsRows) {
      const list = itemsByOrderId.get(item.orderId) ?? [];
      list.push(item);
      itemsByOrderId.set(item.orderId, list);
    }

    return orderRows.map((order) => ({
      ...order,
      items: itemsByOrderId.get(order.id) ?? [],
    }));
  }),

  byId: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const [order] = await db
        .select()
        .from(orders)
        .where(eq(orders.id, input.id));

      if (!order) throw new TRPCError({ code: "NOT_FOUND" });
      if (order.customerId !== ctx.user.id) {
        throw new TRPCError({ code: "FORBIDDEN", message: "Not your order" });
      }

      const items = await db
        .select()
        .from(orderItems)
        .where(eq(orderItems.orderId, order.id));

      return { ...order, items };
    }),

  adminList: adminProcedure.query(async () => {
    const orderRows = await db
      .select({
        id: orders.id,
        status: orders.status,
        totalCents: orders.totalCents,
        createdAt: orders.createdAt,
        customerId: orders.customerId,
      })
      .from(orders)
      .orderBy(desc(orders.createdAt));

    if (orderRows.length === 0) return [];

    const [userRows, itemRows] = await Promise.all([
      db
        .select({
          id: users.id,
          fullName: users.fullName,
          email: users.email,
        })
        .from(users)
        .where(inArray(users.id, [...new Set(orderRows.map((o) => o.customerId))])),
      db
        .select({ orderId: orderItems.orderId })
        .from(orderItems)
        .where(inArray(orderItems.orderId, orderRows.map((o) => o.id))),
    ]);

    const usersById = new Map(userRows.map((u) => [u.id, u]));
    const countByOrderId = new Map<string, number>();
    for (const row of itemRows) {
      countByOrderId.set(row.orderId, (countByOrderId.get(row.orderId) ?? 0) + 1);
    }

    return orderRows.map((order) => {
      const u = usersById.get(order.customerId);
      return {
        id: order.id,
        status: order.status,
        totalCents: order.totalCents,
        createdAt: order.createdAt,
        customer: {
          name: u?.fullName ?? null,
          email: u?.email ?? null,
        },
        itemCount: countByOrderId.get(order.id) ?? 0,
      };
    });
  }),

  adminById: adminProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ input }) => {
      const [order] = await db
        .select()
        .from(orders)
        .where(eq(orders.id, input.id));

      if (!order) throw new TRPCError({ code: "NOT_FOUND" });

      const items = await db
        .select()
        .from(orderItems)
        .where(eq(orderItems.orderId, order.id));

      return { ...order, items };
    }),

  adminUpdateStatus: adminProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        status: z.enum([
          "pending",
          "confirmed",
          "out_for_delivery",
          "delivered",
          "cancelled",
        ]),
      })
    )
    .mutation(async ({ input }) => {
      const [updated] = await db
        .update(orders)
        .set({ status: input.status, updatedAt: new Date() })
        .where(eq(orders.id, input.id))
        .returning();

      if (!updated) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Order not found" });
      }
      return updated;
    }),
});
