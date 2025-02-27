"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBox, FaShoppingCart, FaUsers, FaDollarSign } from "react-icons/fa";


export default function AdminDashboard() {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        // Simulating fetching dashboard stats from backend
        setTimeout(() => {
            setStats({
                totalOrders: 120,
                totalProducts: 45,
                totalUsers: 35,
                revenue: 50000,
            });
        }, 1000);
    }, []);

    return (
        <div className="py-6">
            <div className="mb-7">
                <h1 className="font-semibold font-serif text-xl">Hello! <span>Sadeeq</span></h1>
                <p className="text-gray-400 text-sm">Never put off till tomorrow what can be done today </p>
            </div>
            <h1 className="text-lg text-gray-400 mb-3">System Report</h1>

            {/* Loading State */}
            {!stats ? (
                <p className="text-gray-600 text-center text-lg">Loading data...</p>
            ) : (
                <>
                    {/* Stats Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatCard title="Total Orders" value={stats.totalOrders} icon={<FaShoppingCart />} />
                        <StatCard title="Total Products" value={stats.totalProducts} icon={<FaBox />} />
                        <StatCard title="Total Users" value={stats.totalUsers} icon={<FaUsers />} />
                        <StatCard title="Revenue" value={`$${stats.revenue.toLocaleString()}`} icon={<FaDollarSign />} />
                    </div>

                    {/* Quick Actions */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ActionCard href="/admin/products" title="Manage Products" />
                        <ActionCard href="/admin/orders" title="Manage Orders" />
                        <ActionCard href="/admin/users" title="Manage Users" />
                    </div>
                </>
            )}
        </div>
    );
}

const StatCard = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center">
        <div className="text-3xl text-blue-500 mb-3">{icon}</div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-4xl font-bold mt-1">{value}</p>
    </div>
);

const ActionCard = ({ href, title }) => (
    <Link href={href} className="bg-blue-500 text-white p-6 rounded-lg hover:bg-blue-600 transition text-center">
        <h3 className="text-lg font-bold">{title}</h3>
    </Link>
);
