"use client";

import Link from "next/link";
import { useState } from "react";

const ordersData = [
    { id: 1, date: "2025-02-20", total: 250, status: "Shipped" },
    { id: 2, date: "2025-02-18", total: 120, status: "Delivered" },
    { id: 3, date: "2025-02-15", total: 180, status: "Processing" },
];

export default function Orders() {
    return (
        <section className="w-full min-h-screen px-6 py-10">
            <h1 className="text-3xl font-bold mb-6">My Orders</h1>
            {ordersData.length > 0 ? (
                <div className="bg-white shadow-md rounded-lg p-6">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-3 text-left">Order ID</th>
                                <th className="border p-3 text-left">Date</th>
                                <th className="border p-3 text-left">Total</th>
                                <th className="border p-3 text-left">Status</th>
                                <th className="border p-3 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ordersData.map((order) => (
                                <tr key={order.id} className="border">
                                    <td className="border p-3">#{order.id}</td>
                                    <td className="border p-3">{order.date}</td>
                                    <td className="border p-3">${order.total}</td>
                                    <td className="border p-3 text-indigo-600 font-semibold">{order.status}</td>
                                    <td className="border p-3">
                                        <Link href={`/orders/${order.id}`} className="text-blue-500 hover:underline">
                                            View Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-gray-600">No orders found.</p>
            )}
        </section>
    );
}
