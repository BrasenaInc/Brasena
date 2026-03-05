import {
  pgTable, pgEnum, text, uuid, boolean,
  timestamp, integer, index
} from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum('user_role', ['customer', 'admin']);
export const orderStatusEnum = pgEnum('order_status', [
  'pending', 'confirmed', 'out_for_delivery', 'delivered', 'cancelled'
]);
export const languageEnum = pgEnum('language', ['en', 'es']);
export const customerTypeEnum = pgEnum('customer_type', [
  'residential',
  'business'
]);
export const addressTypeEnum = pgEnum('address_type', [
  'residential',
  'business'
]);

export const users = pgTable('users', {
  id: uuid('id').primaryKey(),
  fullName: text('full_name'),
  email: text('email'),
  phone: text('phone'),
  role: userRoleEnum('role').default('customer').notNull(),
  language: languageEnum('language').default('en').notNull(),
  customerType: customerTypeEnum('customer_type').default('residential').notNull(),
  businessName: text('business_name'),
  ein: text('ein'),
  b2bDiscountPct: integer('b2b_discount_pct').default(15).notNull(),
  stripeCustomerId: text('stripe_customer_id'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const products = pgTable('products', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  category: text('category').notNull(),
  pricePerLbCents: integer('price_per_lb_cents').notNull(),
  imageUrl: text('image_url'),
  isActive: boolean('is_active').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
}, (t) => [index('products_slug_idx').on(t.slug)]);

export const productImages = pgTable('product_images', {
  id: uuid('id').primaryKey().defaultRandom(),
  productId: uuid('product_id').notNull().references(() => products.id, { onDelete: 'cascade' }),
  imageUrl: text('image_url').notNull(),
  displayOrder: integer('display_order').default(0).notNull(),
});

export const weightTiers = pgTable('weight_tiers', {
  id: uuid('id').primaryKey().defaultRandom(),
  productId: uuid('product_id').notNull().references(() => products.id, { onDelete: 'cascade' }),
  weightLbs: integer('weight_lbs').notNull(),
  label: text('label').notNull(),
  displayOrder: integer('display_order').default(0).notNull(),
});

export const addresses = pgTable('addresses', {
  id: uuid('id').primaryKey().defaultRandom(),
  customerId: uuid('customer_id').notNull().references(() => users.id, {
    onDelete: 'cascade',
  }),
  type: addressTypeEnum('type').notNull(),
  label: text('label').notNull(),
  street: text('street').notNull(),
  apt: text('apt'),
  city: text('city').notNull(),
  state: text('state').notNull(),
  zip: text('zip').notNull(),
  isDefault: boolean('is_default').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (t) => [index('addresses_customer_idx').on(t.customerId)]);

export const cartItems = pgTable('cart_items', {
  id: uuid('id').primaryKey().defaultRandom(),
  customerId: uuid('customer_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  productId: uuid('product_id').notNull().references(() => products.id, { onDelete: 'cascade' }),
  weightLbs: integer('weight_lbs').notNull(),
  quantity: integer('quantity').default(1).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (t) => [index('cart_items_customer_idx').on(t.customerId)]);

export const orders = pgTable('orders', {
  id: uuid('id').primaryKey().defaultRandom(),
  customerId: uuid('customer_id').notNull().references(() => users.id),
  status: orderStatusEnum('status').default('pending').notNull(),
  subtotalCents: integer('subtotal_cents').notNull(),
  deliveryFeeCents: integer('delivery_fee_cents').notNull(),
  totalCents: integer('total_cents').notNull(),
  deliveryStreet: text('delivery_street').notNull(),
  deliveryApt: text('delivery_apt'),
  deliveryCity: text('delivery_city').notNull(),
  deliveryState: text('delivery_state').notNull(),
  deliveryZip: text('delivery_zip').notNull(),
  deliveryNotes: text('delivery_notes'),
  stripePaymentIntentId: text('stripe_payment_intent_id'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
}, (t) => [index('orders_customer_idx').on(t.customerId)]);

export const orderItems = pgTable('order_items', {
  id: uuid('id').primaryKey().defaultRandom(),
  orderId: uuid('order_id').notNull().references(() => orders.id, { onDelete: 'cascade' }),
  productId: uuid('product_id').notNull().references(() => products.id),
  productName: text('product_name').notNull(),
  weightLbs: integer('weight_lbs').notNull(),
  quantity: integer('quantity').notNull(),
  pricePerLbCents: integer('price_per_lb_cents').notNull(),
  subtotalCents: integer('subtotal_cents').notNull(),
});

export const notificationLog = pgTable('notification_log', {
  id: uuid('id').primaryKey().defaultRandom(),
  orderId: uuid('order_id').notNull().references(() => orders.id, { onDelete: 'cascade' }),
  type: text('type').notNull(),
  status: text('status').notNull(),
  recipient: text('recipient').notNull(),
  providerId: text('provider_id'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const siteSettings = pgTable("site_settings", {
  id: uuid("id").primaryKey().defaultRandom(),
  waitlistEnabled: boolean("waitlist_enabled").default(true).notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  updatedBy: uuid("updated_by").references(() => users.id),
});

export const waitlistEntries = pgTable(
  "waitlist_entries",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    phone: text("phone").notNull(),
    birthday: text("birthday").notNull(),
    address: text("address").notNull(),
    type: customerTypeEnum("type").notNull(),
    surveyAnswers: text("survey_answers"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (t) => [index("waitlist_email_idx").on(t.email)]
);
