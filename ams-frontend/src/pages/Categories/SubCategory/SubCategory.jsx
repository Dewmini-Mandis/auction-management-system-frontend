import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../components/layout/Header/Header";
import cImage from '../../../assets/images/carousel/carousel-images/Carousel-Image-1.png';
import Loading from '../../../components/Loading/Loading';
import CategoryCard from "../../../components/Cards/CategoryCard";
import axiosInstance from "../../../utils/axiosInstance";
import AuctionCard from "../../../components/Cards/AucrionCard";
import Footer from "../../../components/layout/Footer/Footer";

function SubCategory() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryId = queryParams.get('categoryId');

    const [loading, setLoading] = useState(false);
    const [subCategories, setSubCategories] = useState([]);
    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        if (!categoryId) return;
        window.scrollTo(0, 0);

        setLoading(true);

        axiosInstance.get(`/api/Category/GetSubcategories?categoryId=${categoryId}`)
            .then((response) => {
                setSubCategories(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axiosInstance.get(`/api/Auctions/GetAuctionsByCategory?categoryId=${categoryId}`)
            .then((response) => {
                setAuctions(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [categoryId]); // Re-fetch when categoryId changes

    return (
        <React.Fragment>
            {loading && <Loading />}
            <Header />
            <div className="relative w-full pt-[110px] lg:mb-20">
                {subCategories.length > 0 && (
                    <div className="lg:px-28 lg:mb-16">
                        <h1 className="text-[35px] font-medium text-gray-700 md:mt-10 md:mb-8 ms-3">Bid by Categories</h1>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                            {subCategories.map((subCategory) => (
                                <CategoryCard key={subCategory.categoryId} category={subCategory} />
                            ))}
                        </div>
                    </div>
                )}

                <img src={cImage} alt="carousel" />

                {auctions.length > 0 ? (
                    <div className="lg:px-28">
                        <h1 className="text-[35px] font-medium text-gray-700 md:mt-20 md:mb-10">Top Auctions</h1>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                            {auctions.map((auction) => (
                                <AuctionCard key={auction.auctionId} auction={auction} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-[300px]">
                        <h1 className="text-2xl font-medium text-gray-700">Sorry, no auction available</h1>
                    </div>
                )}
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default SubCategory;
