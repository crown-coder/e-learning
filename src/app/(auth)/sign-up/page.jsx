"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SignUpPage() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registering:", formData);
    };

    return (
        <section className="w-full min-h-screen flex justify-center items-center relative">
            <div className="absolute w-full h-full -z-10 opacity-60">
                <Image src="/images/lady.webp" alt="Lady image" fill className="object-cover" />
            </div>
            <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">

                <Image src="/images/logo.png" alt="Lady image" width={100} height={80} />

                <h2 className="text-2xl font-serif my-3">Register</h2>
                <p className="mb-3 text-sm text-gray-600">
                    Sign up as a mentor to create and sell courses, write blogs, and help students learn from your expertise.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="w-full border px-4 py-2 rounded-lg"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full border px-4 py-2 rounded-lg"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full border px-4 py-2 rounded-lg"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition"
                    >
                        Register
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Already have an account? <Link href="/sign-in" className="text-indigo-700 font-semibold">Login</Link>
                </p>
            </div>
        </section>
    );
}
