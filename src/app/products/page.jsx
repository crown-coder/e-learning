"use client";
import { useState } from "react";
import Link from "next/link";

const productsData = [
    { id: 1, name: "Wooden Bookshelf", category: "Furniture", price: 120, image: "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid" },
    { id: 2, name: "Minimalist Desk", category: "Furniture", price: 250, image: "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid" },
    { id: 3, name: "Laptop Stand", category: "Accessories", price: 40, image: "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid" },
    { id: 4, name: "Ergonomic Chair", category: "Furniture", price: 180, image: "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid" },
    { id: 5, name: "Wireless Keyboard", category: "Electronics", price: 60, image: "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid" },
    { id: 6, name: "LED Desk Lamp", category: "Electronics", price: 35, image: "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid" },
];

export default function Products() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortOrder, setSortOrder] = useState(""); // Sorting state

    const categories = ["All", "Furniture", "Accessories", "Electronics"];

    // Filter products by search & category
    let filteredProducts = productsData.filter((product) =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort products by price
    if (sortOrder === "lowToHigh") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    return (
        <section className="w-full min-h-screen px-6 py-10">
            {/* Filters Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search products..."
                    className="border px-4 py-2 rounded-lg w-full md:w-1/3 focus:outline-indigo-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/* Category Filter */}
                <select
                    className="mt-3 md:mt-0 border px-4 py-2 rounded-lg focus:outline-indigo-500"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
                {/* Sort by Price */}
                <select
                    className="mt-3 md:mt-0 border px-4 py-2 rounded-lg focus:outline-indigo-500"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="">Sort by Price</option>
                    <option value="lowToHigh">Low to High</option>
                    <option value="highToLow">High to Low</option>
                </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Link href={`/products/${product.id}`} key={product.id} className="block">
                            <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition cursor-pointer">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-40 object-cover rounded-md"
                                />
                                <h3 className="mt-3 font-bold text-lg">{product.name}</h3>
                                <p className="text-sm text-gray-600">{product.category}</p>
                                <p className="text-indigo-700 font-semibold mt-2">${product.price}</p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-600">No products found.</p>
                )}
            </div>
        </section>
    );
}
