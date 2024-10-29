import React from "react";
import CountdownTimer from "./CountdownTimer";

const CategoryCard = ({ category }) => {

    const categoryImageUrl =
        category?.logoImageUrls?.[0]
            ? import.meta.env.VITE_BASE_URL + category.logoImageUrls?.[0]
            : "https://via.placeholder.com/150"; // Fallback image URL

    return (
        <div key={category.categoryId} className="p-4 rounded-lg cursor-pointer">
            <img src={categoryImageUrl} alt="Heart" className="w-full rounded-full" />
            <h1 className="text-center text-xl font-semibold mt-4">{category.name}</h1>
        </div>
    );
};

export default CategoryCard;
