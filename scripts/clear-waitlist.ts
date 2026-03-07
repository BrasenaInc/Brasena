/**
 * One-time script: removes all waitlist signups and raffle draw history from the database.
 * Run with: npx tsx scripts/clear-waitlist.ts
 * Requires DATABASE_URL in .env.local (or .env).
 *
 * Uses direct connection (port 5432). If your DATABASE_URL uses pooler port 6543,
 * it is switched to 5432 so the script can connect from your machine.
 */
import { config } from "dotenv";

config({ path: ".env.local" });
config();

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { eq } from "drizzle-orm";
import { waitlistEntries, eventsLog } from "../db/schema";

async function clearWaitlist() {
  let databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error("DATABASE_URL is not set. Add it to .env.local and run again.");
    process.exit(1);
  }
  // Use direct connection (5432) so scripts work from local; pooler (6543) often refuses.
  databaseUrl = databaseUrl.replace(":6543", ":5432");

  const client = postgres(databaseUrl, { prepare: false, max: 1 });
  const db = drizzle(client);

  console.log("Clearing waitlist and raffle data...");

  try {
    await db.delete(eventsLog).where(eq(eventsLog.eventName, "raffle_draw"));
    console.log("Raffle draw log cleared.");
  } catch (err: unknown) {
    const cause = (err as { cause?: { code?: string; message?: string } })?.cause;
    const code = cause?.code ?? (err as { code?: string }).code;
    const msg = (cause?.message ?? (err instanceof Error ? err.message : String(err))).toLowerCase();
    const isMissingTable = code === "42P01" || msg.includes("does not exist");
    if (isMissingTable) {
      console.log("events_log table not found (migration not run yet); skipping.");
    } else {
      throw err;
    }
  }

  await db.delete(waitlistEntries);
  console.log("All waitlist signups removed.");

  await client.end();
  console.log("Done. Waitlist and Growth dashboards will show no data until new signups come in.");
}

clearWaitlist().catch((e) => {
  console.error(e);
  process.exit(1);
});
