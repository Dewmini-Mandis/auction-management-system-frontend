import React, { useState } from 'react';
import IncreaseBid from '../../components/layout/Bid/IncreaseBid';

const MyBids = () => {
  const [isIncreaseModalOpen, setIsIncreaseModalOpen] = useState(false);

  const handleOpenIncreaseModal = () => {
    setIsIncreaseModalOpen(true);
  };

  const handleCloseIncreaseModal = () => {
    setIsIncreaseModalOpen(false);
  };

  return (
    <div className="w-full h-full p-4">
      <h1 className="mb-4 text-2xl font-bold">My Bids</h1>

      {/* Bid Item */}
      <div className="flex items-center justify-between p-4 mb-4 border border-gray-200 rounded-lg">
        <div>
          <h2 className="text-lg font-medium">Louis Vuitton Monogram Mini Handbag</h2>
          <p className="text-sm text-gray-500">Current bid: Rs. 25000.00</p>
        </div>
        <button
          className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-800"
          onClick={handleOpenIncreaseModal}
        >
          Increase Bid
        </button>
      </div>

      {/* Increase Bid Modal */}
      {isIncreaseModalOpen && <IncreaseBid onClose={handleCloseIncreaseModal} />}
    </div>
  );
};

export default MyBids;
