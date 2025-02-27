"use client";
import { useState } from "react";
import { useParams } from "next/navigation";

const coursesData = [
    {
        id: 1,
        title: "React for Beginners",
        category: "Web Development",
        image: "https://cdn-front.freepik.com/images/ai/image-generator/gallery/pikaso-man-in-a-red-robe-standing-on-a-cliff.webp",
        description: "Learn the basics of React.js and build dynamic web applications.",
        instructor: "John Doe",
        modules: [
            { title: "Introduction", video: "intro.mp4", locked: false },
            { title: "Components & Props", video: "components.mp4", locked: true },
            { title: "State & Lifecycle", video: "state.mp4", locked: true },
            { title: "State & Lifecycle", video: "state.mp4", locked: true }
        ]
    },
];

export default function CourseDetails() {
    const { id } = useParams();
    const course = coursesData.find((item) => item.id === Number(id));
    const [isEnrolled, setIsEnrolled] = useState(false);

    if (!course) return <p className="text-center py-10">Course not found.</p>;

    const handleEnroll = () => setIsEnrolled(true);
    const handleAddToCart = () => alert("Course added to cart!");

    return (
        <section className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Video Player */}
                <div className="lg:col-span-2">
                    <video
                        controls
                        className="w-full rounded-lg shadow-lg"
                        src={isEnrolled ? course.modules[1].video : course.modules[0].video}
                    />
                    <button
                        onClick={handleAddToCart}
                        className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all w-full">
                        Add to Cart
                    </button>
                </div>
                {/* Course Info & Module List */}
                <div>
                    <h1 className="text-3xl font-bold">{course.title}</h1>
                    <p className="text-gray-600 my-4">{course.description}</p>
                    <p className="text-xl font-semibold text-green-600">Instructor: {course.instructor}</p>
                    {!isEnrolled && (
                        <button
                            onClick={handleEnroll}
                            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-all w-full">
                            Enroll Now
                        </button>
                    )}
                    {/* Module List */}
                    <div className="mt-6 p-4 border rounded-lg bg-gray-100">
                        <h2 className="text-xl font-bold mb-2">Course Modules</h2>
                        <ul>
                            {course.modules.map((module, index) => (
                                <li
                                    key={index}
                                    className={`p-2 rounded-lg ${module.locked && !isEnrolled ? 'bg-gray-300' : 'bg-white'} my-2`}
                                >
                                    {module.title} {module.locked && !isEnrolled && "(Locked)"}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
