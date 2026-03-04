import { config } from "dotenv";

config({ path: ".env.local" });
config(); // fallback to .env

import { inArray } from "drizzle-orm";
import { products, weightTiers } from "../db/schema";

async function seed() {
  const { db } = await import("../db");
  const toCents = (dollars: number) => Math.round(dollars * 100);

  const productRows = [
    {
      name: "Ribeye Steak",
      slug: "ribeye-steak",
      description: "Premium ribeye steak, perfect for grilling.",
      category: "beef",
      pricePerLbCents: toCents(18.99),
      isActive: true,
      weightTiers: [
        { weightLbs: 5, label: "5lb box", displayOrder: 0 },
        { weightLbs: 10, label: "10lb box", displayOrder: 1 },
        { weightLbs: 20, label: "20lb case", displayOrder: 2 },
      ],
    },
    {
      name: "Ground Beef 80/20",
      slug: "ground-beef-8020",
      description: "80/20 ground beef, ideal for burgers and tacos.",
      category: "beef",
      pricePerLbCents: toCents(6.99),
      isActive: true,
      weightTiers: [
        { weightLbs: 5, label: "5lb pack", displayOrder: 0 },
        { weightLbs: 10, label: "10lb pack", displayOrder: 1 },
        { weightLbs: 25, label: "25lb case", displayOrder: 2 },
      ],
    },
    {
      name: "NY Strip Steak",
      slug: "ny-strip-steak",
      description: "New York strip steak, restaurant quality.",
      category: "beef",
      pricePerLbCents: toCents(16.99),
      isActive: true,
      weightTiers: [
        { weightLbs: 5, label: "5lb box", displayOrder: 0 },
        { weightLbs: 10, label: "10lb box", displayOrder: 1 },
      ],
    },
    {
      name: "Chicken Breast",
      slug: "chicken-breast",
      description: "Boneless skinless chicken breast.",
      category: "chicken",
      pricePerLbCents: toCents(4.99),
      isActive: true,
      weightTiers: [
        { weightLbs: 10, label: "10lb bag", displayOrder: 0 },
        { weightLbs: 20, label: "20lb case", displayOrder: 1 },
        { weightLbs: 40, label: "40lb case", displayOrder: 2 },
      ],
    },
    {
      name: "Whole Chicken",
      slug: "whole-chicken",
      description: "Whole chicken, great for roasting.",
      category: "chicken",
      pricePerLbCents: toCents(3.49),
      isActive: true,
      weightTiers: [
        { weightLbs: 8, label: "2-pack (~8lb)", displayOrder: 0 },
        { weightLbs: 16, label: "4-pack (~16lb)", displayOrder: 1 },
      ],
    },
    {
      name: "Pork Shoulder",
      slug: "pork-shoulder",
      description: "Pork shoulder for pulled pork and slow cooking.",
      category: "pork",
      pricePerLbCents: toCents(5.99),
      isActive: true,
      weightTiers: [
        { weightLbs: 8, label: "8lb", displayOrder: 0 },
        { weightLbs: 16, label: "16lb", displayOrder: 1 },
        { weightLbs: 25, label: "25lb case", displayOrder: 2 },
      ],
    },
    {
      name: "Baby Back Ribs",
      slug: "baby-back-ribs",
      description: "Baby back ribs, fall-off-the-bone tender.",
      category: "pork",
      pricePerLbCents: toCents(8.99),
      isActive: true,
      weightTiers: [
        { weightLbs: 3, label: "3lb rack", displayOrder: 0 },
        { weightLbs: 6, label: "6lb (2 racks)", displayOrder: 1 },
        { weightLbs: 12, label: "12lb (4 racks)", displayOrder: 2 },
      ],
    },
  ];

  const existingSlugs = await db
    .select({ slug: products.slug })
    .from(products)
    .where(inArray(products.slug, productRows.map((r) => r.slug)));
  const existingSet = new Set(existingSlugs.map((r) => r.slug));

  let inserted = 0;
  for (const row of productRows) {
    if (existingSet.has(row.slug)) {
      console.log("Skip (exists):", row.slug);
      continue;
    }
    const { weightTiers: tiers, ...productData } = row;
    const [newProduct] = await db.insert(products).values(productData).returning();
    if (newProduct && tiers.length > 0) {
      await db.insert(weightTiers).values(
        tiers.map((t) => ({ ...t, productId: newProduct.id }))
      );
    }
    inserted++;
  }

  console.log("Seeded", inserted, "new products (skipped", productRows.length - inserted, "existing).");
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
