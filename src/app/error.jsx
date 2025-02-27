"use client";
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">Oops! Page Not Found</h2>
            <p className="text-gray-600 mt-2">
                The page you’re looking for doesn’t exist or has been moved.
            </p>
            <Link href="/">
                <button className="mt-6 bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-800 transition-all">
                    Go Back Home
                </button>
            </Link>
        </section>
    );
}
