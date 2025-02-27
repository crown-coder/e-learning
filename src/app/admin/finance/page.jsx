"use client";
import { useState, useEffect } from "react";
import { FaCheck, FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function AdminFinance() {
    const [withdrawRequests, setWithdrawRequests] = useState([]);
    const [transactionHistory, setTransactionHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    // Pagination states
    const [currentRequestPage, setCurrentRequestPage] = useState(1);
    const [currentHistoryPage, setCurrentHistoryPage] = useState(1);
    const requestsPerPage = 5;
    const historyPerPage = 5;

    useEffect(() => {
        // Simulated API call for withdrawals and transaction history
        async function fetchFinanceData() {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay

            setWithdrawRequests([
                { id: 1, mentor: "John Doe", amount: 500, date: "2025-02-21", status: "Pending" },
                { id: 2, mentor: "Alice Smith", amount: 700, date: "2025-02-20", status: "Pending" },
                { id: 3, mentor: "Michael Brown", amount: 300, date: "2025-02-18", status: "Pending" },
                { id: 4, mentor: "Sarah Lee", amount: 450, date: "2025-02-15", status: "Pending" },
                { id: 5, mentor: "David Wilson", amount: 600, date: "2025-02-12", status: "Pending" },
                { id: 6, mentor: "Emma Johnson", amount: 550, date: "2025-02-10", status: "Pending" },
            ]);

            setTransactionHistory([
                { id: 10, mentor: "John Doe", amount: 500, date: "2025-02-05", status: "Approved" },
                { id: 11, mentor: "Alice Smith", amount: 700, date: "2025-01-28", status: "Rejected" },
                { id: 12, mentor: "Michael Brown", amount: 300, date: "2025-01-22", status: "Approved" },
                { id: 13, mentor: "Sarah Lee", amount: 450, date: "2025-01-15", status: "Approved" },
                { id: 14, mentor: "David Wilson", amount: 600, date: "2025-01-12", status: "Approved" },
                { id: 15, mentor: "Emma Johnson", amount: 550, date: "2025-01-10", status: "Rejected" },
            ]);
        }

        fetchFinanceData();
    }, []);

    const handleAction = (id, action) => {
        setLoading(true);
        setTimeout(() => {
            setWithdrawRequests(withdrawRequests.filter(request => request.id !== id));

            setTransactionHistory([
                {
                    id: Date.now(),
                    mentor: withdrawRequests.find(req => req.id === id)?.mentor,
                    amount: withdrawRequests.find(req => req.id === id)?.amount,
                    date: new Date().toISOString().split("T")[0],
                    status: action === "approve" ? "Approved" : "Rejected"
                },
                ...transactionHistory
            ]);

            setLoading(false);
        }, 1000);
    };

    // Pagination Logic
    const paginatedRequests = withdrawRequests.slice((currentRequestPage - 1) * requestsPerPage, currentRequestPage * requestsPerPage);
    const totalRequestPages = Math.ceil(withdrawRequests.length / requestsPerPage);

    const paginatedHistory = transactionHistory.slice((currentHistoryPage - 1) * historyPerPage, currentHistoryPage * historyPerPage);
    const totalHistoryPages = Math.ceil(transactionHistory.length / historyPerPage);

    return (
        <div className=" p-3 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Finance Management</h1>

            {/* Withdrawal Requests Section */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Pending Withdrawals</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2">Date</th>
                                <th className="p-2">Mentor</th>
                                <th className="p-2">Amount</th>
                                <th className="p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedRequests.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="p-4 text-center text-gray-500">No pending withdrawals.</td>
                                </tr>
                            ) : (
                                paginatedRequests.map((req) => (
                                    <tr key={req.id} className="border text-center">
                                        <td className="p-2">{req.date}</td>
                                        <td className="p-2">{req.mentor}</td>
                                        <td className="p-2">${req.amount.toFixed(2)}</td>
                                        <td className="p-2 flex justify-center gap-2">
                                            <button
                                                className="px-3 py-1 bg-green-600 text-white rounded-lg flex items-center gap-1"
                                                onClick={() => handleAction(req.id, "approve")}
                                                disabled={loading}
                                            >
                                                <FaCheck /> Approve
                                            </button>
                                            <button
                                                className="px-3 py-1 bg-red-600 text-white rounded-lg flex items-center gap-1"
                                                onClick={() => handleAction(req.id, "reject")}
                                                disabled={loading}
                                            >
                                                <FaTimes /> Reject
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination for Withdrawals */}
                <div className="flex justify-center gap-4 mt-4">
                    <button disabled={currentRequestPage === 1} onClick={() => setCurrentRequestPage(currentRequestPage - 1)} className="p-2 border rounded-lg">
                        <FaArrowLeft />
                    </button>
                    <span>Page {currentRequestPage} of {totalRequestPages}</span>
                    <button disabled={currentRequestPage === totalRequestPages} onClick={() => setCurrentRequestPage(currentRequestPage + 1)} className="p-2 border rounded-lg">
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            {/* Transaction History Section */}
            <div>
                <h2 className="text-lg font-semibold mb-2">Transaction History</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2 border">Date</th>
                                <th className="p-2 border">Mentor</th>
                                <th className="p-2 border">Amount</th>
                                <th className="p-2 border">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedHistory.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="p-4 text-center text-gray-500">No transactions found.</td>
                                </tr>
                            ) : (
                                paginatedHistory.map((txn) => (
                                    <tr key={txn.id} className="border text-center">
                                        <td className="p-2 border">{txn.date}</td>
                                        <td className="p-2 border">{txn.mentor}</td>
                                        <td className="p-2 border">${txn.amount.toFixed(2)}</td>
                                        <td className={`p-2 border ${txn.status === "Approved" ? "text-green-600" : "text-red-600"}`}>{txn.status}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
