import React from "react";
import CountdownTimer from "./CountdownTimer";
import { useNavigate } from 'react-router-dom';

const AuctionCard = ({ auction }) => {

    const navigate = useNavigate();

    const auctionImageUrl =
        auction?.product?.imageUrls?.[0]
            ? import.meta.env.VITE_BASE_URL + auction.product.imageUrls[0]
            : "https://via.placeholder.com/150"; // Fallback image URL


    const handleCardClick = (auctionId) => {
        navigate('/auctiondetails/', { state: { auctionId } });
    };

    return (
        <div className="relative bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer" onClick={() => handleCardClick(auction.auctionId)}>
            <img
                src={auctionImageUrl}
                alt={auction.product?.name || "Auction Image"}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <div className="text-lg font-medium text-black overflow-hidden text-ellipsis">{auction.product?.name}</div>
                </div>
                <div className="text-sm text-gray-500 text-justify h-[40px] overflow-hidden text-ellipsis line-clamp-2">{auction.product?.description}</div>
                <div className="mt-">
                    <span className="font-bold text-black"> Rs. </span>
                    <span className="text-2xl font-bold text-black">{auction.startingBid}</span>
                </div>
                <div className="text-sm text-gray-500">
                    <CountdownTimer endTime={auction.endTime} />
                </div>
            </div>
        </div>
    );
};

export default AuctionCard;
