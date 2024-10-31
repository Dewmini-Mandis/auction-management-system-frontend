import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Checkout() {
       const navigate = useNavigate();
     
       const [ShippingData, setShippingData] = useState({
        ShippingDetailsId: '',
        name: '',
        address: '',
        contactNumber: '',
      }); // To store user profile data

      const [error, setError] = useState(null);  // To handle error state
      const [successMessage, setSuccessMessage] = useState('');  // To show success message

     
      const handleCheckout = () => {
        navigate('./Payment/PaymentSuccess'); 
      };

        
          
        useEffect(() => {
          // Function to fetch user data from the API
          axios.get('https://localhost:7010/api/payment/GetShippingDetails', {
              headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`
              }
          }).then((response) => {
            setShippingData(response.data);  // Store the API response in state
          }).catch((error) => {
              setError("Failed to fetch shipping details.");
              console.error(error);
          });
      }, []);

      

      // Handler for input changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingData({
            ...ShippingData,
            [name]: value
        });
    };

        
        
        // Handler for saving shipping details
      const handleSave = async () => {
        try {
            const response = await axios.put('https://localhost:7010/api/payment/UpdateShippingDetails', ShippingData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setSuccessMessage('Shipping details updated successfully!');
            console.log("Shipping details updated:", response.data);
        } catch (error) {
            setError("Failed to update Shipping details.");
            console.error(error);
        }
    };

        

      return (

        //<div className="max-w-md mx-auto p-4 bg-white  rounded-lg">

        <div className="w-full max-w-lg mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Shipping Details</h2>
          
          {/* Error message */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Success message */}
          {successMessage && <p className="text-green-500">{successMessage}</p>}

           {/* Render profile data if it exists */}
           {ShippingData ? (
          
            <div>
              <div className="mb-4">

              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={ShippingData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={ShippingData.address}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                value={ShippingData.contactNumber}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                
              />
            </div>

            

             <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={handleSave}
                  className="w-1/4 px-4 py-0 mr-3 text-lg bg-white text-purple-800 rounded-md border border-purple-800 hover:text-purple-700 focus:outline-none">
                  Update
                </button>

                <button
                  type="button"
                  onClick={handleCheckout}
                  className="w-1/4 px-4 py-0 ml-3 text-lg bg-purple-950 text-white rounded-md hover:bg-purple-900 focus:outline-none">
                  Checkout
                </button>
             </div>
            </div>
          ) : (
                <p>Loading Shipping Details...</p>
            )}

          
          
            
         </div>
            
        
  );
};

export default Checkout;
