import React, { useState, useEffect } from 'react';
import Header from '../../components/layout/Header/Header';
import SidebarBuyer from '../../components/layout/SidebarBuyer/SidebarBuyer';
import Breadcrumb from '../../components/layout/Breadcrumb/Breadcrumb';
import axiosInstance from '../../utils/axiosInstance';
import AddBid from '../../components/layout/Bid/AddBid';
import { useNavigate } from 'react-router-dom';
import CountdownTimer from '../../components/Cards/CountdownTimer';

function Watchlist() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);  
  const[isModalOpen, setIsModalOpen] = useState(false);
  const [breadcrumb, setBreadcrumb] = useState('Lansuwa > ');         
  const [watchlist, setWatchlist] = useState([]);
  const [timeLeft, setTimeLeft] = useState('');
  const[selectedAuctionId, setSelectedAuctionId] = useState(null);
  const navigate = useNavigate();
  
  // Toggle sidebar visibility
  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Handle breadcrumb change
  const handleBreadcrumbChange = (newBreadcrumb) => {
    setBreadcrumb(newBreadcrumb); 
  }; 
  
  const handleOpenModal = (auctionId) => {
    setSelectedAuctionId(auctionId); 
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };   
  
  const handlePlaceBid = (auctionId, bidAmount) => {
    console.log(`Auction ID: ${auctionId}, Bid Amount: Rs.${bidAmount}`);
    setIsModalOpen(false); 
    navigate('/mybids');
  };
  
  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await axiosInstance.get('/api/watchlist/MyWatchlist');
        const watchlistWithBidData = await Promise.all(
          response.data.map(async (item) => {
            const [highestBidResponse, bidCountResponse] = await Promise.all([
              axiosInstance.get(`/api/Bid/GetHighestBid?auctionId=${item.auction?.auctionId}`),
              axiosInstance.get(`/api/Bid/GetBidCount?auctionId=${item.auction?.auctionId}`)
            ]);

            return {
              ...item,
              highestBidAmount: highestBidResponse.data,
              bidCount: bidCountResponse.data
            };
          })
        );

        setWatchlist(watchlistWithBidData);
        console.log('Watchlist with bid data:', watchlistWithBidData);
      } catch (error) {
        console.error('Error fetching watchlist:', error);
      }
    };

    fetchWatchlist();
  }, []);

  const handleDeleteWatchlistItem = async (auctionId) => {

    const confirmDelete = window.confirm("Are you sure you want to remove this item from your watchlist?");
    if (confirmDelete) {
      try {
        await axiosInstance.delete(`/api/watchlist/deleteWatchlistItem/${auctionId}`);
        setWatchlist((prevWatchlist) => prevWatchlist.filter((item) => item.auction?.auctionId !== auctionId));
        console.log(`Deleted item with auctionId: ${auctionId}`);
      }
      catch (error) {
        console.error('Error deleting watchlist item:', error);
      }
    }
  };
    
 
  
  const endTime = watchlist?.auction?.startingBid;
  const calculateTimeLeft = (endTime) => {
    console.log(endTime);
    const currentTime = new Date();
    const remainingTime = new Date(endTime) - currentTime;
    
    if (remainingTime <= 0) return 'Auction ended';

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);

    return `${days > 0 ? `${days}d ` : ''}${hours}h ${minutes} min`;
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

          <div className={`flex-col flex-grow bg-[#F5F0FA] h-full pl-60 pr-8 pb-8 pt-36 ${isSidebarVisible ? 'w-3/4' : 'w-full'}`}>

          {watchlist.length > 0 ? (
            watchlist.map((item, index) => {
              const auctionImageUrl = item.auction?.product?.imageUrls?.[0]
                ? import.meta.env.VITE_BASE_URL + item.auction.product.imageUrls[0]
                : "https://via.placeholder.com/150";
              return (
                <div key={index} className='grid grid-cols-4 px-8 py-6 mx-5 mb-4 bg-white shadow-lg w-fit h-fit rounded-2xl'>
                  <div className='w-32 h-32 col-start-1 mr-12 overflow-hidden ms-4 rounded-xl'>
                    <img src={auctionImageUrl} alt={`Item ${index + 1}`} />
                  </div>
                  <div className='grid col-span-2 col-start-2 grid-rows-2 mx-6'>
                    <div className='row-start-1'>
                      <h3 className="text-[22px] font-medium flex justify-center">{item.auction?.product?.name}</h3>
                    </div>
                    <div className='grid grid-cols-2 row-start-2 -mt-3'>
                      <div className='col-start-1 pt-1 ps-4'>
                        <p className='text-[15px]'>Rs. <span className='text-[17px] font-medium'>{item.highestBidAmount.toFixed(2)}</span></p>
                        <p className='text-[15px] mt-1'>Shipping: {item.auction?.product?.shippingfee === 0 ? 'Free Shipping' : `Rs. ${item.auction?.product?.shippingfee.toFixed(2)}`}</p>
                      </div>
                      <div className='col-start-2 pt-1 border-l border-solid ps-4 border-slate-300'>
                        <p className='text-[15px]'>{item.bidCount} bid(s)</p>
                        <p className='text-[15px] mt-1'><CountdownTimer endTime={item.auction?.endTime} /><span className='font-medium text-red-500'>{item.timeLeft}</span></p>
                      </div>
                    </div>
                  </div>
                  <div className='col-start-4 mr-4'>
                    <button className='w-44 h-8 mt-3 text-[14px] bg-[#480C7B] text-white font-normal rounded-xl' onClick={() => handleOpenModal(item.auction?.auctionId)}>Place Bid</button>
                    <button className='w-44 h-8 mt-3 text-[14px] bg-white text-[#480C7B] border border-[#480C7B] font-normal rounded-xl'>View Similar Items</button>
                    <button className='w-44 h-8 mt-3 text-[14px] bg-white text-[#480C7B] border border-[#480C7B] font-normal rounded-xl' onClick={() => handleDeleteWatchlistItem(item.auction?.auctionId)}>Remove</button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Your watchlist is empty.</p>
            </div>
          )}
          {isModalOpen && selectedAuctionId && (
            <AddBid onClose={handleCloseModal} auctionId={selectedAuctionId} onPlaceBid={handlePlaceBid} />
          )}
          </div>

        </div>

      </React.Fragment>
    </div>
  )
}

export default Watchlist