import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from './lib/session';

// 1. Specify protected and public routes
const protectedRoutes = ['/profile'];
//todo change signin to signup
const publicRoutes = ['/login', '/signup'];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = cookies().get('token');
  // console.log(cookie?.value);

  if (isProtectedRoute && cookie == undefined) {
    return NextResponse.redirect(new URL('login', req.nextUrl));
  }

  const session = decrypt(cookie?.value);

  //todo check for session.userId

  // if (isProtectedRoute && !session?.userId) {
  //   return NextResponse.redirect(new URL('login', req.nextUrl));
  // }

  //todo redirect to profile if the user is authenticated.

  if (isPublicRoute && cookie && !req.nextUrl.pathname.startsWith('/profile')) {
    return NextResponse.redirect(new URL('/profile', req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
