"use client";
import Image from "next/image";

export default function About() {
    return (
        <section className="w-full min-h-screen px-6 py-10">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl font-bold text-indigo-700">About Us</h1>
                <p className="mt-4 text-gray-600">
                    Welcome to our platform! We are dedicated to providing high-quality online courses
                    that empower learners in Web Development, Cybersecurity, and Data Science.
                </p>
            </div>

            {/* Mission Section */}
            <div className="mt-12 max-w-4xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-indigo-700">Our Mission</h2>
                <p className="mt-3 text-gray-700">
                    Our mission is to make learning accessible to everyone by offering well-structured
                    and beginner-friendly courses. We aim to bridge the knowledge gap and help individuals
                    grow in their careers.
                </p>
            </div>

            {/* Team Section (Optional) */}
            <div className="mt-12 max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-indigo-700 text-center">Meet the Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    <div className="text-center p-4 bg-white shadow-lg rounded-lg">
                        <Image src="/team1.jpg" alt="Team Member" width={100} height={100} className="rounded-full mx-auto" />
                        <h3 className="mt-3 font-bold">John Doe</h3>
                        <p className="text-gray-600 text-sm">Founder & CEO</p>
                    </div>
                    <div className="text-center p-4 bg-white shadow-lg rounded-lg">
                        <Image src="/team2.jpg" alt="Team Member" width={100} height={100} className="rounded-full mx-auto" />
                        <h3 className="mt-3 font-bold">Jane Smith</h3>
                        <p className="text-gray-600 text-sm">Head of Content</p>
                    </div>
                    <div className="text-center p-4 bg-white shadow-lg rounded-lg">
                        <Image src="/team3.jpg" alt="Team Member" width={100} height={100} className="rounded-full mx-auto" />
                        <h3 className="mt-3 font-bold">Michael Lee</h3>
                        <p className="text-gray-600 text-sm">Cybersecurity Instructor</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
