"use client";
import { useState, useEffect } from "react";
import { FaPlus, FaEdit, FaTrash, FaSave, FaTimes, FaUpload, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function MentorBlog() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: "", content: "", image: "" });
    const [editingPost, setEditingPost] = useState(null);
    const [loading, setLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3; // Number of posts per page

    useEffect(() => {
        async function fetchPosts() {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
            setPosts([
                { id: 1, title: "My First Blog", content: "Welcome to my blog!", image: "" },
                { id: 2, title: "Cybersecurity Tips", content: "Always use strong passwords.", image: "" },
                { id: 3, title: "React Hooks Guide", content: "Learn useState and useEffect.", image: "" },
                { id: 4, title: "Next.js vs React", content: "Which is better?", image: "" }
            ]);
        }
        fetchPosts();
    }, []);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
            if (editingPost) {
                setEditingPost({ ...editingPost, image: reader.result });
            } else {
                setNewPost({ ...newPost, image: reader.result });
            }
        };
        reader.readAsDataURL(file);
    };

    const handleAddPost = async () => {
        if (!newPost.title || !newPost.content) {
            alert("Title and content are required.");
            return;
        }

        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API delay
            setPosts([...posts, { id: Date.now(), ...newPost }]);
            setNewPost({ title: "", content: "", image: "" });
            setImagePreview("");
            alert("Post added successfully!");
        } catch (error) {
            alert("Error adding post.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (postId) => {
        if (!confirm("Are you sure you want to delete this post?")) return;
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 500));
            setPosts(posts.filter(post => post.id !== postId));
            alert("Post deleted!");
        } catch (error) {
            alert("Error deleting post.");
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (post) => {
        setEditingPost(post);
        setImagePreview(post.image || "");
    };

    const handleUpdatePost = async () => {
        if (!editingPost.title || !editingPost.content) {
            alert("Title and content are required.");
            return;
        }

        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API delay
            setPosts(posts.map(post => (post.id === editingPost.id ? editingPost : post)));
            setEditingPost(null);
            setImagePreview("");
            alert("Post updated successfully!");
        } catch (error) {
            alert("Error updating post.");
        } finally {
            setLoading(false);
        }
    };

    const paginatedPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    return (
        <div className="p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Mentor Blog</h1>

            {/* Add/Edit Blog Post */}
            <div className="mb-6 p-4 border rounded-lg bg-gray-100">
                <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    {editingPost ? <><FaEdit /> Edit Blog Post</> : <><FaPlus /> Add New Blog Post</>}
                </h2>
                <div className="space-y-3">
                    <input
                        type="text"
                        value={editingPost ? editingPost.title : newPost.title}
                        onChange={(e) =>
                            editingPost
                                ? setEditingPost({ ...editingPost, title: e.target.value })
                                : setNewPost({ ...newPost, title: e.target.value })
                        }
                        placeholder="Enter blog title"
                        className="w-full p-2 border rounded-lg"
                    />
                    <textarea
                        value={editingPost ? editingPost.content : newPost.content}
                        onChange={(e) =>
                            editingPost
                                ? setEditingPost({ ...editingPost, content: e.target.value })
                                : setNewPost({ ...newPost, content: e.target.value })
                        }
                        placeholder="Enter blog content"
                        className="w-full p-2 border rounded-lg"
                    />

                    {/* Image Upload */}
                    <div className="flex flex-col items-center gap-2">
                        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="imageUpload" />
                        <label htmlFor="imageUpload" className="cursor-pointer bg-gray-300 px-3 py-1 rounded-lg flex items-center gap-2">
                            <FaUpload /> Upload Image
                        </label>
                        {imagePreview && <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />}
                    </div>

                    <button
                        onClick={editingPost ? handleUpdatePost : handleAddPost}
                        disabled={loading}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                        {loading ? "Processing..." : <><FaSave /> {editingPost ? "Update Post" : "Add Post"}</>}
                    </button>
                    {editingPost && (
                        <button
                            onClick={() => { setEditingPost(null); setImagePreview(""); }}
                            className="bg-gray-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 ml-2"
                        >
                            <FaTimes /> Cancel Edit
                        </button>
                    )}
                </div>
            </div>

            {/* Blog Post List with Pagination */}
            <div>
                <h2 className="text-lg font-semibold mb-2">My Blog Posts</h2>
                {paginatedPosts.length === 0 ? (
                    <p className="text-gray-500">No posts yet.</p>
                ) : (
                    <ul className="space-y-3">
                        {paginatedPosts.map(post => (
                            <li key={post.id} className="p-4 border rounded-lg bg-gray-50">
                                <div>
                                    <h3 className="font-semibold text-lg">{post.title}</h3>
                                    <p className="text-gray-700">{post.content}</p>
                                    {post.image && <img src={post.image} alt="Blog Image" className="w-32 h-32 object-cover rounded-lg mt-2" />}
                                </div>
                                <div className="flex gap-3 mt-2">
                                    <button onClick={() => handleEdit(post)} className="text-yellow-500 hover:text-yellow-700"><FaEdit /></button>
                                    <button onClick={() => handleDelete(post.id)} className="text-red-500 hover:text-red-700"><FaTrash /></button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Pagination Controls */}
                <div className="flex justify-center gap-4 mt-4">
                    <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}><FaArrowLeft /></button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}><FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
}
