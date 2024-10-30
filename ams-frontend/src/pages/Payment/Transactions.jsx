import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-purple-950 text-white">
                        <tr>
                            <th className="px-6 py-3 text-center text-sm font-medium">Transaction Id</th>
                            <th className="px-6 py-3 text-center text-sm font-medium">Item Name</th>
                            <th className="px-6 py-3 text-center text-sm font-medium">Total Amount</th>
                            <th className="px-6 py-3 text-center text-sm font-medium">Payment Date</th>
                            <th className="px-6 py-3 text-center text-sm font-medium">Payment Method</th>
                            <th className="px-6 py-3 text-center text-sm font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {transactions.length > 0 && 
                        transactions.map((transaction) => (
                            <tr key={transaction.transactionId} className="border-b hover:bg-gray-100">
                                <td className="px-6 py-4 text-sm text-left">{transaction.transactionId}</td>
                                <td className="px-6 py-4 text-sm text-left">{transaction.itemName}</td>
                                <td className="px-6 py-4 text-sm text-left">${transaction.totalAmount.toFixed(2)}</td>
                                <td className="px-6 py-4 text-sm text-left">{new Date(transaction.paymentDate).toLocaleDateString()}</td>
                                <td className="px-6 py-4 text-sm text-left">{transaction.paymentMethod}</td>
                                <td className="px-6 py-4 text-sm text-left">{transaction.status}</td>
                            </tr>
                        ))
                    }
    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Transactions;
