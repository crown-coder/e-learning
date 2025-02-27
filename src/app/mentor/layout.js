"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { GiTwinShell } from "react-icons/gi";
import { IoMdLogOut } from "react-icons/io";


import { LuLayoutDashboard } from "react-icons/lu";
import { FaBook } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { TbCurrencyNaira } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
export default function MentorLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    // Close sidebar if screen is resized beyond md
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setSidebarOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Sidebar Links
    const navLinks = [
        { name: "Dashboard", path: "/mentor", icon: LuLayoutDashboard },
        { name: "Courses", path: "/mentor/courses", icon: FaBook },
        { name: "Students", path: "/mentor/students", icon: PiStudentFill },
        { name: "Blog", path: "/mentor/blog", icon: CiEdit },
        // { name: "Manage Blogs", path: "/admin/blogs" },
        { name: "Earnings", path: "/mentor/earnings", icon: TbCurrencyNaira },
        { name: "Settings", path: "/mentor/settings", icon: IoIosSettings },

    ];

    return (
        <div className="flex gap-2 h-screen bg-gray-100 p-2">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 w-64 bg-gradient-to-tr from-blue-900 to-blue-950 shadow-lg transform rounded-3xl ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform md:translate-x-0 md:static md:w-64 p-5`}>
                <div className="p-5 flex justify-between items-center">
                    {/* Logo & Brand */}
                    <div className="flex items-center gap-2 font-bold">
                        <Link href="/" className="p-2 bg-indigo-700 rounded-md text-white">
                            <GiTwinShell size={25} />
                        </Link>
                        <h2 className="text-xl text-white">UniqueShelves</h2>
                    </div>
                    <button
                        className="md:hidden p-2 rounded-full hover:bg-gray-200"
                        onClick={() => setSidebarOpen(false)}
                        aria-label="Close Sidebar"
                    >
                        <IoClose size={24} />
                    </button>
                </div>
                <nav className="mt-5">
                    <ul>
                        {navLinks.map(({ name, path, icon: Icon }) => (
                            <li key={path} className={`text-sm rounded-lg p-2 hover:bg-blue-900 ${pathname === path ? "bg-blue-900 border-2 border-blue-950 font-semibold text-gray-200" : "text-gray-400"}`}>
                                <Link href={path} className="flex items-center gap-2">
                                    <span>
                                        <Icon />
                                    </span>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Bar */}
                <header className="flex items-center justify-between p-4 md:px-6 rounded-xl">
                    <button
                        className="md:hidden p-2 rounded-full hover:bg-gray-200"
                        onClick={() => setSidebarOpen(true)}
                        aria-label="Open Sidebar"
                    >
                        <CiMenuFries size={24} />
                    </button>
                    <h1 className="text-xl font-semibold">Mentor Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-700">Mentor</span>
                        <button className="text-red-500 flex items-center gap-1 transition">
                            <IoMdLogOut size={24} />
                        </button>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6 overflow-y-auto flex-1">{children}</main>
            </div>
        </div>
    );
}
