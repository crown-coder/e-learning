"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaBook, FaSave } from "react-icons/fa";

export default function NewCourse() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Simulating API call (replace with actual API request)
            await new Promise((resolve) => setTimeout(resolve, 1000));

            alert("Course created successfully!");
            router.push("/mentor/courses"); // Redirect back to courses page
        } catch (error) {
            alert("Error creating course. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold flex items-center gap-2 mb-4">
                <FaBook size={24} /> Create New Course
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">Course Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter course title"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold mb-1">Course Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter course description"
                        rows="4"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                    {loading ? "Saving..." : <><FaSave /> Save Course</>}
                </button>
            </form>
        </div>
    );
}
