"use client";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Reports() {
    const [reports, setReports] = useState({
        revenue: 0,
        totalOrders: 0,
        completedOrders: 0,
        pendingOrders: 0,
        canceledOrders: 0,
        totalUsers: 0,
        bestSelling: [],
        monthlySales: [],
    });

    useEffect(() => {
        // Fetch reports from API (replace with actual API call)
        const fetchReports = async () => {
            const dummyData = {
                revenue: 12500,
                totalOrders: 300,
                completedOrders: 250,
                pendingOrders: 30,
                canceledOrders: 20,
                totalUsers: 150,
                bestSelling: [
                    { name: "Product A", sales: 120 },
                    { name: "Product B", sales: 95 },
                    { name: "Product C", sales: 75 },
                ],
                monthlySales: [1000, 1500, 2200, 1800, 2500, 2700, 3000, 3300, 3500, 4000, 4200, 4500],
            };
            setReports(dummyData);
        };

        fetchReports();
    }, []);

    const chartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Monthly Revenue",
                data: reports.monthlySales,
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderWidth: 2,
                pointRadius: 4,
                pointBackgroundColor: "rgb(75, 192, 192)",
                fill: true,
                tension: 0.3,
            },
        ],
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Sales Reports</h1>

            {/* Sales Chart */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Monthly Revenue</h2>
                <Line data={chartData} />
            </div>
        </div>
    );
}
