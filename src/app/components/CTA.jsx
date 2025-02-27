"use client"; // Ensure this runs on the client side
import { useRouter } from "next/navigation";

export default function CTA() {
    const router = useRouter();

    return (
        <section className="w-full py-20 bg-gradient-to-r from-blue-100 to-blue-200 text-center relative">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-opacity-40 bg-[url('/images/cta-pattern.svg')] mix-blend-overlay"></div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-bold leading-snug text-gray-800">
                    Become a Mentor & Share Your Knowledge!
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Sign up as a mentor to create and sell courses, write blogs, and help students learn from your expertise.
                </p>

                {/* CTA Button */}
                <button
                    onClick={() => router.push("/sign-up")}
                    className="mt-6 px-8 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-400 transition-all"
                >
                    Sign Up as a Mentor
                </button>
            </div>
        </section>
    );
}
