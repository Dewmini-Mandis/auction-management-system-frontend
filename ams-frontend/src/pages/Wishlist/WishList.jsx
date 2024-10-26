import React from 'react'
import { useState } from 'react';
import AddBid from '../../components/layout/Bid/AddBid';

const WishList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    }; 
    
  return (
    <div className='w-full h-full '>
        <button
          className="px-4 py-2 mt-4 text-white transition bg-purple-600 rounded hover:bg-purple-800"
          onClick={handleOpenModal}
        >
          Place Bid
        </button>

        {isModalOpen && <AddBid onClose={handleCloseModal} />}
    </div>
  )
}

export default WishList