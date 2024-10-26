import React, { useState, useEffect } from 'react';
import SidebarBuyer from '../../components/layout/SidebarBuyer/SidebarBuyer';
import Header from '../../components/layout/Header/Header';
import IncreaseBid from '../../components/layout/Bid/IncreaseBid';
import Breadcrumb from '../../components/layout/Breadcrumb/Breadcrumb';
import deleteicon from '../../assets/images/deleteicon.png';
import axiosInstance from '../../utils/axiosInstance';

function MyBids() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);    // State for sidebar visibility
  const [breadcrumb, setBreadcrumb] = useState('Lansuwa > ');         // State for breadcrumb
  const [isIncreaseModalOpen, setIsIncreaseModalOpen] = useState(false);  // State for modal
  const [bids, setBids] = useState([]);  // State for bids data
  const [selectedBid, setSelectedBid] = useState(null); // State for selected bid details

  // Toggle sidebar visibility
  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Handle breadcrumb change
  const handleBreadcrumbChange = (newBreadcrumb) => {
    setBreadcrumb(newBreadcrumb);
  };

  // Open Increase Bid modal with selected bid details
  const handleOpenIncreaseModal = (bid) => {
    setSelectedBid(bid);  // Set the selected bid details
    setIsIncreaseModalOpen(true);
  };

  




  useEffect(() => {
    axiosInstance.get('/api/Bid/GetMyBids')
      .then(response => {
        setBids(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []); // Add [] to avoid re-running


  const handleDeleteBid = (bidId) => {
        // URL - /api/Bid/GetMyBids

            // Show a confirmation dialog before deleting
            const confirmDelete = window.confirm("Are you sure you want to delete this bid?");

            if (confirmDelete) {
              // fetch data using axios instance
              axiosInstance
                .delete(`/api/Bid/DeleteBid/${bidId}`)
                .then((response) => {
                  setBids(bids.filter(bid => bid.bidId !== bidId));
                })
                .catch(error => {
                  console.error("There was an error deleting the bid:", error);
                });
            }
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
          <div className={`flex flex-col flex-grow bg-[#F5F0FA] p-8 ${isSidebarVisible ? 'w-3/4' : 'w-full'}`}>

            <h1 className="flex justify-center mb-4 text-lg font-medium text-gray-800">My Bids</h1>
           

          <table className="min-w-full bg-white ">
          <thead className='bg-[#5f288f]'>
    <tr>
      <th className="px-6 py-2 text-sm font-medium text-left text-white border border-slate-300">Product Name</th>
      <th className="px-6 py-2 text-sm font-medium text-left text-white border border-slate-300">My Current Bid</th>
      <th className="px-6 py-2 text-sm font-medium text-left text-white border border-slate-300">Current Highest Bid</th>
      <th className="px-6 py-2 text-sm font-medium text-left text-white border border-slate-300">Time Left</th>
      <th className="px-6 py-2 text-sm font-medium text-left text-white border border-slate-300"></th>
      <th className="px-6 py-2 text-sm font-medium text-left text-white border border-slate-300"></th>
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
            onClick={() => handleOpenIncreaseModal(bid)}
          >
            Increase Bid
          </button>
        </td>
        <td className="px-4 py-2 border border-slate-300">
          <button
            className="px-3 py-1 hover:opacity-50" title="Delete"
            onClick={() => handleDeleteBid(bid.bidId)}          >
             <img className="w-5 h-5" src={deleteicon} alt="delete" />
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

            {/* Increase Bid Modal */}
            {isIncreaseModalOpen && <IncreaseBid bid={selectedBid} onClose={() => setIsIncreaseModalOpen(false)} />}
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default MyBids;
