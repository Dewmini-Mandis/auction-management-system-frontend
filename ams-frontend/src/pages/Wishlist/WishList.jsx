import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import AddBid from '../../components/layout/Bid/AddBid';

const WishList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate(); // Initialize navigate

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    }; 

    // Define handlePlaceBid to handle the bid action
  const handlePlaceBid = (auctionId, bidAmount) => {
    console.log(`Auction ID: ${auctionId}, Bid Amount: Rs.${bidAmount}`);
    setIsModalOpen(false); 
    navigate('/mybids');
  };
    
  return (
    <div className='w-full h-full '>
        <button
          className="px-4 py-2 mt-4 text-white transition bg-purple-600 rounded hover:bg-purple-800"
          onClick={handleOpenModal}
        >
          Place Bid
        </button>

        {isModalOpen && <AddBid onClose={handleCloseModal} auctionId="4" onPlaceBid={handlePlaceBid}/>}
    </div>
  )
}

export default WishList  
