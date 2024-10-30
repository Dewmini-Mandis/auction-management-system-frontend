import React, { useState, useEffect } from "react";
import Header from "../../../components/layout/Header/Header";
import cImage from '../../../assets/images/carousel/carousel-images/Carousel-Image-1.png'; 
import Loading from '../../../components/Loading/Loading';
import CategoryCard from "../../../components/Cards/CategoryCard";
import axiosInstance from "../../../utils/axiosInstance";
import AuctionCard from "../../../components/Cards/AucrionCard";
import Footer from "../../../components/layout/Footer/Footer";


function MainCategories() {

  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [auctions, setAuctions] = useState([]);


  useEffect(() => {


    setLoading(true);
    axiosInstance.get('/api/Category/GetTopLevelCategories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      }
      );

      // get all auctions
      axiosInstance.get('/api/Auctions/GetAllAuctions')
      .then((response) => {
        setAuctions(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });



  }, []);


  return (
    <React.Fragment>

      {loading && (
        <Loading />
      )}
      <Header />
      <div className="relative w-full pt-[110px] lg:mb-20">



        <div className="lg:px-28 lg:mb-16">
          <h1 className="text-[35px] font-medium text-gray-700 md:mt-10 md:mb-8 ms-3">Bid by Categories</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((category) => (
              <CategoryCard key={category.categoryId} category={category} />
            ))}

          </div>
        </div>

        <img src={cImage} alt="carousel" />


        <div className="lg:px-28">
        <h1 className="text-[35px] font-medium text-gray-700 md:mt-20 md:mb-10">Top Auctions</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {auctions.map((auction) => (
            <AuctionCard key={auction.auctionId} auction={auction} />
          ))}
        </div>
      </div>


      </div>
      <Footer />
    </React.Fragment>
  );
}

export default MainCategories;