import { Skeleton } from "@/components/ui/skeleton";

function CartItemSkeleton() {
  return (
    <div className="flex items-center gap-4 rounded-xl border p-4">
      <Skeleton className="h-16 w-16 shrink-0 rounded-lg" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-3 w-24" />
      </div>
      <Skeleton className="h-9 w-28" />
      <Skeleton className="h-9 w-20" />
    </div>
  );
}

export default function CartLoading() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <CartItemSkeleton />
          <CartItemSkeleton />
          <CartItemSkeleton />
        </div>
        <div className="lg:sticky lg:top-24">
          <div className="rounded-xl border bg-card p-4">
            <Skeleton className="mb-4 h-5 w-28" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
            <Skeleton className="my-4 h-px w-full" />
            <Skeleton className="h-6 w-24" />
            <Skeleton className="mt-4 h-10 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
