import { Button } from '@/components/ui/button';

import { db } from '@/drizzle/db';

async function page() {
  const data = await db.query.UserTable.findFirst();
  return (
    <>
      <div className="min-h-screen bg-red-100">
        <Button>Hello</Button>
        <p>{data?.id}</p>
        <p>{data?.username}</p>
      </div>
    </>
  );
}

export default page;
