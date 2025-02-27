"use client";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaSave, FaUpload } from "react-icons/fa";

export default function MentorSettings() {
    const [profile, setProfile] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        bio: "Experienced software engineer and mentor.",
        password: "",
        newPassword: "",
        confirmNewPassword: "",
        profileImage: "",
    });

    const [previewImage, setPreviewImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setPreviewImage(reader.result);
            reader.readAsDataURL(file);
            setProfile({ ...profile, profileImage: file });
        }
    };

    const handleSaveChanges = async () => {
        if (profile.newPassword && profile.newPassword !== profile.confirmNewPassword) {
            alert("New passwords do not match.");
            return;
        }

        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API request
            alert("Profile updated successfully!");
        } catch (error) {
            alert("Failed to update profile.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Account Settings</h1>

            {/* Profile Image */}
            <div className="flex flex-col items-center mb-6">
                <label htmlFor="profileImage" className="cursor-pointer">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
                        {previewImage ? (
                            <img src={previewImage} alt="Profile Preview" className="w-full h-full object-cover" />
                        ) : (
                            <FaUser className="text-gray-500 w-full h-full p-6" />
                        )}
                    </div>
                </label>
                <input id="profileImage" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                <p className="text-sm text-gray-600 mt-2">Click to upload a new profile picture</p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Full Name</label>
                    <div className="flex items-center border p-2 rounded-md">
                        <FaUser className="text-gray-500 mr-2" />
                        <input
                            type="text"
                            name="name"
                            value={profile.name}
                            onChange={handleChange}
                            className="w-full outline-none"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <div className="flex items-center border p-2 rounded-md">
                        <FaEnvelope className="text-gray-500 mr-2" />
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            className="w-full outline-none"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium">Bio</label>
                    <textarea
                        name="bio"
                        value={profile.bio}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        rows="3"
                    ></textarea>
                </div>

                {/* Change Password */}
                <div className="border p-4 rounded-lg bg-gray-100">
                    <h2 className="text-lg font-semibold mb-2">Change Password</h2>
                    <div>
                        <label className="block text-sm font-medium">Current Password</label>
                        <div className="flex items-center border p-2 rounded-md">
                            <FaLock className="text-gray-500 mr-2" />
                            <input
                                type="password"
                                name="password"
                                value={profile.password}
                                onChange={handleChange}
                                className="w-full outline-none"
                            />
                        </div>
                    </div>
                    <div className="mt-2">
                        <label className="block text-sm font-medium">New Password</label>
                        <div className="flex items-center border p-2 rounded-md">
                            <FaLock className="text-gray-500 mr-2" />
                            <input
                                type="password"
                                name="newPassword"
                                value={profile.newPassword}
                                onChange={handleChange}
                                className="w-full outline-none"
                            />
                        </div>
                    </div>
                    <div className="mt-2">
                        <label className="block text-sm font-medium">Confirm New Password</label>
                        <div className="flex items-center border p-2 rounded-md">
                            <FaLock className="text-gray-500 mr-2" />
                            <input
                                type="password"
                                name="confirmNewPassword"
                                value={profile.confirmNewPassword}
                                onChange={handleChange}
                                className="w-full outline-none"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Save Button */}
            <div className="mt-6 text-center">
                <button
                    onClick={handleSaveChanges}
                    disabled={loading}
                    className={`px-6 py-2 rounded-lg text-white flex items-center gap-2 mx-auto ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                        }`}
                >
                    <FaSave /> {loading ? "Saving..." : "Save Changes"}
                </button>
            </div>
        </div>
    );
}
