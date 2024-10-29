import React, { act, useEffect, useState } from 'react';
import Header from '../../components/layout/Header/Header';
import CountdownTimer from '../../components/Cards/CountdownTimer';
import axiosInstance from '../../utils/axiosInstance';
import { useLocation, useNavigate } from 'react-router-dom';
import AuctionCard from '../../components/Cards/AucrionCard';
import Loading from '../../components/Loading/Loading';
import Footer from '../../components/layout/Footer/Footer';


import rectangle122 from '../../assets/images/Rectangle 122.png';
import rectangle123 from '../../assets/images/Rectangle 123.png';
import rectangle124 from '../../assets/images/Rectangle 124.png';
import rectangle125 from '../../assets/images/Rectangle 125.png';
import rectangle126 from '../../assets/images/Rectangle 126.png';
import rectangle127 from '../../assets/images/Rectangle 127.png';


const AuctionDetails = () => {

  const location = useLocation();
  const auctionId = location.state?.auctionId || '';
  const [loading, setLoading] = useState(false);

  // useState to store the auction data
  const [auction, setAuction] = useState({});
  const [relatedAuctions, setRelatedAuctions] = useState([]);

  useEffect(() => {
    setLoading(true);
    // First request to get auction details
    axiosInstance.get(`/api/Auctions/GetAuctionById?auctionId=${auctionId}`)
      .then((response) => {
        setAuction(response.data);
        // Check if the auction has a valid category before sending the second request
        const categoryId = response.data.product?.category?.categoryId;
        if (categoryId) {
          // Second request to get related auctions
          return axiosInstance.get(`/api/Auctions/GetAuctionsByCategory?categoryId=${categoryId}`);
        } else {
          throw new Error('Category ID is not available for related auctions.');
        }
      })
      .then((relatedResponse) => {
        setRelatedAuctions(relatedResponse.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [auctionId]);




  return (
    <React.Fragment>
      <Header />

      {loading && (
        <Loading />
      )}

      <div className="mx-6 bg-white rounded-lg lg:pt-[120px]">
        <div className="bg-gray-50 px-4 py-2 border-b">
          <span className="text-sm text-[C6C6C6] border-bottom: 0.8px solid ">Lansuwa &gt; Electronics &gt; Laptops &gt; Win 11 Pro Intel Celeron J4125 15.6 Inch Windows11 Pro 1920*1080 ame Office Laptop 12GB RAM ....</span>
        </div>


        {/* Main Content */}
        <div className=" px-3 flex flex-cols-2 md:flex-row py-2">
          {/* Left section: Product images */}
          <div className="md:w-1/2">
            <img
              src={rectangle122}
              alt="Rectangle 122"
              className="w-full h-60 object-cover "
            />
            <div className="flex space-x-2 mt-2">
              <img src={rectangle123} alt="Rectangle123" className="w-16 h-16 object-cover " />
              <img src={rectangle124} alt="Rectangle124" className="w-16 h-16 object-cover " />
              <img src={rectangle125} alt="Rectangle125" className="w-16 h-16 object-cover " />
              <img src={rectangle126} alt="Rectangle126" className="w-16 h-16 object-cover " />
              <img src={rectangle127} alt="Rectangle127" className="w-16 h-16 object-cover " />
            </div>
          </div>


          {/* Right section: Product details */}
          <div className=" mx-5  bg-white ">
            <div className="bg-gray-50 px-4 py-2 border-b">
              <span className="text-3xl font-semibold text-[C6C6C6] border-bottom: 0.8px solid ">
                {auction.product?.name}
              </span>
            </div>


            <div className="bg-gray-50 px-4 py-2 border-b">
              <span className="text-sm text-[C6C6C6] border-bottom: 0.8px solid col-span-2 ">


              </span>
              <div className="text-sm text-gray-500 mt-1">
                <div className="flex">
                  {/* show No of bidders if it is null show no any bidders*/}
                  {auction.bids ? <div>{auction.bids.length} bids</div> : <div>No any bidders yet</div>}
                </div>
              </div>
            </div>


            {/* Seller Info */}
            <div className="bg-gray-50 px-4 py-2 border-b">
              <span className="text-sm text-[C6C6C6] border-bottom: 0.8px solid ">
                <div className="mt-4">
                  <p className="text-gray-700">Seller: <span className="font-medium"> <button className="text-black hover:underline mt-2">kamal gunaratne (1056)</button></span></p>
                  <button className="text-black hover:underline mt-2">Seller's other item | Contact seller</button>
                </div>

              </span>
            </div>


            {/* Bidding and Pricing */}
            <div className="bg-gray-50 px-4 py-2 border-b">
              <span className="text-sm text-[C6C6C6] border-bottom: 0.8px solid ">

                <div className="mt-8 mb-8 flex">
                  <div className="text-3xl font-semibold text-black me-16">LKR {auction.startingBid}</div>
                  <CountdownTimer endTime={auction.endTime} />

                </div>
                {/* Action Buttons */}
                <div className="mt-6 mb-8 flex space-x-4">
                  <button className="px-6 py-2 bg-[#480C7B]  text-white rounded-lg hover:bg-[#480C7B]">Place bid</button>
                  <button className="px-6 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-300 border-black">Add to watchlist</button>
                </div>
              </span>
            </div>


            {/* Shipping and Delivery */}
            <div className="mt-4 text-gray-600">

              <div className="bg-gray-50 px-4 py-2 border-b">
                <span className="text-sm text-[C6C6C6] border-bottom: 0.8px solid ">
                  <div className="mt-4 p-4 bg-gray-100 rounded-md">
                    <p className="text-gray-700 font-semibold text-lg mb-2">Shipping and Delivery</p>
                    <div className="text-gray-500">
                      <p className="mb-3">
                        <strong>Shipping Method:</strong> <span className="font-medium">{auction.shippingMethod}</span>
                        <br />
                        We strive to use reliable carriers to ensure that your package arrives safely and on time.
                        Delivery times may vary based on the chosen shipping method.
                      </p>

                      <p className="mb-3">
                        <strong>Package Weight:</strong> <span className="font-medium">{auction.packageWeight}</span>
                        <br />
                        Note that the weight of the package can impact both shipping costs and delivery timeframes.
                        Please consider this when reviewing your shipping options.
                      </p>

                      <p className="mb-3">
                        <strong>Package Dimensions:</strong> <span className="font-medium">{auction.packageDimension}</span>
                        <br />
                        Providing accurate dimensions helps us select the most suitable shipping method
                        and ensures that your item is packaged properly.
                      </p>

                      <p className="mb-3">
                        <strong>Irregular Dimensions:</strong> <span className="font-medium">{auction.irregularDimension ? 'Yes' : 'No'}</span>
                        <br />
                        If your package has irregular dimensions, it may be subject to different shipping rates or methods.
                        Please reach out if you have questions regarding irregularly shaped items.
                      </p>

                      <p>
                        <strong>Customer Support:</strong>
                        <br />
                        For detailed information about shipping times and policies, feel free to contact our customer service team.
                        We are here to assist you with any inquiries regarding your order's delivery process and ensure a smooth shipping experience.
                      </p>
                    </div>
                  </div>
                </span>

              </div>

            </div>
          </div>
        </div>


        {/* Related Items */}
        <div className="lg:px-28 mb-16">
          <h1 className="text-[35px] font-medium text-gray-700 md:mt-20 md:mb-10">Related Auctions</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

            {relatedAuctions.map((relatedAuction) => (
              <AuctionCard key={relatedAuction.auctionId} auction={relatedAuction} />
            ))}
          </div>
        </div>


        {/* Description */}

      </div>

      <Footer />

    </React.Fragment>
  );
};

export default AuctionDetails;