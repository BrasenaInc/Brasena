import { db } from "@/db";
import { orders, orderItems, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getOrderForNotification(orderId: string) {
  const [order] = await db
    .select()
    .from(orders)
    .where(eq(orders.id, orderId));

  if (!order) return null;

  const [customer] = await db
    .select({
      email: users.email,
      phone: users.phone,
      fullName: users.fullName,
      language: users.language,
    })
    .from(users)
    .where(eq(users.id, order.customerId));

  const items = await db
    .select()
    .from(orderItems)
    .where(eq(orderItems.orderId, orderId));

  return {
    ...order,
    customer: customer
      ? {
          email: customer.email ?? null,
          phone: customer.phone ?? null,
          fullName: customer.fullName ?? null,
          language: (customer.language ?? "en") as string,
        }
      : {
          email: null,
          phone: null,
          fullName: null,
          language: "en",
        },
    items,
  };
}
