"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Loader2, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import type { waitlistEntries } from "@/db/schema";
import type { InferSelectModel } from "drizzle-orm";

type WaitlistEntry = InferSelectModel<typeof waitlistEntries>;

export function SettingsPageContent({
  initialWaitlistEnabled,
  initialEntries,
}: {
  initialWaitlistEnabled: boolean;
  initialEntries: WaitlistEntry[];
}) {
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const utils = trpc.useUtils();
  const { data: settings } = trpc.settings.getSiteSettings.useQuery();
  const waitlistEnabled = settings?.waitlistEnabled ?? initialWaitlistEnabled;
  const { data: entries = initialEntries } =
    trpc.settings.getWaitlistEntries.useQuery(undefined, {
      initialData: initialEntries,
    });

  const setWaitlist = trpc.settings.setWaitlistEnabled.useMutation({
    onSuccess: () => {
      utils.settings.getSiteSettings.invalidate();
    },
  });

  const deleteEntry = trpc.settings.deleteWaitlistEntry.useMutation({
    onSuccess: () => {
      utils.settings.getWaitlistEntries.invalidate();
      setDeleteId(null);
    },
  });

  function formatDate(d: Date) {
    return new Date(d).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Settings</h1>

      <section className="rounded-xl border border-border bg-card p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base font-semibold">Waitlist mode</h2>
            <p className="text-sm text-muted-foreground">
              When ON, the marketing page shows an inline waitlist form instead of
              sign-up links.
            </p>
          </div>
          <Switch
            checked={!!waitlistEnabled}
            onCheckedChange={(checked) =>
              setWaitlist.mutate({ enabled: checked })
            }
            disabled={setWaitlist.isPending}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-semibold">Waitlist entries</h2>
        {entries.length === 0 ? (
          <p className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
            No waitlist entries yet.
          </p>
        ) : (
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted">
                  <th className="px-4 py-3 text-left font-medium">Email</th>
                  <th className="px-4 py-3 text-left font-medium">Name</th>
                  <th className="px-4 py-3 text-left font-medium">Type</th>
                  <th className="px-4 py-3 text-left font-medium">Joined</th>
                  <th className="px-4 py-3 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry) => (
                  <tr
                    key={entry.id}
                    className="border-b border-border bg-card last:border-b-0 hover:bg-accent"
                  >
                    <td className="px-4 py-3">{entry.email}</td>
                    <td className="px-4 py-3">{entry.name}</td>
                    <td className="px-4 py-3 capitalize">{entry.type}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {formatDate(entry.createdAt)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <AlertDialog
                        open={deleteId === entry.id}
                        onOpenChange={(open) =>
                          setDeleteId(open ? entry.id : null)
                        }
                      >
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Remove entry?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Remove {entry.email} from the waitlist? This
                              cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              onClick={() =>
                                deleteEntry.mutate({ id: entry.id })
                              }
                              disabled={deleteEntry.isPending}
                            >
                              {deleteEntry.isPending ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                              ) : (
                                "Remove"
                              )}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
