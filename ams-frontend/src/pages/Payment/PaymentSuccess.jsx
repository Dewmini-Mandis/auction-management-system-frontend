import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

 function PaymentSuccess() {
  const navigate = useNavigate();

  const [Amount, setAmount] = useState('');  // New state for bid amount
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null); // Store payment details
  
  const [error, setError] = useState(null);  // To handle error state
  const [successMessage, setSuccessMessage] = useState('');  // To show success message

  useEffect(() => {
    // Fetch bid amount from Bid table
    axios.get('https://localhost:7010/api/Payment/GetTotalAmount', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((response) => {
      setAmount(response.data);  // Store bid amount in state
    }).catch((error) => {
      setError("Failed to fetch Amount.");
      console.error(error);
    
    });
  }, []);
   
  
  // Navigate to the orders page when "View Orders" is clicked
  const handleViewOrders = () => {
    navigate('./pages/Payment/Transactions'); 
  };

  // Navigate to the home page when "OK" is clicked
  const handleOkClick = () => {
    alert("Payment Successful!");
    navigate('./pages/HomePage'); 
  };

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="max-w-md p-6 mx-auto mt-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold text-center">Payment Summary</h2>
        
        
        {/* Success message */}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        <div className="flex items-center justify-between mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Total Amount:</label>
            <input
                type="text"
                id="amount"
                name="amount"
                value={Amount}
                readOnly
                className="w-1/2 p-1 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
        </div>

        

        <PayPalScriptProvider options={{ "client-id": "AWFwIu-15m7mHjcjF7bpvo3igFRF6latxq7YvmxsgNkz6ccN88wVPA906YKs5TSwzfG9iZ-PzRTfTfzb", currency: "USD" }}>
          <div className="flex justify-center mt-4">
            <PayPalButtons
              style={{ layout: "vertical", color: "silver", shape: "pill", label: "pay"}}
              createOrder={(data, actions) => {
                if (!Amount) {
                  setError("Amount is missing or invalid.");
                  return Promise.reject();
                } 
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        
                        value: Amount,
                      },
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                try {
                  const details = await actions.order.capture();
                  setPaymentSuccess(true);
                  setPaymentDetails(details); 
                  
    
                  // Log transaction details
                  console.log("Transaction Details:", details);
    
                  
                } catch (error) {
                  console.error("Error capturing payment", error);
                  alert("Error processing payment.");
                }
              }}
              onError={(err) => {
                console.error("PayPal Checkout onError", err);
                alert("Payment failed. Please try again.");
              }}
            />
          </div>
          {paymentSuccess && paymentDetails && (
        <div className="p-4 mt-6 bg-purple-200 rounded">
          <h2 className="mb-2 text-xl font-semibold text-center text-purple-950">Payment Successful!</h2>
          <p><strong>Transaction ID:</strong> {paymentDetails.id}</p>
          <p><strong>Payer Name:</strong> {paymentDetails.payer.name.given_name} {paymentDetails.payer.name.surname}</p>
          <p><strong>Amount:</strong> ${paymentDetails.purchase_units[0].amount.value}</p>
          <p><strong>Payment Method:</strong> {paymentDetails.payment_source?.name || "Paypal"}</p> 
        </div>
      )}

        </PayPalScriptProvider>
        
        <button
        type="button"
        onClick={handleViewOrders}
        className="px-4 py-2 mr-16 text-lg text-purple-800 underline bg-white rounded-md hover:text-purple-700 focus:outline-none"
      >
        View Orders
      </button>

      <button
        type="submit"
         onClick={handleOkClick}
         className="px-6 py-1 ml-auto text-white rounded-md bg-purple-950 hover:bg-purple-900 focus:outline-none"
         >
        Ok
      </button>
        
    
     </div>
        
        
      </div>
    
  );
}


export default PaymentSuccess;
