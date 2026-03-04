import { trpc } from "@/lib/trpc/server";
import { CartView } from "@/components/shop/cart-view";

export default async function CartPage() {
  const [cartItems, user] = await Promise.all([
    trpc.cart.get(),
    trpc.users.me(),
  ]);
  return <CartView initialItems={cartItems} user={user} />;
}
