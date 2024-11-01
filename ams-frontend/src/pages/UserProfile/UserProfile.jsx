import React, { useState, useEffect } from "react";
import Header from "../../components/layout/Header/Header";
import Breadcrumb from "../../components/layout/Breadcrumb/Breadcrumb";
import SidebarBuyer from "../../components/layout/SidebarBuyer/SidebarBuyer";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from 'sonner';

function UserProfile() {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [breadcrumb, setBreadcrumb] = useState('Lansuwa > ');
    // Toggle sidebar visibility
    const toggleSidebarVisibility = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    // Handle breadcrumb change
    const handleBreadcrumbChange = (newBreadcrumb) => {
        setBreadcrumb(newBreadcrumb);
    };

    const [formData, setFormData] = useState({
        address: '',
        sellerRating: '',
        paymentDetails: '',
        additionalData: '',
    });

    // Fetch initial data in useEffect
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get('/api/UserProfile/GetUserProfile'); // Replace with actual endpoint
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.put('/api/UserProfile/UpdateUserProfile', formData); // Replace with actual endpoint
            toast.success('Account details updated successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };










    return (
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


                <div className="w-[600px] ms-[480px] p-6 bg-white rounded-md mt-[170px]">
                    <form onSubmit={handleSubmit} className="space-y-4">


                        {/* Seller Rating Field */}
                        <div className="hidden">
                            <label htmlFor="sellerRating" className="block font-medium text-gray-700">Seller Rating</label>
                            <input
                                type="number"
                                name="sellerRating"
                                id="sellerRating"
                                value={formData.sellerRating}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Payment Details Field */}
                        <div>
                            <label htmlFor="paymentDetails" className="block font-medium text-gray-700">Payment Details</label>
                            <input
                                type="text"
                                name="paymentDetails"
                                id="paymentDetails"
                                value={formData.paymentDetails}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>


                        {/* Address Field */}
                        <div>
                            <label htmlFor="address" className="block font-medium text-gray-700">Telephone</label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Additional Data Field */}
                        <div>
                            <label htmlFor="additionalData" className="block font-medium text-gray-700">Address</label>
                            <textarea
                                name="additionalData"
                                id="additionalData"
                                value={formData.additionalData}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-[100px] float-end mt-5 bg-[#480C7B] text-white py-2 rounded-md hover:bg-[#480C7B] transition-colors"
                            >
                                save
                            </button>
                        </div>
                    </form>
                </div>






            </div>
        </React.Fragment>
    );
}

export default UserProfile;