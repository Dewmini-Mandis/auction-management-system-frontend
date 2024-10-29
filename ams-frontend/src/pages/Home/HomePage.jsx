import React, { useEffect, useState } from 'react';

// importing components
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import axiosInstance from '../../utils/axiosInstance';
import AuctionCard from '../../components/Cards/AucrionCard';
import CategoryCard from '../../components/Cards/CategoryCard';
import Loading from '../../components/Loading/Loading';

// importing images
import cImage from '../../assets/images/carousel/carousel-images/Carousel-Image-1.png';
import back from '../../assets/images/carousel/icons/back.png';
import forword from '../../assets/images/carousel/icons/forword.png';
import bannerImage from '../../assets/images/banner-images/banner-1.png';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [auctions, setAuctions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // Array of images
  const items = [cImage, cImage, cImage, cImage];

  // Function to show the previous image
  const Back1 = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  // Function to show the next image
  const Back = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {

    setLoading(true);

    axiosInstance.get('/api/Auctions/GetAllAuctions')
      .then((response) => {
        setAuctions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axiosInstance.get('/api/Category/GetTopLevelCategories')
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      }
      );


  }, []);


  return (
    <React.Fragment>
      <Header />

      {loading && (
        <Loading />
      )}

      <div id="controls-carousel" className="relative w-full pt-20" data-carousel="static">
        <div className="relative h-56 overflow-hidden md:h-auto">
          <div className="flex">

            {/* Display the active image based on the current index */}
            <img src={items[currentIndex]} alt={`Untitled-${currentIndex + 1}`} className="w-full flex-none object-cover" />

            {/* Back button */}
            <button
              onClick={Back1}
              className="absolute p-2 text-2xl  transform -translate-y-1/2 left-2 top-1/2"
            >
              <img src={back} alt="back" />
            </button>

            {/* Next button */}
            <button
              onClick={Back}
              className="absolute p-2 text-2xl transform -translate-y-1/2 right-2 top-1/2"
            >
              <img src={forword} alt="forword" />
            </button>

          </div>
        </div>
      </div>


      <div className="lg:px-28">
        <h1 className="text-[35px] font-medium text-gray-700 md:mt-20 md:mb-10">Featured Auctions</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {auctions.map((auction) => (
            <AuctionCard key={auction.auctionId} auction={auction} />
          ))}
        </div>
      </div>


      <div className='mt-24'>
        <img src={bannerImage} alt="Untitled 2" className="w-full" />
      </div>

      <div className="lg:px-28 lg:mb-16">
        <h1 className="text-[35px] font-medium text-gray-700 md:mt-20 md:mb-10">Auction Categories</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.categoryId} category={category} />
          ))}

        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}
export default HomePage;