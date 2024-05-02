'use server';

import { db } from '@/drizzle/db';
import { UserTable } from '@/drizzle/schema';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const createUserSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(6).max(50),
  email: z.string().email(),
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  // phone_number: z.optional(z.string().min(4, 'Please enter a valid number')),
  phone_number: z
    .string()
    .min(4, 'invalid number')
    .optional()
    .or(z.literal('')),
});

export async function createUser(formData: FormData) {
  let success = false;
  try {
    const validatedData = createUserSchema.parse(
      Object.fromEntries(formData.entries())
    );

    const { username, password, email, first_name, last_name, phone_number } =
      validatedData;

    const password_hash = bcrypt.hashSync(password, 10);

    await db.insert(UserTable).values({
      username,
      password_hash,
      email,
      first_name,
      last_name,
      phone_number,
    });

    success = true;

    redirect('/');
  } catch (error) {
    console.error('Validation Error: ', error);
  } finally {
    if (success) {
      redirect('/login');
    }
  }
}
