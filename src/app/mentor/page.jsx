"use client";
import { useState, useEffect } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaBook, FaUsers } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";

export default function MentorDashboard() {
    const [stats, setStats] = useState({
        totalCourses: 0,
        totalStudents: 0,
        totalEarnings: 0,
        totalBlogs: 0,
    });

    useEffect(() => {
        // Fetch dashboard statistics from API (replace with actual API call)
        const fetchStats = async () => {
            setStats({
                totalCourses: 12,
                totalStudents: 150,
                totalEarnings: 50000,
                totalBlogs: 8,
            });
        };
        fetchStats();
    }, []);

    const dashboardCards = [
        { title: "Total Courses", value: stats.totalCourses, icon: FaBook, color: "bg-blue-600" },
        { title: "Total Students", value: stats.totalStudents, icon: FaUsers, color: "bg-green-600" },
        { title: "Total Earnings", value: `₦${stats.totalEarnings.toLocaleString()}`, icon: TbCurrencyNaira, color: "bg-yellow-600" },
        { title: "Total Blogs", value: stats.totalBlogs, icon: CiEdit, color: "bg-purple-600" },
    ];

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <LuLayoutDashboard size={24} /> Mentor Dashboard
            </h1>

            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {dashboardCards.map(({ title, value, icon: Icon, color }, index) => (
                    <div key={index} className={`p-4 rounded-lg text-white ${color} shadow-md flex items-center gap-4`}>
                        <Icon size={30} />
                        <div>
                            <h3 className="text-lg">{title}</h3>
                            <p className="text-2xl font-bold">{value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity (Placeholder) */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
                <ul className="border rounded-lg p-4 bg-gray-50">
                    <li className="p-2 border-b">📌 You published a new course: <strong>React for Beginners</strong></li>
                    <li className="p-2 border-b">📌 3 new students enrolled in <strong>JavaScript Mastery</strong></li>
                    <li className="p-2">📌 You wrote a new blog post: <strong>How to Learn Programming Efficiently</strong></li>
                </ul>
            </div>
        </div>
    );
}
