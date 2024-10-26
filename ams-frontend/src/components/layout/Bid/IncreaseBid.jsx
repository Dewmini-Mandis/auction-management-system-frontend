import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import approval from '../../../assets/images/approval.png';
import axiosInstance from '../../../utils/axiosInstance';

const IncreaseBid = ({ bid, onClose }) => {
  const [bidAmount, setBidAmount] = useState('');
  const [bidCount, setBidCount] = useState(0);
  const [error, setError] = useState('');
  const [isIMaxBidder, setIAmMaxBidder] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate


  const handleInputChange = (e) => {
    const value = e.target.value;
    console.log('Input value:', value); // Check what the input value is
    if (/^\d*$/.test(value)) {
      setBidAmount(value);
    }
  };


  const minBidAmount = bid?.highestBidAmount + 100;


  useEffect(() => {
    if(bid?.highestBidAmount <= bid?.bidAmount){
      setIAmMaxBidder(true);
    }

    const fetchBidCount = async () => {
      if (bid?.auctionId) {
        try {
          const response = await axiosInstance.get(`/api/Bid/GetBidCount/${bid.auctionId}`);

          // console.log('Bid count:', response.data);

          setBidCount(response.data); // Assuming response.data returns the count directly
          setError(''); // Clear previous errors
        } catch (err) {
          console.error('Error fetching bid count:', err);
          setError('Failed to fetch bid count'); // Set an error message to display
        }
      }
    };

    fetchBidCount();
  }, [bid.auctionId]); // Runs when bid.auctionId changes


  const handleIncreaseBid = async () => {
    console.log('Current Bid Amount:', bidAmount);
    console.log('Minimum Bid Amount:', minBidAmount);

    if (parseInt(bidAmount) < minBidAmount) {
      setError(`Your bid must be at least Rs. ${minBidAmount}`);
      return;
    }
    
    try {

      console.log(bidAmount);

       axiosInstance.put(`/api/Bid/UpdateBid`, {
        bidId: bid.bidId,
        bidAmount: bidAmount,

      });
      setError('');
      onClose(); // Close the modal

      // Redirect to My Bids page
      navigate('/mybids'); // Change the path as per your routing
    } catch (err) {
      console.error('Error increasing bid:', err);
      setError('Failed to increase bid');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Modal background (gray overlay) */}
      <div className="fixed inset-0 bg-gray-200 opacity-90" onClick={onClose}></div>

      {/* Modal content */}
      <div className="relative z-10 max-w-sm p-4 bg-white shadow-lg sm:p-7 rounded-2xl w-fit">
        {/* Modal Header */}
        <div className='border-b border-solid border-neutral-200'>


        { isIMaxBidder && 
          <div className='flex items-center border-[#44BF00] mb-2 border-solid border-2 p-2 rounded-lg'>
          {/* Image */}
          <img className='w-8 h-8 mr-2 sm:w-10 sm:h-10' src={approval} alt="approval" />

          {/* Text */}
          <p className='text-[10px] sm:text-[13px] text-[#44BF00] font-semibold'>
            You are the highest bidder on this item. Hope you win it!
          </p>
          </div>
        }

          <h2 className="mb-2 text-[12px] sm:text-[15px] font-medium p-1">
          {bid.productName}
          </h2>
        </div>

        <p className='my-2 text-[10px] sm:text-[13px]'>{bidCount} bid(s) | Time left : <span className='text-red-600'>{bid.timeLeft}</span></p>
        <p className='mb-2 text-[10px] sm:text-[13px]'>Current highest bid : <span className='font-bold text-[11px] sm:text-[14px]'>Rs. {bid.highestBidAmount.toFixed(2)}</span></p>
        <p className='mb-2 text-[10px] sm:text-[13px]'>Shipping : <span className=''>Rs. {bid.shippingFee.toFixed(2)}</span></p>

        <div className='p-2 my-1 rounded-lg bg-[#C8C8C8]'>

          <p className='text-[8px] sm:text-[11px] text-gray-700'>Your max bid : Rs. {bid.bidAmount.toFixed(2)}</p>

          {/* Increase Bid Input */}
          <div className="flex">
            <div className='flex w-full h-fit'>
              <input
                type="text"
                className="w-3/5 h-6 sm:h-8 p-2 my-2 border border-gray-300 rounded placeholder:text-[10px] sm:placeholder:text-[13px]"
                placeholder='Rs.'
                value={bidAmount}
                onChange={handleInputChange}
              />
              <button className="px-5 sm:px-6 py-1 text-[10px] sm:text-[13px] h-6 sm:h-8 my-2 text-white bg-[#480C7B] rounded-[5px] ml-auto hover:bg-purple-800" onClick={handleIncreaseBid}>
                Increase Bid
              </button>
            </div>
          </div>

          <p className='mb-2 text-[8px] sm:text-[11px] text-gray-700'>Enter Rs. {minBidAmount.toFixed(2)} or more</p>
        </div>




        {/* Close Button */}
        <div className='flex justify-end mt-1'>
          <button className="text-[11px] sm:text-[14px] text-[#480C7B] hover:text-purple-500" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncreaseBid;
