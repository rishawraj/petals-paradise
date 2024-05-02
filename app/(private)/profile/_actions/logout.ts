'use server';

import { deleteSession } from '@/lib/session';
import { redirect } from 'next/navigation';

export async function logout() {
  console.log('logout');
  deleteSession();
  redirect('/login');
}
