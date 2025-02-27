"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function OrderDetails() {
    const { id } = useParams();
    const router = useRouter();

    // Dummy order data
    const [order, setOrder] = useState(null);

    useEffect(() => {
        // Fetch order details from API (replace with actual API call)
        const fetchOrder = async () => {
            const dummyOrder = {
                id,
                customer: "John Doe",
                email: "johndoe@example.com",
                status: "Pending",
                total: "$120",
                date: "2025-02-25",
                items: [
                    { name: "Product A", quantity: 2, price: "$40" },
                    { name: "Product B", quantity: 1, price: "$40" },
                ],
            };
            setOrder(dummyOrder);
        };
        fetchOrder();
    }, [id]);

    const handleStatusChange = (newStatus) => {
        setOrder((prev) => ({ ...prev, status: newStatus }));
    };

    if (!order) return <p>Loading...</p>;

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Order Details</h1>

            <div className="mb-6">
                <p><strong>Order ID:</strong> {order.id}</p>
                <p><strong>Customer:</strong> {order.customer}</p>
                <p><strong>Email:</strong> {order.email}</p>
                <p><strong>Total:</strong> {order.total}</p>
                <p><strong>Date:</strong> {order.date}</p>
                <p><strong>Status:</strong>
                    <select
                        className="ml-2 p-1 border rounded"
                        value={order.status}
                        onChange={(e) => handleStatusChange(e.target.value)}
                    >
                        <option value="Pending">Pending</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </p>
            </div>

            <h2 className="text-lg font-bold mb-4">Ordered Items</h2>
            <ul className="border p-4 rounded">
                {order.items.map((item, index) => (
                    <li key={index} className="p-2 border-b">
                        {item.name} - {item.quantity} × {item.price}
                    </li>
                ))}
            </ul>

            <button
                className="mt-6 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                onClick={() => router.push("/admin/orders")}
            >
                Back to Orders
            </button>
        </div>
    );
}
