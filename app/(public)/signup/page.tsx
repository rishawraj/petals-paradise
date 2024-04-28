'use client';

import Link from 'next/link';
import { useFormStatus } from 'react-dom';
import { createUser } from './actions/createUser';

function SignUp() {
  const { pending } = useFormStatus();

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center ">
        <h1>Sign Up</h1>
        <div>
          <form action={createUser} className="flex flex-col">
            <label htmlFor="username">Username</label>
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

            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              className="border-2 p-2"
            />

            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="border-2 p-2"
            />

            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="border-2 p-2"
            />
            <label htmlFor="phone_number">Phone Number (optional)</label>
            <input
              type="text"
              name="phone_number"
              id="phone_number"
              className="border-2 p-2"
            />

            <button
              className="mt-3 border-2 bg-gray-300 p-2 hover:bg-gray-200"
              type="submit"
            >
              {pending ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>
        <p className="mt-2 text-sm">
          already have an account{' '}
          <Link className="text-blue-500" href="/login">
            login here
          </Link>
          .
        </p>
      </div>
    </>
  );
}

export default SignUp;
