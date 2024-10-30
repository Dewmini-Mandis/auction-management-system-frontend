import React, { useState, useEffect } from 'react';
import rectangle280 from '../../../src/assets/images/Rectangle 280.png';
import rectangle28 from '../../../src/assets/images/Rectangle 280 (1).png';
import rectangle281 from '../../../src/assets/images/Rectangle 280 (2).png';
import Line51 from '../../../src/assets/images/Line 51.png';
import Header from '../../components/layout/Header/Header';
import SidebarBuyer from '../../components/layout/SidebarBuyer/SidebarBuyer';
import Breadcrumb from '../../components/layout/Breadcrumb/Breadcrumb';
import axiosInstance from '../../utils/axiosInstance';

function Watchlist() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);    
  const [breadcrumb, setBreadcrumb] = useState('Lansuwa > ');         
  const [watchlist, setWatchlist] = useState([]);
  const [auctionDetails, setAuctionDetails] = useState(null);
  const [timeLeft, setTimeLeft] = useState('');


  // Toggle sidebar visibility
  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Handle breadcrumb change
  const handleBreadcrumbChange = (newBreadcrumb) => {
    setBreadcrumb(newBreadcrumb); 
  }; 
  
  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await axiosInstance.get('/api/watchlist/MyWatchlist');
        setWatchlist(response.data);
        console.log('Watchlist:', response.data);
        // Optionally, you can set auction details based on the fetched watchlist
        if (response.data.length > 0) {
          setAuctionDetails(response.data[0].auction); // Assuming you're interested in the first auction
        }
      } catch (error) {
        console.error('Error fetching watchlist:', error);
      }
    };

    fetchWatchlist();

    const intervalId = setInterval(() => {
      if (auctionDetails?.endTime) {
        setTimeLeft(calculateTimeLeft(auctionDetails.endTime));
      }
    }, 1000); // Update time left every second

    return () => clearInterval(intervalId);
  }, [auctionDetails?.endTime]);

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
  // useEffect(() => {
  //   const fetchAuctionDetails = async () => {
  //     try {
  //       const auctionId = watchlist?.auction?.auctionId;
  //       const response = await axiosInstance.get(`/api/auctions/GetAuctionById`, {
  //         params: { auctionId }
  //       });
  //       setAuctionDetails(response.data);
  //       console.log("Auction Details:", response.data); 
  //     } catch (error) {
  //       console.error("Error fetching auction details:", error);
  //     }
  //   };

  //   fetchAuctionDetails();
  // }, [watchlist]);
  
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
              watchlist.map((item, index) => (
                <div key={index} className='grid grid-cols-4 px-8 py-6 mx-5 mb-4 bg-white shadow-lg w-fit h-fit rounded-2xl'>
                  <div className='w-32 h-32 col-start-1 mr-12 overflow-hidden ms-4 rounded-xl'>
                    <img src={rectangle280} alt={`Item ${index + 1}`} />
                  </div>
                  <div className='grid col-span-2 col-start-2 grid-rows-2 mx-6'>
                    <div className='row-start-1 '>
                      <h3 className ="text-[22px] font-medium flex justify-center">{item.auction?.product?.name}</h3>
                    </div>
                    <div className='grid grid-cols-2 row-start-2 -mt-3'>
                      <div className='col-start-1 pt-1 ps-4'>
                        <p className='text-[15px]'>Rs. <span className='text-[17px] font-medium'>{item.auction?.startingBid}</span></p>
                        <p className='text-[15px] mt-1'>Shipping : Rs.{item.auction?.shippingfee}</p>
                      </div>
                      <div className='col-start-2 pt-1 border-l border-solid ps-4 border-slate-300'>
                        <p className='text-[15px]'>{item.auction?.product?.name} bid(s)</p>
                        <p className='text-[15px] mt-1'>Ends in <span className='font-medium text-red-500'>{timeLeft}</span></p>
                        <p className='text-[15px] mt-1'>{item.auction?.product?.name}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-start-4 mr-4'>
                    <button className='w-44 h-8 mt-3 text-[14px] bg-[#480C7B] text-white font-normal rounded-xl'>Place Bid</button>
                    <button className='w-44 h-8 mt-3 text-[14px] bg-white text-[#480C7B] border border-[#480C7B] font-normal rounded-xl'>View Similar Items</button>
                    <button className='w-44 h-8 mt-3 text-[14px] bg-white text-[#480C7B] border border-[#480C7B] font-normal rounded-xl'>Contact Seller</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Your watchlist is empty.</p>
              </div>
            )}
          
          </div>
        </div>

      </React.Fragment>
    </div>
  )
}

export default Watchlist
