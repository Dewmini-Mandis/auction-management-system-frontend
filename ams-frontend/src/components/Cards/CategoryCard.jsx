import React from "react";
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const navigate = useNavigate();
    const categoryId = category?.categoryId;
    const imageUrl = category.imageUrls?.[0]

    const categoryImageUrl =
        category?.logoImageUrls?.[0]
            ? import.meta.env.VITE_BASE_URL + category.logoImageUrls?.[0]
            : "https://via.placeholder.com/150"; // Fallback image URL

    const handleClick = () => {
        // Navigate to SubCategoryPage with categoryId and categoryImageURL as a query parameter
        navigate(`/subcategory?categoryId=${categoryId}&imageUrl=${imageUrl}`);
    };

    return (
        <div key={categoryId} className="p-4 rounded-lg cursor-pointer" onClick={handleClick}>
            <img src={categoryImageUrl} alt="Category" className="w-full rounded-full" />
            <h1 className="text-center text-xl font-semibold mt-4">{category.name}</h1>
        </div>
    );
};

export default CategoryCard;
