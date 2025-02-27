"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBook, FaPlus } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";

export default function MentorCourses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch courses from API (replace with actual API call)
        const fetchCourses = async () => {
            setCourses([
                { id: 1, title: "React for Beginners", videos: 10 },
                { id: 2, title: "JavaScript Mastery", videos: 15 },
                { id: 3, title: "CSS Animations", videos: 7 },
            ]);
        };
        fetchCourses();
    }, []);

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    <FaBook size={24} /> My Courses
                </h1>
                <Link href="/mentor/courses/new" className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <FaPlus /> Add Course
                </Link>
            </div>

            {/* Courses List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map(({ id, title, videos }) => (
                    <div key={id} className="border p-4 rounded-lg shadow-md bg-gray-50">
                        <h2 className="text-lg font-semibold">{title}</h2>
                        <p className="text-sm text-gray-600">{videos} videos</p>
                        <Link href={`/mentor/courses/${id}`} className="mt-2 text-blue-600 flex items-center gap-1">
                            <MdVideoLibrary size={20} /> Manage Videos
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
