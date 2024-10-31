import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

 function PaymentSuccess() {
  const navigate = useNavigate();

  const [Amount, setAmount] = useState(null);  // New state for bid amount
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
    navigate('./pages/HomePage'); 
  };


  const sendPaymentDetailsToBackend = async (referenceNumber,  amount, paymentMethod, paymentDate) => {
    try {
      const response = await axios.post('https://localhost:7010/api/Payment/RecordPayment', {
        referenceNumber,
        amount,
        paymentMethod,
        paymentDate,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log('Payment recorded:', response.data);
    } catch (error) {
      console.error('Error sending payment details to backend:', error);
    }
  };


  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Payment Summary</h2>
        
        {/* Error message */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Success message */}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        <div className="flex items-center justify-between mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Total Amount:</label>
            <input
                type="text"
                id="amount"
                name="amount"
                value={Amount}
                required
                className="mt-1 p-1 w-1/2  border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
        </div>

        

        <PayPalScriptProvider options={{ "client-id": "AWFwIu-15m7mHjcjF7bpvo3igFRF6latxq7YvmxsgNkz6ccN88wVPA906YKs5TSwzfG9iZ-PzRTfTfzb", currency: "USD" }}>
          <div className="flex justify-center mt-4">
            <PayPalButtons
              style={{ layout: "vertical", color: "silver", shape: "pill", label: "pay"}}
              createOrder={(data, actions) => {

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
    
                   // Send payment details to backend
                   const paymentDate = new Date().toISOString(); // Get the current date
                   const paymentMethod = details.payment_source?.name || "PayPal";
 
                   await sendPaymentDetailsToBackend(details.id, payerName, details.purchase_units[0].amount.value, paymentMethod, paymentDate);
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
        <div className="mt-6 p-4 bg-purple-200 rounded">
          <h2 className="text-xl font-semibold text-center text-purple-950 mb-2">Payment Successful!</h2>
          <p><strong>Transaction ID:</strong> {paymentDetails.id}</p>
          <p><strong>Payer Name:</strong> {paymentDetails.payer.name.given_name} {paymentDetails.payer.name.surname}</p>
          <p><strong>Amount:</strong> ${paymentDetails.purchase_units[0].amount.value}</p>
          <p><strong>Payment Date:</strong> {new Date().toLocaleString()}</p> 
          <p><strong>Payment Method:</strong> {paymentDetails.payment_source?.name || "Paypal"}</p> 
        </div>
      )}

        </PayPalScriptProvider>
        
        <button
        type="button"
        onClick={handleViewOrders}
        className=" mr-16 px-4 py-2 text-lg underline bg-white text-purple-800 rounded-md hover:text-purple-700 focus:outline-none"
      >
        View Orders
      </button>

      <button
        type="submit"
         onClick={handleOkClick}
         className="ml-auto px-6 py-1 bg-purple-950 text-white rounded-md hover:bg-purple-900 focus:outline-none"
         >
        Ok
      </button>
        
    
     </div>
        
        
      </div>
    
  );
}


export default PaymentSuccess;
