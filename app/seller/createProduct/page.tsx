import NavBar from '@/app/_components/NavBar';
import { db } from '@/drizzle/db';
import { CategoryTable } from '@/drizzle/schema';

async function createProduct() {
  const categories = await db.select().from(CategoryTable);

  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-3xl font-bold">Seller / Create Product</h1>
        <div className="mx-auto mt-5 w-1/2">
          <form className="flex flex-col">
            <label htmlFor="username">Name</label>
            <input type="text" name="name" id="name" className="border-2 p-2" />

            <label htmlFor="password">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              className="border-2 p-2"
            />
            <label htmlFor="password">Quantity</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              className="border-2 p-2"
            />
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              id="image"
              className="border-2 p-2"
            />
            <p>Choose a Category</p>
            {categories.map((c) => (
              <div key={c.id}>{c.name}</div>
            ))}
            <button
              className="mt-3 border-2 bg-gray-300 p-2 hover:bg-gray-200"
              type="submit"
            >
              login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default createProduct;
