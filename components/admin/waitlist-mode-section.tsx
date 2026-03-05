"use client";

import { Clock, Zap } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { trpc } from "@/lib/trpc/client";

export function WaitlistModeSection({
  initialWaitlistEnabled,
}: {
  initialWaitlistEnabled: boolean;
}) {
  const utils = trpc.useUtils();
  const { data: settings } = trpc.settings.getSiteSettings.useQuery();
  const waitlistEnabled = settings?.waitlistEnabled ?? initialWaitlistEnabled;

  const setWaitlist = trpc.settings.setWaitlistEnabled.useMutation({
    onSuccess: () => {
      utils.settings.getSiteSettings.invalidate();
    },
  });

  return (
    <section className="rounded-xl border border-border bg-card p-6">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-serif text-lg font-semibold text-foreground">
          Waitlist
        </h2>
        <Switch
          checked={!!waitlistEnabled}
          onCheckedChange={(checked) =>
            setWaitlist.mutate({ enabled: checked })
          }
          disabled={setWaitlist.isPending}
          aria-label={waitlistEnabled ? "Waitlist mode on" : "Live mode on"}
        />
      </div>
      <p className="mb-6 text-sm text-muted-foreground">
        Control whether the public marketing page shows a waitlist or
        redirects to the live shop.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div
          className={`rounded-xl border-2 p-6 transition-colors ${
            waitlistEnabled
              ? "border-sage bg-sage/5"
              : "border-border bg-muted/20"
          }`}
        >
          <div
            className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${
              waitlistEnabled ? "bg-sage/20" : "bg-muted"
            }`}
          >
            <Clock
              className={`h-5 w-5 ${waitlistEnabled ? "text-sage" : "text-muted-foreground"}`}
            />
          </div>
          <h3 className="font-serif text-lg font-bold text-foreground">
            Waitlist Mode
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Visitors see the waitlist signup form
          </p>
          {waitlistEnabled && (
            <span className="mt-3 inline-block rounded-full bg-sage/20 px-2 py-0.5 text-xs font-medium text-sage">
              Active
            </span>
          )}
        </div>
        <div
          className={`rounded-xl border-2 p-6 transition-colors ${
            !waitlistEnabled
              ? "border-sage bg-sage/5"
              : "border-border bg-muted/20"
          }`}
        >
          <div
            className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${
              !waitlistEnabled ? "bg-sage/20" : "bg-muted"
            }`}
          >
            <Zap
              className={`h-5 w-5 ${!waitlistEnabled ? "text-sage" : "text-muted-foreground"}`}
            />
          </div>
          <h3 className="font-serif text-lg font-bold text-foreground">
            Live Mode
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Visitors go directly to the shop
          </p>
          {!waitlistEnabled && (
            <span className="mt-3 inline-block rounded-full bg-sage/20 px-2 py-0.5 text-xs font-medium text-sage">
              Active
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
