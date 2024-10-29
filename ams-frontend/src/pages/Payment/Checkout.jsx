import React, { useState, useEffect } from 'react';

function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
   };

    // State to hold the input amount
    const [amount, setAmount] = useState(''); 
    

  return (

    

    <div className="max-w-md mx-auto p-4 bg-white  rounded-lg">

     <div className="w-full max-w-lg mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Shipping Details</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            
          />
        </div>
        <div className="flex justify-between mt-6">
        <button
            type="button"
            onClick={handleUpdate}
            className="px-4 py-1 bg-purple-950 text-white rounded-md hover:bg-purple-900 focus:outline-none" >
            Update
        </button>

        <button
            type="submit"
            className="px-4 py-1 bg-purple-950 text-white rounded-md hover:bg-purple-900 focus:outline-none">
            Submit
        </button>
        </div>
        </form>
      
        </div>
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Payment Summary</h2>
        
        <div className="flex items-center justify-between mb-4">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Total Amount:</label>
        <input
            type="text"
            id="amount"
            name="amount"
            value={amount}
                    onChange={(e) => setAmount(e.target.value)}
            required
            className="mt-1 p-1 w-1/2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
        />
        </div>
        <div className="flex justify-end mt-6">
        <button
            type="button"
            
            className="px-4 py-1  bg-purple-950 text-white rounded-md hover:bg-purple-900 focus:outline-none">
            Checkout
        </button>
        </div>
    
     </div>
    </div>
    
  );
};

export default Checkout;
