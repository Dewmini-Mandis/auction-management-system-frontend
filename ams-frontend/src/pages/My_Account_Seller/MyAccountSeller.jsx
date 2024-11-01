import React from 'react'
import { useState, useEffect } from 'react';
import SideBar from '../../components/layout/SideBar/SideBar';
import HeaderSeller from '../../components/layout/HeaderSeller/HeaderSeller';

function MyAccountSeller() {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [breadcrumb, setBreadcrumb] = useState('Lansuwa > ');


    const toggleSidebarVisibility = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

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
        <div className='w-full h-screen parent-container' >
            <React.Fragment>
                <div className="flex w-full h-full">
                    <SideBar isSidebarVisible={isSidebarVisible} onBreadcrumbChange={handleBreadcrumbChange} />

                    <div className={`flex flex-col md:w-5/6 bg-[#F5F0FA] ${isSidebarVisible ? 'w-3/4' : 'w-full'}`}>
                        <HeaderSeller toggleSidebarVisibility={toggleSidebarVisibility} isSidebarVisible={isSidebarVisible} breadcrumb={breadcrumb} />
                        <div className="flex-grow p-4 text-black border border-solid ">

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
                                        className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
                                        className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
                                        className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
                                        className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
                </div>

            </React.Fragment>

        </div>
    )
}

export default MyAccountSeller