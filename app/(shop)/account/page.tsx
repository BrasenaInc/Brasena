import { trpc } from "@/lib/trpc/server";
import { AccountView } from "@/components/shop/account-view";

export default async function AccountPage() {
  const [user, userAddresses] = await Promise.all([
    trpc.users.me(),
    trpc.addresses.list(),
  ]);
  return <AccountView user={user} initialAddresses={userAddresses} />;
}
