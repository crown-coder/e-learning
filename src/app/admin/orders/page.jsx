"use client";
import { useState } from "react";
import Link from "next/link";

export default function ManageOrders() {
    const [orders, setOrders] = useState([
        { id: "ORD123", customer: "John Doe", status: "Pending", total: "$120", date: "2025-02-25" },
        { id: "ORD124", customer: "Jane Smith", status: "Shipped", total: "$80", date: "2025-02-24" },
        { id: "ORD125", customer: "Alice Johnson", status: "Delivered", total: "$200", date: "2025-02-23" },
        { id: "ORD126", customer: "Bob Brown", status: "Pending", total: "$150", date: "2025-02-22" },
        { id: "ORD127", customer: "Charlie White", status: "Cancelled", total: "$90", date: "2025-02-21" },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 4;

    const handleStatusChange = (id, newStatus) => {
        setOrders(orders.map(order => order.id === id ? { ...order, status: newStatus } : order));
    };

    // Pagination Logic
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
    const totalPages = Math.ceil(orders.length / ordersPerPage);

    return (
        <div className="p-6 bg-white rounded-lg">
            <h1 className="text-xl font-bold mb-6 font-serif">Manage Orders</h1>
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-50 border-b-2">
                        <th className="p-3">Order ID</th>
                        <th className="p-3">Customer</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Total Price</th>
                        <th className="p-3">Date</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentOrders.map((order) => (
                        <tr key={order.id} className="text-center border-b-2 text-sm">
                            <td className="p-2">{order.id}</td>
                            <td className="p-2">{order.customer}</td>
                            <td className="p-2">
                                <select
                                    className="p-1 border rounded"
                                    value={order.status}
                                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Shipped">Shipped</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="Cancelled">Cancelled</option>
                                </select>
                            </td>
                            <td className="p-2">{order.total}</td>
                            <td className="p-2">{order.date}</td>
                            <td className="p-2">
                                <Link href={`/admin/orders/${order.id}`}>
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                                        View Details
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Pagination Controls */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    className="px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50"
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                <span className="px-3 py-1 mx-2">Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    className="px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50"
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
