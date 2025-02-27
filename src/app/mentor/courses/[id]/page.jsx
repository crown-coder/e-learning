"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { FaVideo, FaPlus, FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";

export default function ManageVideos() {
    const { id } = useParams(); // Course ID from URL
    const router = useRouter();

    const [course, setCourse] = useState(null); // Course details
    const [videos, setVideos] = useState([]); // Video list
    const [newVideo, setNewVideo] = useState({ title: "", url: "" });
    const [editingVideo, setEditingVideo] = useState(null); // Currently editing video
    const [loading, setLoading] = useState(false);

    // Fetch course details and videos (simulate API call)
    useEffect(() => {
        async function fetchCourseData() {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay

            setCourse({ id, title: "Example Course" });
            setVideos([
                { id: 1, title: "Introduction", url: "https://example.com/video1.mp4" },
                { id: 2, title: "Lesson 1", url: "https://example.com/video2.mp4" },
            ]);
        }
        fetchCourseData();
    }, [id]);

    // Handle adding a new video
    const handleAddVideo = async () => {
        if (!newVideo.title || !newVideo.url) {
            alert("Please enter video title and URL");
            return;
        }

        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API delay

            setVideos([...videos, { id: Date.now(), ...newVideo }]);
            setNewVideo({ title: "", url: "" });
            alert("Video added successfully!");
        } catch (error) {
            alert("Error adding video. Try again.");
        } finally {
            setLoading(false);
        }
    };

    // Handle deleting a video
    const handleDelete = async (videoId) => {
        if (!confirm("Are you sure you want to delete this video?")) return;

        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 500));

            setVideos(videos.filter(video => video.id !== videoId));
            alert("Video deleted successfully!");
        } catch (error) {
            alert("Error deleting video.");
        } finally {
            setLoading(false);
        }
    };

    // Start editing a video
    const startEditing = (video) => {
        setEditingVideo({ ...video });
    };

    // Handle editing input changes
    const handleEditChange = (e) => {
        setEditingVideo({ ...editingVideo, [e.target.name]: e.target.value });
    };

    // Save edited video
    const saveEdit = async () => {
        if (!editingVideo.title || !editingVideo.url) {
            alert("Please enter both title and URL.");
            return;
        }

        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API delay

            setVideos(videos.map(video => (video.id === editingVideo.id ? editingVideo : video)));
            setEditingVideo(null);
            alert("Video updated successfully!");
        } catch (error) {
            alert("Error updating video.");
        } finally {
            setLoading(false);
        }
    };

    if (!course) return <p className="text-center p-6">Loading...</p>;

    return (
        <div className="p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold flex items-center gap-2 mb-4">
                <FaVideo size={24} /> Manage Videos for "{course.title}"
            </h1>

            {/* Add New Video Section */}
            <div className="mb-6 p-4 border rounded-lg bg-gray-100">
                <h2 className="text-lg font-semibold mb-2 flex items-center gap-2"><FaPlus /> Add New Video</h2>
                <div className="space-y-3">
                    <input
                        type="text"
                        value={newVideo.title}
                        onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                        placeholder="Enter video title"
                        className="w-full p-2 border rounded-lg"
                    />
                    <input
                        type="url"
                        value={newVideo.url}
                        onChange={(e) => setNewVideo({ ...newVideo, url: e.target.value })}
                        placeholder="Enter video URL"
                        className="w-full p-2 border rounded-lg"
                    />
                    <button
                        onClick={handleAddVideo}
                        disabled={loading}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                        {loading ? "Adding..." : <><FaSave /> Add Video</>}
                    </button>
                </div>
            </div>

            {/* Video List */}
            <div>
                <h2 className="text-lg font-semibold mb-2">Course Videos</h2>
                {videos.length === 0 ? (
                    <p className="text-gray-500">No videos added yet.</p>
                ) : (
                    <ul className="space-y-3">
                        {videos.map(video => (
                            <li key={video.id} className="p-4 border rounded-lg flex justify-between items-center bg-gray-50">
                                {editingVideo && editingVideo.id === video.id ? (
                                    <div className="flex flex-col w-full">
                                        <input
                                            type="text"
                                            name="title"
                                            value={editingVideo.title}
                                            onChange={handleEditChange}
                                            className="p-2 border rounded-lg mb-2"
                                        />
                                        <input
                                            type="url"
                                            name="url"
                                            value={editingVideo.url}
                                            onChange={handleEditChange}
                                            className="p-2 border rounded-lg"
                                        />
                                        <div className="flex justify-end gap-2 mt-2">
                                            <button onClick={saveEdit} className="bg-green-600 text-white px-3 py-1 rounded-lg flex items-center gap-2">
                                                <FaSave /> Save
                                            </button>
                                            <button onClick={() => setEditingVideo(null)} className="bg-gray-500 text-white px-3 py-1 rounded-lg flex items-center gap-2">
                                                <FaTimes /> Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div>
                                            <p className="font-semibold">{video.title}</p>
                                            <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm">{video.url}</a>
                                        </div>
                                        <div className="flex gap-3">
                                            <button onClick={() => startEditing(video)} className="text-yellow-500 hover:text-yellow-700"><FaEdit /></button>
                                            <button onClick={() => handleDelete(video.id)} className="text-red-500 hover:text-red-700"><FaTrash /></button>
                                        </div>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
