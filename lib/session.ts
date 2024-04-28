import { jwtVerify } from 'jose';

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(
      session,
      new TextEncoder().encode('secret_key')
    );
    return payload;
  } catch (error) {
    console.log('Failed to verify session');
  }
}
