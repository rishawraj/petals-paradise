import { db } from '@/drizzle/db';

async function sandbox() {
  async function getProducts() {
    const data = await db.query.ProductTable.findFirst();
    console.log(data);
  }

  getProducts();

  return <div>sandbox</div>;
}

export default sandbox;

// seller
// 1618a02e-4ed5-4c5e-afd3-705b77638d31

// category
// f7f60ff3-1edb-4455-b8ac-8baffb125a59
