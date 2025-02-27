"use client";
import { useState } from "react";

const cartItems = [
    { id: 1, name: "Wooden Bookshelf", price: 120, image: "/bookshelf.jpg", quantity: 1 },
    { id: 2, name: "Minimalist Desk", price: 250, image: "/desk.jpg", quantity: 1 },
];

export default function CheckoutPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
        paymentMethod: "Card",
    });

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Order placed successfully!");
    };

    return (
        <section className="w-full min-h-screen bg-gray-100 px-6 py-10">
            <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>

            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left: Billing Details */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
                        <form onSubmit={handleSubmit} className="grid gap-4">
                            <input
                                type="text" name="name" placeholder="Full Name"
                                className="border px-4 py-2 rounded-lg w-full"
                                value={formData.name} onChange={handleInputChange} required
                            />
                            <input
                                type="email" name="email" placeholder="Email Address"
                                className="border px-4 py-2 rounded-lg w-full"
                                value={formData.email} onChange={handleInputChange} required
                            />
                            <input
                                type="text" name="address" placeholder="Shipping Address"
                                className="border px-4 py-2 rounded-lg w-full"
                                value={formData.address} onChange={handleInputChange} required
                            />
                            <input
                                type="tel" name="phone" placeholder="Phone Number"
                                className="border px-4 py-2 rounded-lg w-full"
                                value={formData.phone} onChange={handleInputChange} required
                            />
                            {/* Payment Options */}
                            <div>
                                <label className="font-semibold block mb-2">Payment Method</label>
                                <select
                                    name="paymentMethod" className="border px-4 py-2 rounded-lg w-full"
                                    value={formData.paymentMethod} onChange={handleInputChange}
                                >
                                    <option value="Card">Credit/Debit Card</option>
                                    <option value="PayPal">PayPal</option>
                                    <option value="Cash">Cash on Delivery</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700"
                            >
                                Place Order
                            </button>
                        </form>
                    </div>

                    {/* Right: Order Summary */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center justify-between border-b py-2">
                                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
                                    <div className="flex-1 px-4">
                                        <h3 className="text-lg">{item.name}</h3>
                                        <p className="text-gray-600">${item.price} x {item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="mt-4 text-right">
                                <h3 className="text-xl font-bold">Total: ${totalPrice}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
