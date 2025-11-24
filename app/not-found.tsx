"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-4">Page Not Found</p>
        <Link href="/" className="text-blue-500 hover:underline">
          Go back home
        </Link>
      </div>
    </div>
  );
}
