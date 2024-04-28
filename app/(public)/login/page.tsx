'use client';

import Link from 'next/link';
import { generateToken } from './_actions/generateToken';

function Login() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center ">
        <h1>Login</h1>
        <div>
          <form action={generateToken} className="flex flex-col">
            <label htmlFor="username">Username or Email</label>
            <input
              type="text"
              name="username"
              id="username"
              className="border-2 p-2"
            />

            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              className="border-2 p-2"
            />
            <button
              className="mt-3 border-2 bg-gray-300 p-2 hover:bg-gray-200"
              type="submit"
            >
              login
            </button>
          </form>
        </div>
        <div className="mt-2 text-sm">
          <p>don&appos;t have an account</p>
          <Link className="text-blue-500" href="/signup">
            sign in here.
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
