"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { trpc } from "@/lib/trpc/client";

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email")?.trim() ?? "";
  const [done, setDone] = useState<{ removed: boolean } | null>(null);
  const hasFired = useRef(false);

  const unsubscribe = trpc.waitlist.unsubscribe.useMutation({
    onSuccess: (data) => {
      setDone({ removed: data.removed });
    },
    onError: () => {
      setDone({ removed: false });
    },
  });

  useEffect(() => {
    if (!emailParam || hasFired.current) return;
    hasFired.current = true;
    unsubscribe.mutate({ email: emailParam });
    // Intentionally run once when emailParam is set
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailParam]);

  return (
    <div className="min-h-screen w-full bg-[#0C0F0C] flex flex-col items-center justify-center px-4">
      <Link href="/marketing" className="font-serif text-lg font-bold tracking-[0.2em] text-white absolute top-6 left-6">
        BRASENA
      </Link>
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        {!emailParam ? (
          <>
            <h1 className="font-serif text-2xl font-bold text-white">Unsubscribe</h1>
            <p className="mt-2 text-sm text-white/70">
              Add your email to the link to unsubscribe, or contact us to be removed from the waitlist.
            </p>
            <Link href="/marketing" className="mt-6 inline-block text-sm text-primary underline">
              Back to home
            </Link>
          </>
        ) : done === null ? (
          <>
            <p className="text-white/80">Removing you from the waitlist…</p>
          </>
        ) : (
          <>
            <h1 className="font-serif text-2xl font-bold text-white">
              {done.removed ? "You’re removed" : "Done"}
            </h1>
            <p className="mt-2 text-sm text-white/70">
              {done.removed
                ? "You’ve been removed from the Brasena waitlist. You won’t receive further waitlist emails."
                : "That email wasn’t on the waitlist, or it was already removed."}
            </p>
            <Link href="/marketing" className="mt-6 inline-block text-sm text-primary underline">
              Back to home
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full bg-[#0C0F0C] flex items-center justify-center">
          <p className="text-white/70">Loading…</p>
        </div>
      }
    >
      <UnsubscribeContent />
    </Suspense>
  );
}
