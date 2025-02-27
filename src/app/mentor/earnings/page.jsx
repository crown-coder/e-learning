"use client";
import { useState, useEffect } from "react";
import { FaMoneyBillWave, FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function MentorEarnings() {
    const [earnings, setEarnings] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [accounts, setAccounts] = useState([]);
    const [newAccount, setNewAccount] = useState({ bank: "", accountNumber: "" });
    const [isAddingAccount, setIsAddingAccount] = useState(false);
    const transactionsPerPage = 5;

    useEffect(() => {
        async function fetchEarningsData() {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setEarnings(1200);
            setTransactions([
                { id: 1, type: "Course Sale", amount: 200, date: "2025-02-20", status: "Completed" },
                { id: 2, type: "Withdrawal", amount: 500, date: "2025-02-18", status: "Pending" }
            ]);
        }
        fetchEarningsData();
    }, []);

    const handleWithdraw = async () => {
        if (earnings < 500) {
            alert("Minimum withdrawal amount is $500.");
            return;
        }

        if (accounts.length === 0) {
            alert("Please add an account before withdrawing.");
            return;
        }

        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setTransactions([
                { id: Date.now(), type: "Withdrawal", amount: 500, date: new Date().toISOString().split("T")[0], status: "Pending" },
                ...transactions
            ]);
            setEarnings(earnings - 500);
            alert("Withdrawal request submitted successfully!");
        } catch (error) {
            alert("Error processing withdrawal.");
        } finally {
            setLoading(false);
        }
    };

    const handleAddAccount = () => {
        if (!newAccount.bank || !newAccount.accountNumber) {
            alert("Please fill in all fields.");
            return;
        }
        setAccounts([...accounts, newAccount]);
        setNewAccount({ bank: "", accountNumber: "" });
        setIsAddingAccount(false);
    };

    const paginatedTransactions = transactions.slice((currentPage - 1) * transactionsPerPage, currentPage * transactionsPerPage);
    const totalPages = Math.ceil(transactions.length / transactionsPerPage);

    return (
        <div className="p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Earnings Overview</h1>

            <div className="p-4 border rounded-lg bg-green-100 flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-lg font-semibold">Total Earnings</h2>
                    <p className="text-2xl font-bold">${earnings.toFixed(2)}</p>
                </div>
                <button
                    onClick={handleWithdraw}
                    disabled={loading || earnings < 500}
                    className={`px-4 py-2 rounded-lg text-white flex items-center gap-2 ${earnings < 500 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
                >
                    <FaMoneyBillWave /> {loading ? "Processing..." : "Withdraw $500"}
                </button>
            </div>

            <h2 className="text-lg font-semibold mb-2">Bank Account</h2>
            {accounts.length === 0 ? (
                <div className="mb-4">
                    {isAddingAccount ? (
                        <div className="flex flex-col gap-2">
                            <input
                                type="text"
                                placeholder="Bank Name"
                                value={newAccount.bank}
                                onChange={(e) => setNewAccount({ ...newAccount, bank: e.target.value })}
                                className="p-2 border rounded"
                            />
                            <input
                                type="text"
                                placeholder="Account Number"
                                value={newAccount.accountNumber}
                                onChange={(e) => setNewAccount({ ...newAccount, accountNumber: e.target.value })}
                                className="p-2 border rounded"
                            />
                            <button className="p-2 bg-green-500 text-white rounded" onClick={handleAddAccount}>Save</button>
                        </div>
                    ) : (
                        <button className="p-2 bg-blue-500 text-white rounded" onClick={() => setIsAddingAccount(true)}>Add Account</button>
                    )}
                </div>
            ) : (
                <ul className="mb-4">
                    {accounts.map((acc, index) => (
                        <li key={index} className="p-2 border rounded mb-2">{acc.bank} - {acc.accountNumber}</li>
                    ))}
                </ul>
            )}

            <h2 className="text-lg font-semibold mb-2">Transaction History</h2>
            <table className="w-full border-collapse border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2 border">Date</th>
                        <th className="p-2 border">Type</th>
                        <th className="p-2 border">Amount</th>
                        <th className="p-2 border">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedTransactions.length === 0 ? (
                        <tr><td colSpan="4" className="p-4 text-center text-gray-500">No transactions found.</td></tr>
                    ) : (
                        paginatedTransactions.map(txn => (
                            <tr key={txn.id} className="border text-center">
                                <td className="p-2 border">{txn.date}</td>
                                <td className="p-2 border flex items-center justify-center gap-2">{txn.type} {txn.type === "Withdrawal" ? <FaArrowUp className="text-red-500" /> : <FaArrowDown className="text-green-500" />}</td>
                                <td className="p-2 border">${txn.amount.toFixed(2)}</td>
                                <td className={`p-2 border ${txn.status === "Completed" ? "text-green-600" : "text-yellow-600"}`}>{txn.status}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
