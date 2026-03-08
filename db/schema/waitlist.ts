// Waitlist domain: customers, waitlist_entries, survey_responses, referrals, events_log. Re-exported from db/schema.ts.
import {
  pgTable,
  uuid,
  text,
  integer,
  boolean,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";

export const customers = pgTable("customers", {
  customerId: uuid("customer_id").primaryKey().defaultRandom(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name"),
  email: text("email").notNull().unique(),
  phone: text("phone").unique(),
  zipCode: text("zip_code"),
  householdSize: integer("household_size"),
  birthday: text("birthday"),
  address: text("address"),
  smsOptIn: boolean("sms_opt_in").default(false),
  emailOptIn: boolean("email_opt_in").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const waitlistEntries = pgTable("waitlist_entries", {
  entryId: uuid("entry_id").primaryKey().defaultRandom(),
  customerId: uuid("customer_id")
    .notNull()
    .references(() => customers.customerId),
  type: text("type").default("b2c"),
  raffleEntriesTotal: integer("raffle_entries_total").default(1),
  surveyCompleted: boolean("survey_completed").default(false),
  surveyAnswers: jsonb("survey_answers"),
  referralCode: text("referral_code").notNull().unique(),
  referredByCustomerId: uuid("referred_by_customer_id").references(
    () => customers.customerId
  ),
  source: text("source").default("direct"),
  name: text("name"),
  email: text("email"),
  phone: text("phone"),
  birthday: text("birthday"),
  address: text("address"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const surveyResponses = pgTable("survey_responses", {
  responseId: uuid("response_id").primaryKey().defaultRandom(),
  customerId: uuid("customer_id")
    .notNull()
    .references(() => customers.customerId),
  answers: jsonb("answers").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const referrals = pgTable("referrals", {
  referralId: uuid("referral_id").primaryKey().defaultRandom(),
  referrerCustomerId: uuid("referrer_customer_id")
    .notNull()
    .references(() => customers.customerId),
  referredCustomerId: uuid("referred_customer_id")
    .notNull()
    .references(() => customers.customerId),
  entriesAwarded: integer("entries_awarded").default(3),
  createdAt: timestamp("created_at").defaultNow(),
});

export const eventsLog = pgTable("events_log", {
  eventId: uuid("event_id").primaryKey().defaultRandom(),
  customerId: uuid("customer_id")
    .notNull()
    .references(() => customers.customerId),
  eventName: text("event_name").notNull(),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").defaultNow(),
});
