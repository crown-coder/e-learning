"use client";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";

export default function MentorStudents() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const studentsPerPage = 5;

    useEffect(() => {
        async function fetchStudents() {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay

            setStudents([
                { id: 1, name: "Alice Johnson", email: "alice@example.com", course: "Web Development", date: "2025-02-10" },
                { id: 2, name: "John Smith", email: "john@example.com", course: "Cybersecurity", date: "2025-02-08" },
                { id: 3, name: "Emma Williams", email: "emma@example.com", course: "Machine Learning", date: "2025-02-05" },
                { id: 4, name: "Michael Brown", email: "michael@example.com", course: "Data Science", date: "2025-02-02" },
                { id: 5, name: "David Wilson", email: "david@example.com", course: "Python Programming", date: "2025-01-28" },
                { id: 6, name: "Sophia Miller", email: "sophia@example.com", course: "React.js", date: "2025-01-25" },
            ]);

            setLoading(false);
        }

        fetchStudents();
    }, []);

    // Filtering students based on search query
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.course.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Pagination logic
    const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
    const paginatedStudents = filteredStudents.slice((currentPage - 1) * studentsPerPage, currentPage * studentsPerPage);

    return (
        <div className="p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">My Students</h1>

            {/* Search Bar */}
            <div className="mb-4 flex items-center border rounded-lg overflow-hidden">
                <input
                    type="text"
                    placeholder="Search students by name or course..."
                    className="w-full p-2 outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="px-4 bg-gray-200">
                    <FaSearch />
                </button>
            </div>

            {/* Students Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 border">Date Enrolled</th>
                            <th className="p-2 border">Student Name</th>
                            <th className="p-2 border">Email</th>
                            <th className="p-2 border">Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td>
                            </tr>
                        ) : paginatedStudents.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="p-4 text-center text-gray-500">No students found.</td>
                            </tr>
                        ) : (
                            paginatedStudents.map((student) => (
                                <tr key={student.id} className="border text-center">
                                    <td className="p-2 border">{student.date}</td>
                                    <td className="p-2 border">{student.name}</td>
                                    <td className="p-2 border">{student.email}</td>
                                    <td className="p-2 border">{student.course}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-4 mt-4">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className="p-2 border rounded-lg"
                    >
                        <FaArrowLeft />
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="p-2 border rounded-lg"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            )}
        </div>
    );
}
