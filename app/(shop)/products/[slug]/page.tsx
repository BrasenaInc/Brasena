import { trpc } from "@/lib/trpc/server";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/shop/product-detail";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const product = await trpc.products.bySlug({ slug });
    return <ProductDetail product={product} />;
  } catch {
    notFound();
  }
}
