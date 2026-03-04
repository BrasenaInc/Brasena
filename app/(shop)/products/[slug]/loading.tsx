import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailLoading() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="aspect-video w-full rounded-2xl" />
      <div className="space-y-4">
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full max-w-md" />
        <Skeleton className="h-8 w-24" />
      </div>
      <div>
        <Skeleton className="mb-2 h-4 w-32" />
        <div className="grid grid-cols-2 gap-2">
          <Skeleton className="h-20 rounded-xl" />
          <Skeleton className="h-20 rounded-xl" />
        </div>
      </div>
      <div>
        <Skeleton className="mb-2 h-4 w-20" />
        <div className="flex gap-2">
          <Skeleton className="h-9 w-9 rounded-lg" />
          <Skeleton className="h-9 w-12" />
          <Skeleton className="h-9 w-9 rounded-lg" />
        </div>
      </div>
      <Skeleton className="h-24 w-full rounded-lg" />
      <Skeleton className="h-12 w-full rounded-lg" />
    </div>
  );
}
