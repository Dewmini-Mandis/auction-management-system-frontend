import React, { useState, useEffect } from 'react';
import SidebarBuyer from '../../components/layout/SidebarBuyer/SidebarBuyer';
import Header from '../../components/layout/Header/Header';
import IncreaseBid from '../../components/layout/Bid/IncreaseBid';
import Breadcrumb from '../../components/layout/Breadcrumb/Breadcrumb';
import axios from 'axios'

function MyBids() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);    // State for sidebar visibility
  const [breadcrumb, setBreadcrumb] = useState('Lansuwa > ');         // State for breadcrumb
  const [isIncreaseModalOpen, setIsIncreaseModalOpen] = useState(false);  // State for modal
  const [bids, setBids] = useState([]);  // State for bids data

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



  useEffect(() => {
    // Function to fetch bids data from the backend
    axios.get('https://localhost:7010/api/MyBids/GetMyBids', {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZXdtaW5pbmF2b2R5YTIwMDJAZ21haWwuY29tIiwiVXNlcklkIjoiMiIsIlJvbGUiOiJidXllciIsImV4cCI6MTcyOTgzOTg4NSwiaXNzIjoiWW91ckFwcCIsImF1ZCI6IllvdXJBcHBVc2VycyJ9.62i7ori6uMWLOe8rfl3Ip4E4NaXkIC3Qp6kHkj48GVc` // Correct token retrieval ${localStorage.getItem('token')}
      }
    })
      .then(response => {
        setBids(response.data); // Set the fetched data to state
        console.log('Fetched bids:', response.data);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          console.error('Unauthorized! Redirecting to login...');
          // Redirect to login page or show an error message
          // window.location.href = '/login'; 
        } else {
          console.error('Error fetching bids:', error.message);
        }
      });
    // Call the function when the component is loaded
  }, []);
  
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
          <div className={`flex flex-col flex-grow bg-[#F5F0FA] p-8 ${isSidebarVisible ? 'w-3/4' : 'w-full'}`}>

            <h1 className="flex justify-center mb-4 text-lg font-medium text-gray-800">My Bids</h1>
           

          <table className="min-w-full bg-white ">
          <thead className='bg-[#5f288f]'>
    <tr>
      <th className="px-6 py-2 text-sm font-medium text-left text-white border border-slate-300">Product Name</th>
      <th className="px-6 py-2 text-sm font-medium text-left text-white border border-slate-300">My Current Bid</th>
      <th className="px-6 py-2 text-sm font-medium text-left text-white border border-slate-300">Current Highest Bid</th>
      <th className="px-6 py-2 text-sm font-medium text-left text-white border border-slate-300">Time Left</th>
      <th className="px-6 py-2 text-sm font-medium text-left text-white border border-slate-300">Action</th>

    </tr>
  </thead>
  
  <tbody>
    {bids.map((bid) => (
      <tr key={bid.bidId} className="border border-slate-100">
        <td className="px-6 py-2 text-[14px] font-medium text-black border border-slate-300">{bid.productName}</td>
        <td className="px-6 py-2 text-[14px] text-black border border-slate-300">Rs. {bid.bidAmount.toFixed(2)}</td>
        <td className="px-6 py-2 text-[14px] text-black border border-slate-300">Rs. {bid.highestBidAmount.toFixed(2)}</td>
        <td className="px-6 py-2 text-[14px] font-medium text-red-500 border border-slate-300">{bid.timeLeft}</td>
        <td className="px-6 py-2 border border-slate-300">
          <button
            className="px-4 py-1 text-black font-medium rounded hover:bg-slate-200 hover:border-slate-200 text-[12px] border border-slate-800"
            onClick={handleOpenIncreaseModal}
          >
            Increase Max Bid
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

            {/* Increase Bid Modal */}
            {isIncreaseModalOpen && <IncreaseBid onClose={handleCloseIncreaseModal} />}
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default MyBids;
