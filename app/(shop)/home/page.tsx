import { trpc } from "@/lib/trpc/server";
import { HomeHero } from "@/components/shop/home-hero";
import { ProductGrid } from "@/components/shop/product-grid";

export default async function HomePage() {
  const products = await trpc.products.list({});
  return (
    <div className="space-y-8">
      <HomeHero />
      <ProductGrid initialProducts={products} />
    </div>
  );
}
