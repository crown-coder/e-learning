"use client";
import { useParams } from "next/navigation";

const productsData = [
    { id: 1, name: "Wooden Bookshelf", category: "Furniture", price: 120, image: "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid" },
    { id: 2, name: "Minimalist Desk", category: "Furniture", price: 250, image: "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid" },
    { id: 3, name: "Laptop Stand", category: "Accessories", price: 40, image: "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid" },
    { id: 4, name: "Ergonomic Chair", category: "Furniture", price: 180, image: "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid" },
    { id: 5, name: "Wireless Keyboard", category: "Electronics", price: 60, image: "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid" },
    { id: 6, name: "LED Desk Lamp", category: "Electronics", price: 35, image: "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid" },
];

export default function ProductDetails() {
    const { id } = useParams(); // ✅ Directly destructure id
    const product = productsData.find((item) => item.id === Number(id)); // ✅ Convert id to number

    if (!product) return <p className="text-center py-10">Product not found.</p>;

    return (
        <section className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" />
                <div>
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-gray-600 my-4">{product.category}</p>
                    <p className="text-xl font-semibold text-indigo-700">${product.price}</p>
                    <button className="mt-6 bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-800 transition-all">
                        Add to Cart
                    </button>
                </div>
            </div>
        </section>
    );
}
