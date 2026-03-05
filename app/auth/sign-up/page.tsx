import Link from "next/link";
import { trpc } from "@/lib/trpc/server";
import { SignupFlow } from "@/components/auth/signup-flow";
import { Button } from "@/components/ui/button";

export default async function Page() {
  const settings = await trpc.settings.getSiteSettings();
  const waitlistEnabled =
    typeof settings.waitlistEnabled === "boolean" ? settings.waitlistEnabled : true;

  if (waitlistEnabled) {
    return (
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-lg">
          <h1 className="font-serif text-xl font-semibold text-foreground">
            Sign up for the waitlist instead
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            We&apos;re not live yet. Join the waitlist on our homepage to get early access
            when we launch.
          </p>
          <Button asChild className="mt-6">
            <Link href="/marketing#hero">Go to waitlist</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <SignupFlow />
    </div>
  );
}
