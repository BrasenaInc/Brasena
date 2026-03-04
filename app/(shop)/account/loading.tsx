import { Skeleton } from "@/components/ui/skeleton";

export default function AccountLoading() {
  return (
    <div className="mx-auto max-w-2xl space-y-10">
      <Skeleton className="h-8 w-32" />
      <section className="rounded-xl border bg-card p-6">
        <Skeleton className="mb-4 h-6 w-24" />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-9 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-9 w-full" />
          </div>
        </div>
        <Skeleton className="mt-4 h-10 w-28" />
      </section>
      <section className="rounded-xl border bg-card p-6">
        <div className="mb-4 flex justify-between">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-9 w-24" />
        </div>
        <div className="space-y-3">
          <Skeleton className="h-20 w-full rounded-lg" />
          <Skeleton className="h-20 w-full rounded-lg" />
        </div>
      </section>
      <section className="rounded-xl border bg-card p-6">
        <Skeleton className="mb-4 h-6 w-24" />
        <div className="flex gap-2">
          <Skeleton className="h-9 w-12" />
          <Skeleton className="h-9 w-12" />
        </div>
      </section>
      <Skeleton className="h-10 w-full rounded-lg" />
    </div>
  );
}
