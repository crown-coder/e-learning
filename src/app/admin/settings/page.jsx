"use client";
import { useState } from "react";

export default function AdminSettings() {
    const [formData, setFormData] = useState({
        name: "Admin",
        email: "admin@example.com",
        password: "",
        storeName: "UniqueShelves",
        contactEmail: "support@uniqueshelves.com",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Settings:", formData);
        alert("Settings updated successfully!");
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Admin Settings</h1>

            {/* Profile Settings */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div>
                            <label className="block font-semibold mb-1">Admin Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">New Password</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded" />
                        </div>
                    </div>

                    <div>
                        {/* Store Settings */}
                        <h2 className="text-xl font-bold mt-6">Store Settings</h2>

                        <div>
                            <label className="block font-semibold mb-1">Site Name</label>
                            <input type="text" name="storeName" value={formData.storeName} onChange={handleChange} className="w-full p-2 border rounded" />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">Contact Email</label>
                            <input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} className="w-full p-2 border rounded" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save Changes</button>
            </form>
        </div>
    );
}
