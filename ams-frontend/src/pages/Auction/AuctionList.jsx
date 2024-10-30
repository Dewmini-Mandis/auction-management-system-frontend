import React from "react";
import { useState, useEffect } from 'react';
import SideBar from '../../components/layout/SideBar/SideBar';
import HeaderSeller from '../../components/layout/HeaderSeller/HeaderSeller';
import axiosInstance from "../../utils/axiosInstance";
import { useLocation, useNavigate } from 'react-router-dom';


function AuctionList() {

    const navigate = useNavigate();

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [breadcrumb, setBreadcrumb] = useState('Lansuwa > ');
    var categoryId;


    const toggleSidebarVisibility = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const handleBreadcrumbChange = (newBreadcrumb) => {
        setBreadcrumb(newBreadcrumb);
    };


    // usestase to store all auctions from the backend 
    const [auctions, setAuctions] = useState([]);

    // useeffect to fetch all auctions from the backend
    // backend url - /api/Auctions/GetAllAuctions

    useEffect(() => {
        axiosInstance.get('/api/Auctions/GetAllAuctions')
            .then((res) => {
                setAuctions(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='w-full h-screen parent-container' >
            <React.Fragment>
                <div className="flex w-full h-full">

                    <SideBar isSidebarVisible={isSidebarVisible} onBreadcrumbChange={handleBreadcrumbChange} />

                    <div className={`flex flex-col md:w-5/6 bg-[#F5F0FA] ${isSidebarVisible ? 'w-3/4' : 'w-full'}`}>
                        <HeaderSeller toggleSidebarVisibility={toggleSidebarVisibility} isSidebarVisible={isSidebarVisible} breadcrumb={breadcrumb} />

                        <div className="flex-grow p-4 text-black border border-solid border-neutral-200">
                            <div className='bg-purple-100 h-dvh' >

                                <h2 className='pt-10 pl-10 ml-20 text-3xl font-bold'>All Products</h2>


                                <div className='grid p-10'>

                                    {/* Show all actions using a tailwind table auctions usestate use a map */}
                                    <table className="min-w-full border divide-y shadow-md divide-neutral-200 ">
                                        <thead className="bg-neutral-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-neutral-500">
                                                    Product Name
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-neutral-500">
                                                    Description
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-neutral-500">
                                                    Starting Bid
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-neutral-500">
                                                    End Time
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-neutral-200">
                                            {auctions.map((auction) => (
                                                <tr key={auction.auctionId} className="cursor-pointer hover:bg-gray-100" onClick={() => navigate(`/auction?auctionid=${auction.auctionId}`)}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm font-medium text-neutral-900">{auction.product?.name}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-neutral-500">{auction.product?.description}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-neutral-500">{auction.startingBid}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-neutral-500">{new Date(auction.endTime).toLocaleString()}</div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    

                                </div>


                            </div>
                        </div>

                    </div>
                </div>

            </React.Fragment>
        </div>
    )


}

export default AuctionList;