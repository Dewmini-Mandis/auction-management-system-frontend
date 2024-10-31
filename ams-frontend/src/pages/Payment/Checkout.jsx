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
        navigate('/payment-success'); 
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
        } catch (error) {
            setError("Failed to update Shipping details.");
        }
    };

        

      return (

        //<div className="max-w-md p-4 mx-auto bg-white rounded-lg">

        <div className="w-full max-w-lg p-10 mx-auto mt-20 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-center">Shipping Details</h2>
          
      

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
                value="Kasun Thiwanka"
                onChange={handleInputChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
                
              />
            </div>
            <div className="mb-4 value:text-gray-200">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value="55/A, Galle Road, Colombo 03"
                onChange={handleInputChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                value="0771234567"
                onChange={handleInputChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
                
              />
            </div>

            

             <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={handleSave}
                  className="w-1/4 px-4 py-0 mr-3 text-lg text-purple-800 bg-white border border-purple-800 rounded-md hover:text-purple-700 focus:outline-none">
                  Update
                </button>

                <button
                  type="button"
                  onClick={handleCheckout}
                  className="w-1/4 px-4 py-0 ml-3 text-lg text-white rounded-md bg-purple-950 hover:bg-purple-900 focus:outline-none">
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
