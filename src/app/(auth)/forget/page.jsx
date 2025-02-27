"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reset password for:", email);
    };

    return (
        <section className="w-full min-h-screen flex justify-center items-center relative">
            <div className="absolute w-full h-full -z-10 opacity-60">
                <Image src="/images/lady.webp" alt="Lady image" fill className="object-cover" />
            </div>
            <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">

                <Image src="/images/logo.png" alt="Lady image" width={100} height={80} />

                <h2 className="text-2xl font-serif my-3">Forgot Password</h2>
                <p className="mb-3 text-sm text-gray-600">
                    Forgot your password 😓? Don't worry we got you.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border px-4 py-2 rounded-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition"
                    >
                        Reset Password
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    <Link href="/sign-in" className="text-indigo-700 font-semibold">Back to Login</Link>
                </p>
            </div>
        </section>
    );
}
