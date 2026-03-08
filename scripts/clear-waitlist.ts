/**
 * One-time script: removes all waitlist data (customers, entries, survey responses,
 * referrals, events). This clears all emails and phone numbers from the waitlist tables.
 *
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
import {
  waitlistCustomers,
  waitlistEntries,
  surveyResponses,
  referrals,
  eventsLog,
} from "../db/schema";

async function clearWaitlist() {
  let databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error(
      "DATABASE_URL is not set. Add it to .env.local and run again."
    );
    process.exit(1);
  }
  databaseUrl = databaseUrl.replace(":6543", ":5432");

  const client = postgres(databaseUrl, { prepare: false, max: 1 });
  const db = drizzle(client);

  console.log("Clearing all waitlist data (customers, entries, emails, phones)...");

  try {
    await db.delete(referrals);
    console.log("  referrals");
    await db.delete(surveyResponses);
    console.log("  survey_responses");
    await db.delete(eventsLog);
    console.log("  events_log");
    await db.delete(waitlistEntries);
    console.log("  waitlist_entries");
    await db.delete(waitlistCustomers);
    console.log("  customers");
  } catch (err: unknown) {
    const cause = (err as { cause?: { code?: string } })?.cause;
    const code = cause?.code ?? (err as { code?: string }).code;
    const msg = String(
      (err as { message?: string }).message ?? err
    ).toLowerCase();
    const isMissingTable = code === "42P01" || msg.includes("does not exist");
    if (isMissingTable) {
      console.log("One or more tables not found (migration not run yet).");
    } else {
      throw err;
    }
  }

  await client.end();
  console.log("Done. All waitlist emails and phone numbers have been removed.");
}

clearWaitlist().catch((e) => {
  console.error(e);
  process.exit(1);
});
