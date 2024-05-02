import ProductCard from './_components/ProductCard';

function Products() {
  return (
    <>
      <div className="container p-10">
        <h1 className="mb-5 text-3xl">Products</h1>
        <div className="flex flex-wrap gap-2">
          <ProductCard title="a"></ProductCard>
          <ProductCard title="b"></ProductCard>
          <ProductCard title="c"></ProductCard>
          <ProductCard title="d"></ProductCard>
          <ProductCard title="d"></ProductCard>
          <ProductCard title="d"></ProductCard>
          <ProductCard title="d"></ProductCard>
          <ProductCard title="d"></ProductCard>
          <ProductCard title="d"></ProductCard>
          <ProductCard title="d"></ProductCard>
        </div>
      </div>
    </>
  );
}

export default Products;
