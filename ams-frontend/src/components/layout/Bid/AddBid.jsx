import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosInstance';

const AddBid = ({ auctionId, onPlaceBid, onClose }) => {
  const [auctionDetails, setAuctionDetails] = useState(null);
  const [bidAmount, setBidAmount] = useState('');
  const [bidCount, setBidCount] = useState(0);
  const [highestBidAmount, setHighestBidAmount] = useState(0);
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState('');
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setBidAmount(value);
    }
  };

  const calculateTimeLeft = (endTime) => {
    const currentTime = new Date();
    const remainingTime = new Date(endTime) - currentTime;
    
    if (remainingTime <= 0) return 'Auction ended';

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);

    return `${days > 0 ? `${days}d ` : ''}${hours}h ${minutes} min`;
  };


  useEffect(() => {
    const response =  axiosInstance.get(`/api/auctions/GetAuctionById`, {
      params: { auctionId }
    });
    if (auctionDetails?.endTime) {
        setTimeLeft(calculateTimeLeft(auctionDetails.endTime));
     

      return () => clearInterval(intervalId);
    }
  }, [auctionDetails?.endTime]);

  
  useEffect(() => {

    const fetchHighestBidAmount = async () => {
        try {
          const response = await axiosInstance.get(`/api/Bid/GetHighestBid/${auctionId}`);

          // console.log('Bid count:', response.data);

          setHighestBidAmount(response.data); 
          setError(''); 
        } catch (err) {
          console.error('Error fetching bid count:', err);
          setError('Failed to fetch bid count'); 
        
      }
    };

    fetchHighestBidAmount();
  }, [auctionId]); 


  
  

  const handlePlaceBid = async () => {
    if (bidAmount) {
      
   const timeStamp = new Date().toISOString();
   const minimumBid = highestBidAmount + 100; // Set the minimum bid requirement

  if (parseInt(bidAmount, 10) < minimumBid) {
    setError(`Your bid must be at least Rs.${minimumBid}.00`); 
    return; 
  }
      try {
        // Call backend API to submit the bid
        const response = await axiosInstance.post(`/api/Bid/CreateBid/${auctionId}`, {
          auctionId,
          bidAmount: parseInt(bidAmount, 10), 
          timeStamp,
        });

        console.log(response.data); 
        onPlaceBid(auctionId, bidAmount); 
        setBidAmount(''); 
        navigate('/mybids');
        window.location.reload(); 
      } catch (error) {
        console.error("Error placing bid:", error);
      }
      onClose(); 
    }
  };

  useEffect(() => {
    const fetchAuctionDetails = async () => {
      try {
        const response = await axiosInstance.get(`/api/auctions/GetAuctionById`, {
          params: { auctionId }
        });
        setAuctionDetails(response.data);
        console.log("Auction Details:", response.data); 
      } catch (error) {
        console.error("Error fetching auction details:", error);
      }
    };

    fetchAuctionDetails();
  }, [auctionId]);

useEffect(() => {

    const fetchBidCount = async () => {
      
        try {
          const response = await axiosInstance.get(`/api/Bid/GetBidCount/${auctionId}`);

          // console.log('Bid count:', response.data);

          setBidCount(response.data); 
          setError(''); 
        } catch (err) {
          console.error('Error fetching bid count:', err);
          setError('Failed to fetch bid count'); 
      
      }
    };

    fetchBidCount();
  }, [auctionId]); 

 
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
          <h2 className="mb-2 text-[15px] font-medium">{auctionDetails?.product?.name}</h2>
        </div>

        <p className='my-2 text-[13px]'>{bidCount} bid(s) | Time Left : <span className='text-red-600'>{timeLeft}</span></p>
        <p className='mb-2 text-[13px]'>Current Highest Bid : <span className='font-bold text-[14px]' >Rs. {highestBidAmount}.00</span></p>
        <p className='mb-2 text-[13px]'>Shipping : {auctionDetails?.product?.shippingfee === 0 ? 'Free Shipping' : `Rs. ${auctionDetails?.product?.shippingfee.toFixed(2)}`}</p>


        <div className="flex">


          <div className='flex w-full h-fit'>
            <input type="text" className="w-3/5 h-8 p-2 my-2 border border-gray-300 rounded placeholder:text-[13px]" placeholder='Rs.' value={bidAmount} onChange={handleInputChange} />
            <button className="px-6 py-1 text-[13px] h-8 my-2 text-white bg-[#480C7B] rounded-[5px] ml-auto hover:bg-purple-800" onClick={handlePlaceBid}>
              Place Bid
            </button>
          </div>




        </div>
        <p className='mb-2 text-[11px] text-gray-700'>Enter Rs.{highestBidAmount+100} or more</p>
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