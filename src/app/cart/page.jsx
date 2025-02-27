"use client";
import { useState } from "react";

const initialCartItems = [
    { id: 1, name: "Wooden Bookshelf", price: 120, image: "/bookshelf.jpg", quantity: 1 },
    { id: 2, name: "Minimalist Desk", price: 250, image: "/desk.jpg", quantity: 1 },
];

export default function CartPage() {
    const [cart, setCart] = useState(initialCartItems);

    const updateQuantity = (id, type) => {
        setCart(cart.map(item =>
            item.id === id
                ? { ...item, quantity: type === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
                : item
        ));
    };

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <section className="w-full min-h-screen bg-gray-100 px-6 py-10">
            <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h1>

            {cart.length === 0 ? (
                <p className="text-center text-gray-600">Your cart is empty.</p>
            ) : (
                <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <div className="grid gap-6">
                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center justify-between border-b pb-4">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                                <div className="flex-1 px-4">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-600">${item.price}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        className="px-2 py-1 bg-gray-200 rounded-md"
                                        onClick={() => updateQuantity(item.id, "decrease")}
                                    >-</button>
                                    <span className="text-lg">{item.quantity}</span>
                                    <button
                                        className="px-2 py-1 bg-gray-200 rounded-md"
                                        onClick={() => updateQuantity(item.id, "increase")}
                                    >+</button>
                                </div>
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 text-right">
                        <h3 className="text-xl font-bold">Total: ${totalPrice}</h3>
                        <button className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
