"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function AdminBlogPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("draft");
    const [blogs, setBlogs] = useState([]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = { title, content, image, category, status };
        setBlogs([...blogs, newBlog]);
        setTitle("");
        setContent("");
        setImage(null);
        setCategory("");
        setStatus("draft");
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Create New Blog</h1>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Title</label>
                    <input type="text" className="w-full p-2 border rounded" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Content</label>
                    <ReactQuill value={content} onChange={setContent} className="h-40 mb-2" />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Image</label>
                    <input type="file" className="w-full p-2 border rounded" onChange={handleImageUpload} />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Category</label>
                    <input type="text" className="w-full p-2 border rounded" value={category} onChange={(e) => setCategory(e.target.value)} />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Status</label>
                    <select className="w-full p-2 border rounded" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                    </select>
                </div>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Save Blog</button>
            </form>

            <h2 className="text-xl font-bold mt-8">Existing Blogs</h2>
            <div className="mt-4 space-y-4">
                {blogs.map((blog, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow-md flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-bold">{blog.title}</h3>
                            <p className="text-sm text-gray-600">Category: {blog.category} | Status: {blog.status}</p>
                        </div>
                        <div className="space-x-2">
                            <button className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
                            <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
