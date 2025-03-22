'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-[#219ebc] rounded-md hover:bg-blue-700"
          >
            Sign In
          </button>
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <hr className="w-1/4 border-gray-400" />
              <p className="text-sm text-gray-600">or</p>
              <hr className="w-1/4 border-gray-400" />
            </div>
            <button
              type="button"
              className="w-full px-4 py-2 font-semibold text-white bg-red-600 rounded-md hover:bg-blue-300"
            >
              Sign In with Google
            </button>
            <button
              type="button"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-800 rounded-md hover:bg-blue-900"
            >
              Sign In with Facebook
            </button>
            <button
              type="button"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-400 rounded-md hover:bg-blue-500"
            >
              Sign In with Twitter
            </button>
          </div>
          <p className="text-sm text-gray-600 text-center">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="font-semibold text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
