"use client";
import { useState } from "react";
import Link from "next/link";

const coursesData = [
    { id: 1, title: "React for Beginners", category: "Web Development", image: "https://cdn-front.freepik.com/images/ai/image-generator/gallery/pikaso-man-in-a-red-robe-standing-on-a-cliff.webp" },
    { id: 2, title: "Advanced JavaScript", category: "Web Development", image: "https://cdn-front.freepik.com/images/ai/image-generator/gallery/pikaso-man-in-a-red-robe-standing-on-a-cliff.webp" },
    { id: 3, title: "Cybersecurity Basics", category: "Cybersecurity", image: "https://cdn-front.freepik.com/images/ai/image-generator/gallery/pikaso-man-in-a-red-robe-standing-on-a-cliff.webp" },
    { id: 4, title: "Machine Learning with Python", category: "Data Science", image: "https://cdn-front.freepik.com/images/ai/image-generator/gallery/pikaso-man-in-a-red-robe-standing-on-a-cliff.webp" },
    { id: 5, title: "Ethical Hacking", category: "Cybersecurity", image: "https://cdn-front.freepik.com/images/ai/image-generator/gallery/pikaso-man-in-a-red-robe-standing-on-a-cliff.webp" },
];

export default function Courses() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Web Development", "Cybersecurity", "Data Science"];

    // Filter courses based on search & category
    const filteredCourses = coursesData.filter((course) =>
        (selectedCategory === "All" || course.category === selectedCategory) &&
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="w-full min-h-screen px-6 py-10">
            {/* Search & Category Filters */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search courses..."
                    className="border px-4 py-2 rounded-lg w-full md:w-1/3 focus:outline-indigo-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/* Category Filter */}
                <select
                    className="mt-3 md:mt-0 border px-4 py-2 rounded-lg focus:outline-indigo-500"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((course) => (
                        <div key={course.id} className="bg-white shadow-lg rounded-lg p-4">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-40 object-cover rounded-md"
                            />
                            <h3 className="mt-3 font-bold text-lg">{course.title}</h3>
                            <p className="text-sm text-gray-600">{course.category}</p>
                            <Link href={`/courses/${course.id}`}>
                                <button className="mt-4 bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition">
                                    View Course
                                </button>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-600">No courses found.</p>
                )}
            </div>
        </section>
    );
}
