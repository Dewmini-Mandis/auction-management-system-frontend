import React, { useState } from 'react';
import SidebarBuyer from '../../components/layout/SidebarBuyer/SidebarBuyer';
import Header from '../../components/layout/Header/Header';
import IncreaseBid from '../../components/layout/Bid/IncreaseBid';
import Breadcrumb from '../../components/layout/Breadcrumb/Breadcrumb';

function MyBids() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);    // State for sidebar visibility
  const [breadcrumb, setBreadcrumb] = useState('Lansuwa > ');         // State for breadcrumb
  const [isIncreaseModalOpen, setIsIncreaseModalOpen] = useState(false);  // State for modal

  // Toggle sidebar visibility
  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Handle breadcrumb change
  const handleBreadcrumbChange = (newBreadcrumb) => {
    setBreadcrumb(newBreadcrumb);
  };

  // Open the modal
  const handleOpenIncreaseModal = () => {
    setIsIncreaseModalOpen(true);
  };

  // Close the modal
  const handleCloseIncreaseModal = () => {
    setIsIncreaseModalOpen(false);
  };

  return (
    <div className="w-full h-screen parent-container">
      <React.Fragment>
        {/* Full-width Header */}
        <Header
          toggleSidebarVisibility={toggleSidebarVisibility}
          isSidebarVisible={isSidebarVisible}
        />

        <Breadcrumb breadcrumb={breadcrumb} />

        {/* Flex container for Sidebar and Content */}
        <div className="flex w-full h-full">
          {/* Sidebar */}
          <SidebarBuyer
            isSidebarVisible={isSidebarVisible}
            onBreadcrumbChange={handleBreadcrumbChange}
            className={`${isSidebarVisible ? 'w-1/4' : 'w-0'}`} // Adjust width based on sidebar visibility
          />

          {/* Main Content */}
          <div className={`flex flex-col flex-grow bg-[#F5F0FA] p-4 ${isSidebarVisible ? 'w-3/4' : 'w-full'}`}>
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
        </div>
      </React.Fragment>
    </div>
  );
}

export default MyBids;
