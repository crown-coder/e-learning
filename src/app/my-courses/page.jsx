"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MyCourses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Simulated student authentication
    const user = { role: "student", isAuthenticated: true };

    useEffect(() => {
        if (!user?.isAuthenticated) {
            router.push("/login");
        } else {
            async function fetchCourses() {
                await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API delay
                setCourses([
                    {
                        id: 1,
                        title: "React.js for Beginners",
                        completedLessons: 4,
                        totalLessons: 10
                    },
                    {
                        id: 2,
                        title: "Cybersecurity Basics",
                        completedLessons: 7,
                        totalLessons: 12
                    }
                ]);
                setLoading(false);
            }
            fetchCourses();
        }
    }, [router]);

    return (
        <div className="p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">My Courses</h1>

            {loading ? (
                <p>Loading courses...</p>
            ) : courses.length === 0 ? (
                <p>You are not enrolled in any courses.</p>
            ) : (
                <ul>
                    {courses.map(course => (
                        <li key={course.id} className="p-3 border-b flex justify-between items-center">
                            <div>
                                <p className="font-semibold">{course.title}</p>
                                <p className="text-sm text-gray-600">
                                    Progress: {course.completedLessons}/{course.totalLessons} lessons completed
                                </p>
                            </div>
                            <button
                                onClick={() => router.push(`/my-courses/${course.id}`)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                            >
                                View Course
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
