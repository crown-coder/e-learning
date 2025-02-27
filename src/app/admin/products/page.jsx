"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

export default function ManageProducts() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;

    useEffect(() => {
        // Fetch products from backend (Later)
        setProducts([
            { id: 1, name: "Laptop", price: 750, image: "https://img.freepik.com/free-psd/macbook-mockup_1332-60596.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid" },
            { id: 2, name: "Phone", price: 400, image: "https://img.freepik.com/free-psd/macbook-mockup_1332-60596.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid" },
            { id: 3, name: "Headphones", price: 100, image: "https://img.freepik.com/free-psd/macbook-mockup_1332-60596.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid" },
            { id: 4, name: "Tablet", price: 300, image: "https://img.freepik.com/free-psd/macbook-mockup_1332-60596.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid" },
            { id: 5, name: "Smartwatch", price: 200, image: "https://img.freepik.com/free-psd/macbook-mockup_1332-60596.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid" },
            { id: 6, name: "Monitor", price: 250, image: "https://img.freepik.com/free-psd/macbook-mockup_1332-60596.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid" },
        ]);
    }, []);

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Manage Products</h1>
                <Link
                    href="/admin/products/add"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    + Add Product
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-3 text-left">Image</th>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Price</th>
                            <th className="p-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentProducts.map((product) => (
                            <tr key={product.id} className="border-b hover:bg-gray-100 transition">
                                <td className="p-3">
                                    <img src={product.image} alt={product.name} className="w-16 h-16 rounded-md shadow-md" />
                                </td>
                                <td className="p-3 font-medium">{product.name}</td>
                                <td className="p-3 text-green-600 font-semibold">${product.price}</td>
                                <td className="p-3 flex justify-center items-center text-2xl">
                                    <Link
                                        href={`/admin/products/edit/${product.id}`}
                                        className="text-blue-500 hover:underline mr-3"
                                    >
                                        <CiEdit />
                                    </Link>
                                    <button
                                        className="text-red-500 hover:underline"
                                        onClick={() => handleDelete(product.id)}
                                    >
                                        <CiTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
                {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`mx-1 px-4 py-2 rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"} hover:bg-blue-600 transition`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

// Delete Function (Later to connect to Backend)
const handleDelete = (id) => {
    console.log(`Delete product with ID: ${id}`);
};
