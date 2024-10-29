import React from "react";
import { useState } from 'react';
import SideBar from '../../components/layout/SideBar/SideBar';
import HeaderSeller from '../../components/layout/HeaderSeller/HeaderSeller';

function AuctionList() {


    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [breadcrumb, setBreadcrumb] = useState('Lansuwa > ');


    const toggleSidebarVisibility = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const handleBreadcrumbChange = (newBreadcrumb) => {
        setBreadcrumb(newBreadcrumb);
    };

    return (
        <div className='w-full h-screen parent-container' >
            <React.Fragment>
                <div className="flex w-full h-full">

                    <SideBar isSidebarVisible={isSidebarVisible} onBreadcrumbChange={handleBreadcrumbChange} />

                    <div className={`flex flex-col md:w-5/6 bg-[#F5F0FA] ${isSidebarVisible ? 'w-3/4' : 'w-full'}`}>
                        <HeaderSeller toggleSidebarVisibility={toggleSidebarVisibility} isSidebarVisible={isSidebarVisible} breadcrumb={breadcrumb} />

                        <div className="flex-grow p-4 text-black border border-solid border-neutral-200">
                            <div className='pb-20 bg-purple-100 ' >

                                <h2 className='pt-10 pl-10 ml-20 text-3xl font-bold'>All Products</h2>


                                <form className='p-10 '>



                                    <div className="grid grid-cols-2 grid-rows-1 gap-4 rounded-3xl bg-slate-50 ">

                                        <div className="col-span-1 rounded-3xl bg-slate-50">
                                            <span className='float-left w-full p-5 ml-20 text-xl text-left' >Name</span>


                                        </div>

                                        <div className="col-span-1 col-start-2 ">
                                            <span className='float-left w-full p-5 ml-20 text-xl text-left' >Price</span>

                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 grid-rows-1 gap-4 mt-3 rounded-3xl bg-slate-50">

                                        <div className="col-span-1 ">
                                            <span className='float-left w-full p-5 ml-20 text-xl text-left' > Gold Jewellery  22 KT </span>


                                        </div>

                                        <div className="col-span-1 col-start-2 ">
                                            <span className='float-left w-full p-5 ml-20 text-xl text-left' >Rs. 50000.48</span>

                                        </div>

                                    </div>






                                </form>


                            </div>
                        </div>

                    </div>
                </div>

            </React.Fragment>
        </div>
    )


}

export default AuctionList;