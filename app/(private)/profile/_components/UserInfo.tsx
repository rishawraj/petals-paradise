'use server';

import { db } from '@/drizzle/db';
import { UserTable } from '@/drizzle/schema';
import { decrypt } from '@/lib/session';
import { eq } from 'drizzle-orm';
import { cookies } from 'next/headers';

export async function UserInfo() {
  const session = (await cookies()).get('token')?.value;
  if (!session) {
    return <h1>Error: Login again</h1>;
  }
  const payload = await decrypt(session);
  const data = await db
    .select()
    .from(UserTable)
    .where(eq(UserTable.id, payload?.userId as string));

  return (
    <div className="p-5">
      <h1 className="text-2xl text-red-400">Profile</h1>
      <p>id: {data[0].id}</p>
      <p>username: {data[0].username}</p>
      <p>first name: {data[0].first_name}</p>
      <p>last name: {data[0].last_name}</p>
      <p>created at: {data[0].createdAt.toDateString()}</p>
    </div>
  );
}
