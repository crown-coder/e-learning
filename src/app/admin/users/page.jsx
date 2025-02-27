"use client";
import { useState, useEffect } from "react";

export default function ManageUsers() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    useEffect(() => {
        // Fetch users from API (replace with actual API call)
        const fetchUsers = async () => {
            const dummyUsers = [
                { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
                { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
                { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "User" },
                { id: 4, name: "Sarah Connor", email: "sarah@example.com", role: "User" },
                { id: 5, name: "Tony Stark", email: "tony@example.com", role: "Admin" },
                { id: 6, name: "Bruce Wayne", email: "bruce@example.com", role: "User" },
            ];
            setUsers(dummyUsers);
        };
        fetchUsers();
    }, []);

    const handleRoleChange = (id, newRole) => {
        setUsers((prev) =>
            prev.map((user) =>
                user.id === id ? { ...user, role: newRole } : user
            )
        );
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (confirmDelete) {
            setUsers((prev) => prev.filter((user) => user.id !== id));
        }
    };

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.role.toLowerCase().includes(search.toLowerCase())
    );

    // Pagination Logic
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    return (
        <div className="p-6 bg-white rounded-lg">
            <h1 className="text-xl font-serif font-bold mb-6">Manage Users</h1>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search users..."
                className="w-full p-2 mb-4 border rounded"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Users Table */}
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-50 border-b-2">
                        <th className="p-3">Name</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Role</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map((user) => (
                        <tr key={user.id} className="text-center border-b-2 text-sm">
                            <td className="p-2">{user.name}</td>
                            <td className="p-2">{user.email}</td>
                            <td className="p-2">
                                <select
                                    className="p-1 border rounded"
                                    value={user.role}
                                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                >
                                    <option value="Admin">Admin</option>
                                    <option value="User">User</option>
                                </select>
                            </td>
                            <td className="p-2">
                                <button
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                    onClick={() => handleDelete(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4 space-x-2">
                <button
                    className="px-3 py-1 border rounded disabled:opacity-50"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Prev
                </button>
                <span className="px-3 py-1">Page {currentPage} of {totalPages}</span>
                <button
                    className="px-3 py-1 border rounded disabled:opacity-50"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
