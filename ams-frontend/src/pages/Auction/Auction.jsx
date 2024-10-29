import React, { useState, useEffect } from "react";
import SideBar from '../../components/layout/SideBar/SideBar';
import HeaderSeller from '../../components/layout/HeaderSeller/HeaderSeller';
import axiosInstance from "../../utils/axiosInstance";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Auction() {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [breadcrumb, setBreadcrumb] = useState('Lansuwa > ');


    const toggleSidebarVisibility = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const handleBreadcrumbChange = (newBreadcrumb) => {
        setBreadcrumb(newBreadcrumb);
    };

    const auctionId = 11;

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleDateChange = (date, name) => {
        setFormData({
            ...formData,
            [name]: date,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated Data:', formData);
    };

    useEffect(() => {
        axiosInstance.get(`/api/Auctions/GetAuctionById?auctionId=${auctionId}`)
            .then((res) => {
                console.log("Fetched data:", res.data);

                const data = res.data;

                setFormData({
                    ...data,
                    startTime: data.startTime ? new Date(data.startTime) : null,
                    endTime: data.endTime ? new Date(data.endTime) : null
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }, [auctionId]);


    return (
        <React.Fragment>
            <div className="flex w-full h-full">

                <SideBar isSidebarVisible={isSidebarVisible} onBreadcrumbChange={handleBreadcrumbChange} />

                <div className={`flex flex-col md:w-5/6 bg-[#F5F0FA] ${isSidebarVisible ? 'w-3/4' : 'w-full'}`}>
                    <HeaderSeller toggleSidebarVisibility={toggleSidebarVisibility} isSidebarVisible={isSidebarVisible} breadcrumb={breadcrumb} />

                    <div className="flex-grow p-4 text-black border border-solid border-neutral-200">

                        <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Starting Bid</label>
                                <input
                                    type="number"
                                    name="startingBid"
                                    value={formData.startingBid || ''}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Start Time</label>
                                <DatePicker
                                    selected={formData.startTime ? new Date(formData.startTime) : null}
                                    onChange={(date) => handleDateChange(date, 'startTime')}
                                    showTimeSelect
                                    dateFormat="Pp"
                                    className="w-full px-3 py-2 border border-gray-300 rounded"
                                    placeholderText="Select start time"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">End Time</label>
                                <DatePicker
                                    selected={formData.endTime ? new Date(formData.endTime) : null}
                                    onChange={(date) => handleDateChange(date, 'endTime')}
                                    showTimeSelect
                                    dateFormat="Pp"
                                    className="w-full px-3 py-2 border border-gray-300 rounded"
                                    placeholderText="Select end time"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.product?.name || ''}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Shipping Method</label>
                                <input
                                    type="text"
                                    name="shippingMethod"
                                    value={formData.shippingMethod || ''}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded"
                                />
                            </div>

                            <div className="mb-4 flex items-center">
                                <input
                                    type="checkbox"
                                    name="acceptReturn"
                                    checked={formData.acceptReturn || false}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label className="text-gray-700 text-sm">Accept Returns</label>
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            >
                                Submit
                            </button>

                            {/* delete button */}
                            <button
                                type="button"
                                className="float-end bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 ml-2"
                            >
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Auction;
