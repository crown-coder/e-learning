"use client"
import { useState } from "react";
import Link from "next/link";

const blogsData = [
    { id: 1, title: "The Future of E-Learning", category: "Education", image: "https://img.freepik.com/free-photo/positive-young-woman-freelancer-watching-video-blog-netbook-having-coffee-comfortable-home-beautiful-young-business-woman-working-laptopfreelancer-connecting-internet_657921-1693.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid", date: "Feb 10, 2025" },
    { id: 2, title: "Top 10 Productivity Hacks", category: "Productivity", image: "https://img.freepik.com/free-photo/positive-young-woman-freelancer-watching-video-blog-netbook-having-coffee-comfortable-home-beautiful-young-business-woman-working-laptopfreelancer-connecting-internet_657921-1693.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid", date: "Jan 28, 2025" },
    { id: 3, title: "How to Choose the Right Course", category: "Education", image: "https://img.freepik.com/free-photo/positive-young-woman-freelancer-watching-video-blog-netbook-having-coffee-comfortable-home-beautiful-young-business-woman-working-laptopfreelancer-connecting-internet_657921-1693.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid", date: "Dec 15, 2024" },
    { id: 4, title: "Best Home Office Setup", category: "Lifestyle", image: "https://img.freepik.com/free-photo/positive-young-woman-freelancer-watching-video-blog-netbook-having-coffee-comfortable-home-beautiful-young-business-woman-working-laptopfreelancer-connecting-internet_657921-1693.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid", date: "Nov 20, 2024" },
    { id: 5, title: "Coding for Beginners", category: "Technology", image: "https://img.freepik.com/free-photo/positive-young-woman-freelancer-watching-video-blog-netbook-having-coffee-comfortable-home-beautiful-young-business-woman-working-laptopfreelancer-connecting-internet_657921-1693.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid", date: "Oct 5, 2024" },
];

export default function Blogs() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Education", "Productivity", "Lifestyle", "Technology"];

    // Filter blogs based on search & category
    const filteredBlogs = blogsData.filter((blog) =>
        (selectedCategory === "All" || blog.category === selectedCategory) &&
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="w-full min-h-screen px-6 py-10">
            {/* Filters Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search blog posts..."
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

            {/* Blogs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((blog) => (
                        <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <p className="text-xs text-gray-500">{blog.date} • {blog.category}</p>
                                <h3 className="mt-2 font-bold text-lg">{blog.title}</h3>
                                <Link href={`/blogs/${blog.id}`} className="text-indigo-700 mt-2 inline-block">
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-600">No blog posts found.</p>
                )}
            </div>
        </section>
    );
}
