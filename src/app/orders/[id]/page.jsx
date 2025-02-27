"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const ordersData = [
    {
        id: "1", date: "2025-02-25", total: 120, status: "Processing", items: [
            { name: "Wooden Bookshelf", quantity: 1, price: 120 },
        ]
    },
    {
        id: "2", date: "2025-02-20", total: 250, status: "Shipped", items: [
            { name: "Minimalist Desk", quantity: 1, price: 250 },
        ]
    },
];

export default function OrderDetails() {
    const { id } = useParams();
    const order = ordersData.find(order => order.id === id);

    if (!order) return <p className="text-center py-10">Order not found.</p>;

    return (
        <section className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Order Details</h1>
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Status:</strong> {order.status}</p>

            <div className="mt-4 border-t pt-4">
                <h2 className="text-lg font-semibold">Items:</h2>
                <ul className="mt-2">
                    {order.items.map((item, index) => (
                        <li key={index} className="flex justify-between py-2 border-b">
                            <span>{item.name} (x{item.quantity})</span>
                            <span>${item.price}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-lg font-semibold mt-4">Total: ${order.total}</p>
            </div>

            <Link href="/orders" className="mt-6 inline-block bg-indigo-700 text-white px-6 py-2 rounded-lg">
                Back to Orders
            </Link>
        </section>
    );
}
