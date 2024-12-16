import { db } from '@/drizzle/db';
import { ProductTable } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';

export default async function Page({ params }: { params: { id: string } }) {
  const data = await db
    .select()
    .from(ProductTable)
    .where(eq(ProductTable.id, params.id));

  return (
    <div className="container mt-3 overflow-hidden">
      <h1 className="text-3xl font-semibold my-3">{data[0].name}</h1>
      <pre>{JSON.stringify(data[0], null, 2)}</pre>
    </div>
  );
  // return <div>My Post: {params.id}</div>;
}
