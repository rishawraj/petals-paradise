import { db } from '@/drizzle/db';
import ProductCard from './_components/ProductCard';

async function Products() {
  const getProducts = async () => {
    const data = await db.query.ProductTable.findMany();
    return data;
  };

  const data = await getProducts();

  return (
    <>
      <div className="container p-10">
        <h1 className="mb-5 text-3xl">Products</h1>
        <div className="flex gap-5">
          <h3>filter</h3>
          <h3>Category</h3>
        </div>

        <hr />
        <div className="mt-3 flex flex-wrap gap-2">
          {data.map((p) => (
            <ProductCard {...p} key={p.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
