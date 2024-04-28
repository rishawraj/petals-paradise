'use server';

import { db } from '@/drizzle/db';
import { UserTable } from '@/drizzle/schema';
import bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';
import * as jose from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';

//* query db
//* todo verify password bcrypt
//* todo generate jwt

const userSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export async function generateToken(formData: FormData) {
  let success = false;
  try {
    const validatedData = userSchema.parse(
      Object.fromEntries(formData.entries())
    );

    const { username, password } = validatedData;

    const userData = await db
      .select()
      .from(UserTable)
      .where(eq(UserTable.username, username));

    const isCorrectPasswordCorrect = bcrypt.compareSync(
      password,
      userData[0].password_hash
    );

    if (isCorrectPasswordCorrect) {
      const token = await new jose.SignJWT({ userId: userData[0].id })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(new TextEncoder().encode('secret_key'));
      cookies().set('token', token);
    }
    success = true;
  } catch (error) {
    console.log(error);
  } finally {
    if (success) {
      redirect('/');
    }
  }
}
