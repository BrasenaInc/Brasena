import { redirect } from "next/navigation";
import { trpc } from "@/lib/trpc/server";
import { MarketingPage } from "@/components/marketing/marketing-page";

export default async function Page() {
  const settings = await trpc.settings.getSiteSettings();
  const waitlistEnabled =
    typeof settings.waitlistEnabled === "boolean" ? settings.waitlistEnabled : true;
  if (!waitlistEnabled) redirect("/home");
  return <MarketingPage waitlistEnabled={waitlistEnabled} />;
}
