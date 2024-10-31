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
                    
                            <tr  className="border-b hover:bg-gray-100">
                                <td className="px-6 py-4 text-sm text-center">1</td>
                                <td className="px-6 py-4 text-sm text-center">Acer Laptop  </td>
                                <td className="px-6 py-4 text-sm text-center">Rs. 300 000</td>
                                <td className="px-6 py-4 text-sm text-center">2024-10-29 14:45:00</td>
                                <td className="px-6 py-4 text-sm text-center">PayPal</td>
                                <td className="px-6 py-4 text-sm text-left">Completed</td>
                            </tr>
                        
                   
                   </tbody>
                </table>
            </div>
        </div>
    );
};

export default Transactions;
