import { trpc } from "@/lib/trpc/server";
import { SettingsPageContent } from "@/components/admin/settings-page-content";

export default async function AdminSettingsPage() {
  const [settings, entries] = await Promise.all([
    trpc.settings.getSiteSettings(),
    trpc.settings.getWaitlistEntries(),
  ]);
  const waitlistEnabled =
    typeof settings.waitlistEnabled === "boolean" ? settings.waitlistEnabled : true;

  return (
    <div className="p-6">
      <SettingsPageContent
        initialWaitlistEnabled={waitlistEnabled}
        initialEntries={entries}
      />
    </div>
  );
}
