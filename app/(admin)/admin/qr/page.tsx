"use client";

import { Grid3X3 } from "lucide-react";

export default function AdminQRPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted text-muted-foreground">
        <Grid3X3 className="h-7 w-7" />
      </div>
      <h1 className="mt-4 font-serif text-xl font-semibold text-foreground">
        QR Codes
      </h1>
      <p className="mt-2 max-w-sm text-center text-sm text-muted-foreground">
        This feature is coming in a future sprint. You’ll be able to generate and
        download QR codes for waitlist and marketing links here.
      </p>
    </div>
  );
}
