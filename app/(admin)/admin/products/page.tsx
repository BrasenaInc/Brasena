import { trpc } from "@/lib/trpc/server";
import { ProductsTable } from "@/components/admin/products-table";

export default async function AdminProductsPage() {
  const products = await trpc.products.adminList();
  return (
    <div className="p-6">
      <ProductsTable initialProducts={products} />
    </div>
  );
}
