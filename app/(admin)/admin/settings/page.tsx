import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { trpc } from "@/lib/trpc/server";
import { WaitlistModeSection } from "@/components/admin/waitlist-mode-section";

const notificationsLive =
  process.env.NOTIFICATIONS_LIVE === "true";

export default async function AdminSettingsPage() {
  const settings = await trpc.settings.getSiteSettings();
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-8">
      <header className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-foreground">Settings</h1>
      </header>

      <div className="space-y-6">
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="mb-4 font-serif text-lg font-semibold text-foreground">
            Store Settings
          </h2>
          <dl className="grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                Store name
              </dt>
              <dd className="mt-1 text-sm text-foreground">Brasena</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                Location
              </dt>
              <dd className="mt-1 text-sm text-foreground">The Bronx, NYC</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                Support email
              </dt>
              <dd className="mt-1 text-sm text-foreground">support@brasena.com</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                Currency
              </dt>
              <dd className="mt-1 text-sm text-foreground">USD</dd>
            </div>
          </dl>
        </section>

        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="mb-4 font-serif text-lg font-semibold text-foreground">
            Notifications
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">
                  Order confirmation emails
                </p>
                <p className="text-xs text-muted-foreground">
                  Send email to customer on new order
                </p>
              </div>
              <NotificationBadge live={notificationsLive} />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">
                  Delivery SMS alerts
                </p>
                <p className="text-xs text-muted-foreground">
                  Text customer when order is out for delivery or delivered
                </p>
              </div>
              <NotificationBadge live={notificationsLive} />
            </div>
          </div>
        </section>

        <WaitlistModeSection
          initialWaitlistEnabled={settings?.waitlistEnabled ?? true}
        />

        <section className="rounded-xl border border-red-900/50 bg-card p-6">
          <h2 className="mb-4 font-serif text-lg font-semibold text-red-400">
            Danger Zone
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-block">
                    <Button
                      variant="outline"
                      className="border-red-900/50 text-red-400 hover:bg-red-900/20"
                      disabled
                    >
                      Export all data
                    </Button>
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Coming soon</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </section>
      </div>
      </div>
    </div>
  );
}

function NotificationBadge({ live }: { live: boolean }) {
  if (live) {
    return (
      <span className="inline-flex items-center rounded-full bg-green-500/20 px-2.5 py-0.5 text-xs font-medium text-green-400">
        Live
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-yellow-500/20 px-2.5 py-0.5 text-xs font-medium text-yellow-400">
      Mock mode
    </span>
  );
}
