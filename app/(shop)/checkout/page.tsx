import { redirect } from "next/navigation";
import { trpc } from "@/lib/trpc/server";
import { CheckoutView } from "@/components/shop/checkout-view";

export default async function CheckoutPage() {
  const [cart, user, savedAddresses] = await Promise.all([
    trpc.cart.get(),
    trpc.users.me(),
    trpc.addresses.list(),
  ]);

  if (cart.length === 0) redirect("/cart");

  return (
    <CheckoutView
      initialCart={cart}
      user={user}
      initialAddresses={savedAddresses}
    />
  );
}
