import { Skeleton } from "@/components/ui/skeleton";

export default function CheckoutLoading() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-8 w-32" />
      <div className="grid gap-8 lg:grid-cols-[1fr,360px]">
        <div className="space-y-8">
          <section>
            <Skeleton className="mb-4 h-6 w-40" />
            <Skeleton className="h-24 w-full rounded-xl" />
            <Skeleton className="mt-4 h-10 w-full rounded-lg" />
          </section>
          <section>
            <Skeleton className="mb-2 h-4 w-40" />
            <Skeleton className="h-20 w-full rounded-lg" />
          </section>
          <section>
            <Skeleton className="mb-4 h-6 w-24" />
            <Skeleton className="h-32 w-full rounded-xl" />
          </section>
        </div>
        <div className="lg:sticky lg:top-24">
          <div className="rounded-xl border bg-card p-4">
            <Skeleton className="mb-4 h-5 w-28" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
            <Skeleton className="my-4 h-px w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="mt-4 h-10 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
