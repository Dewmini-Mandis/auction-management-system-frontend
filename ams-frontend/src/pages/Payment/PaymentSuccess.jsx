import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PaymentSuccess({ paymentDetails }) {
  const navigate = useNavigate();

  // Navigate to the orders page when "View Orders" is clicked
  const handleViewOrders = () => {
    navigate('./pages/Payment/Transactions'); 
  };

  // Navigate to the home page when "OK" is clicked
  const handleOkClick = () => {
    navigate('./pages/Home'); 
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-black mb-4">Payment Successful!</h1>
        <p className="text-black  text-lg mb-8">Thank you for your purchase.</p>
        
        <div className="text-left mb-6">
          <p className="text-lg font-medium text-gray-800">
            <span className="font-medium">Item Name:</span> {paymentDetails?.name}
          </p>
          <p className="text-lg font-medium text-gray-800 mt-2">
            <span className="font-medium">Total Amount:</span> Rs.{paymentDetails?.totalAmount.toFixed(2)}
          </p>
          <p className="text-lg font-medium text-gray-800 mt-2">
            <span className="font-medium">Payment Method:</span> {paymentDetails?.paymentMethod}
          </p>
        </div>
        
        <button
        type="button"
        onClick={handleViewOrders}
        className=" mr-6 px-4 py-2 text-lg underline bg-white text-purple-800 rounded-md hover:text-purple-700 focus:outline-none"
      >
        View Orders
      </button>

      <button
        type="submit"
         onClick={handleOkClick}
        className="px-8 py-1 bg-purple-950 text-white rounded-md hover:bg-purple-900 focus:outline-none"
      >
        Ok
      </button>
      </div>
    </div>
  );
}
