import React from 'react' 
import { useState } from 'react';
import axiosInstance from '../../../utils/axiosInstance';

const AddBid = ({ auctionId, onPlaceBid, onClose }) => {


  
    const [bidAmount, setBidAmount] = useState('');
  
    const handleInputChange = (e) => {
      const value = e.target.value;
      // Allow only numbers
      if (/^\d*$/.test(value)) {
        setBidAmount(value);
      }
    };

    const handlePlaceBid = async () => {
      if (bidAmount) {
          try {
              // Call backend API to submit the bid
              const response = await axiosInstance.post(`/api/Bid/CreateBid/${auctionId}`, {
                  auctionId,
                  bidAmount: parseInt(bidAmount, 10), // Ensure bid amount is a number
              });
              
              console.log(response.data); // Log response for debugging
              onPlaceBid(auctionId, bidAmount); // Update parent component
              setBidAmount(''); // Reset bid amount
          } catch (error) {
              console.error("Error placing bid:", error);
          }
          onClose(); // Close modal after bid submission
      }
  };
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Modal background (gray overlay) */}
      <div
        className="fixed inset-0 bg-gray-200 opacity-90"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="relative z-10 max-w-sm bg-white shadow-lg p-7 rounded-2xl w-fit">
        <div className='border-b border-solid border-neutral-200'>
          <h2 className="mb-2 text-[15px] font-medium">Authentic Louis Vuitton Monogram Mini Josephine PM Pink M92216 Handbag NS080276</h2>
        </div>

        <p className='my-2 text-[13px]'>12 bids | Time left : <span className='text-red-600'>6h 4m 2s</span></p>
        <p className='mb-2 text-[13px]'>Current bid : <span className='font-bold text-[14px]' >Rs. 25000.00</span></p>
        <p className='mb-2 text-[13px]'>Shipping : free shipping</p>


        <div className="flex">


          <div className='flex w-full h-fit'>
            <input type="text" className="w-3/5 h-8 p-2 my-2 border border-gray-300 rounded placeholder:text-[13px]" placeholder='Rs.' value={bidAmount} onChange={handleInputChange}  />
            <button className="px-6 py-1 text-[13px] h-8 my-2 text-white bg-[#480C7B] rounded-[5px] ml-auto hover:bg-purple-800" onClick={handlePlaceBid}>
              Place Bid
            </button>
          </div>




        </div>
        <p className='mb-2 text-[11px] text-gray-700'>Enter Rs.25100 or more</p>
        <div className='flex justify-end'>
          <button className="text-[14px] text-[#480C7B] hover:text-purple-500" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}




export default AddBid