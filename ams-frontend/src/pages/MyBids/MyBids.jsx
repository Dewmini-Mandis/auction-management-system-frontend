import React, { useState, useEffect } from 'react';
import SidebarBuyer from '../../components/layout/SidebarBuyer/SidebarBuyer';
import Header from '../../components/layout/Header/Header';
import IncreaseBid from '../../components/layout/Bid/IncreaseBid';
import Breadcrumb from '../../components/layout/Breadcrumb/Breadcrumb';
import deleteicon from '../../assets/images/deleteicon.png';
import axiosInstance from '../../utils/axiosInstance';

function MyBids() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);    
  const [breadcrumb, setBreadcrumb] = useState('Lansuwa > ');         
  const [isIncreaseModalOpen, setIsIncreaseModalOpen] = useState(false);  
  const [bids, setBids] = useState([]); 
  const [selectedBid, setSelectedBid] = useState(null); 

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
    setSelectedBid(bid);  
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
  }, []);


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

  const categorizeAndSortBids = () => {
    const wonBids = bids.filter(bid => bid.timeLeft === '0h 0 min' && bid.bidAmount === bid.highestBidAmount);
    const activeBids = bids.filter(bid => bid.timeLeft !== '0h 0 min');
    const endedBids = bids.filter(bid => bid.timeLeft === '0h 0 min' && bid.bidAmount !== bid.highestBidAmount);

    return [...wonBids, ...activeBids, ...endedBids];
  };



  return (
    <div className="w-full h-screen parent-container">
      <React.Fragment>
       
        <Header
          toggleSidebarVisibility={toggleSidebarVisibility}
          isSidebarVisible={isSidebarVisible}
        />

        <Breadcrumb breadcrumb={breadcrumb} />

       
        <div className="flex w-full h-full ">

          <SidebarBuyer
            isSidebarVisible={isSidebarVisible}
            onBreadcrumbChange={handleBreadcrumbChange}
            className={`${isSidebarVisible ? 'w-1/4' : 'w-0'}`}
          />

          <div className={`flex-col flex-grow bg-[#F5F0FA] h-fit pl-60 pr-8 pb-8 pt-32 ${isSidebarVisible ? 'w-3/4' : 'w-full'}`}>

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
                {categorizeAndSortBids().map((bid) => (

                  <tr key={bid.bidId} className="border border-slate-100">
                    <td className="px-6 py-2 text-[14px] font-medium text-black border border-slate-300">{bid.productName}</td>
                    <td className="px-6 py-2 text-[14px] text-black border border-slate-300">Rs. {bid.bidAmount.toFixed(2)}</td>
                    <td className="px-6 py-2 text-[14px] text-black border border-slate-300">Rs. {bid.highestBidAmount.toFixed(2)}</td>
                    <td className="px-6 py-2 text-[14px] font-medium text-black border border-slate-300">
                      {bid.timeLeft === '0h 0 min'
                        ? (bid.bidAmount === bid.highestBidAmount
                          ? (
                            <>
                              <span className='text-orange-500'>Auction Ended</span>
                              <span className="block text-orange-500">you Won!</span>
                            </>
                          )
                          : "Auction Ended")
                        : bid.timeLeft}
                    </td>
                    <td className="px-6 py-2 border border-slate-300">
                      {bid.timeLeft !== '0h 0 min' ? (
                        <button
                          className="px-4 py-1 text-black font-medium rounded hover:bg-slate-200 hover:border-slate-200 text-[12px] border border-slate-800"
                          onClick={() => handleOpenIncreaseModal(bid)}
                        >
                          Increase Bid
                        </button>
                      ) : (
                        bid.bidAmount === bid.highestBidAmount && (

                          <button
                            className="px-4 py-1 text-white bg-orange-600 font-medium rounded hover:bg-orange-500 text-[12px]"
                            onClick={() => handleMakePayment(bid.bidId)}  // Add a function to handle payment
                          >
                            Make Payment
                          </button>
                        )
                      )}
                    </td>
                    <td className="px-4 py-2 border border-slate-300">
                      {bid.timeLeft !== '0h 0 min' && (
                        <button
                          className="px-3 py-1 hover:opacity-50" title="Delete"
                          onClick={() => handleDeleteBid(bid.bidId)}          >
                          <img className="w-5 h-5" src={deleteicon} alt="delete" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {isIncreaseModalOpen && <IncreaseBid bid={selectedBid} onClose={() => setIsIncreaseModalOpen(false)} />}
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default MyBids;
