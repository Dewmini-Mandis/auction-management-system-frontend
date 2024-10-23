import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import expandArrow from '../../../../src/assets/images/expandArrow.png';
import contractArrow from '../../../../src/assets/images/contractArrow.png';

function SidebarBuyer({ isSidebarVisible, onBreadcrumbChange }) {
    const [openMenu, setOpenMenu] = useState({});
    const [activeLink, setActiveLink] = useState('');  // State to track active link

    const toggleMenu = (menuName) => {
        setOpenMenu((prevOpenMenu) => ({
            ...prevOpenMenu,
            [menuName]: !prevOpenMenu[menuName],
        }));
    };

    const handleBreadcrumbChange = (breadcrumb, linkName) => {
        onBreadcrumbChange(breadcrumb);
        setActiveLink(linkName);  // Set the clicked link as active
    };

    return (
        <div className={`2xl:pl-6 w-1/3 md:w-1/6 h-full bg-[#FDFAFF] text-gray-600 shadow-md md:block ${isSidebarVisible ? 'block' : 'hidden'}`}>
            <ul className="">
                <li className={`p-3 border-b border-solid xss:p-4 lg:px-6 xl:px-8 border-neutral-200 ${activeLink === 'myaccount' ? 'bg-[#480C7B] text-white' : 'hover:text-[#480C7B]'}`}>
                    <span className='text-[10px] md:text-[12px] lg:text-[13px] xl:text-sm'>
                        <Link
                            to='/my-account'
                            onClick={() => handleBreadcrumbChange('Lansuwa > My Account', 'myaccount')}
                        >
                            My Account
                        </Link>
                    </span>
                </li>
                <li className={`p-3 border-b border-solid xss:p-4 lg:px-6 xl:px-8 border-neutral-200 ${activeLink === 'notifications' ? 'bg-[#480C7B] text-white' : 'hover:text-[#480C7B]'}`}>
                    <span className='text-[10px] md:text-[12px] lg:text-[13px] xl:text-sm'>
                        <Link
                            to='/notifications'
                            onClick={() => handleBreadcrumbChange('Lansuwa > Notifications', 'notifications')}
                        >
                            Notifications
                        </Link>
                    </span>
                </li>
                <li className={`p-3 border-b border-solid xss:p-4 lg:px-6 xl:px-8 border-neutral-200 ${activeLink === 'watchlist' ? 'bg-[#480C7B] text-white' : 'hover:text-[#480C7B]'}`}>
                    <span className='text-[10px] md:text-[12px] lg:text-[13px] xl:text-sm'>
                        <Link
                            to='/watchlist'
                            onClick={() => handleBreadcrumbChange('Lansuwa > Watchlist', 'watchlist')}
                        >
                            Watchlist
                        </Link>
                    </span>
                </li>
                <li className={`p-3 border-b border-solid xss:p-4 lg:px-6 xl:px-8 border-neutral-200 ${activeLink === 'mybids' ? 'bg-[#480C7B] text-white' : 'hover:text-[#480C7B]'}`}>
                    <span className='text-[10px] md:text-[12px] lg:text-[13px] xl:text-sm'>
                        <Link
                            to='/mybids'
                            onClick={() => handleBreadcrumbChange('Lansuwa > My Bids', 'mybids')}
                        >
                            My Bids
                        </Link>
                    </span>
                </li>
                <li className={`p-3 border-b border-solid xss:p-4 lg:px-6 xl:px-8 border-neutral-200 ${activeLink === 'myorders' ? 'bg-[#480C7B] text-white' : 'hover:text-[#480C7B]'}`}>
                    <span className='text-[10px] md:text-[12px] lg:text-[13px] xl:text-sm'>
                        <Link
                            to='/myorders'
                            onClick={() => handleBreadcrumbChange('Lansuwa > My Orders', 'myorders')}
                        >
                            My Orders
                        </Link>
                    </span>
                </li>
                <li className={`p-3 border-b border-solid xss:p-4 lg:px-6 xl:px-8 border-neutral-200 ${activeLink === 'sellers' ? 'bg-[#480C7B] text-white' : 'hover:text-[#480C7B]'}`} >
                    <div
                        onClick={() => toggleMenu('sellers')}
                        className="flex justify-between cursor-pointer"
                    >
                        <span className={`text-[10px] md:text-[12px] lg:text-[13px] xl:text-sm ${openMenu['sellers'] ? 'font-medium , text-[#480C7B]' : ''} ` }  >
                            Sellers
                        </span>
                        <span>
                            <img src={openMenu['sellers'] ? expandArrow : contractArrow} alt="toggle" className='w-3 h-3 lg:w-4 lg:h-4' />
                        </span>
                    </div>
                    {openMenu['sellers'] && (
                        <ul className="pl-4 text-[10px] md:text-[12px] lg:text-[13px] xl:text-sm text-gray-600 ">
                            <li className={`py-2 ${activeLink === 'listing' ? 'bg-[#480C7B] text-white' : 'hover:text-[#480C7B]'}`}>
                                <Link
                                    to='/sellers/listing'
                                    onClick={() => handleBreadcrumbChange('Lansuwa > Sellers > Listing', 'listing')}
                                >
                                    Listing
                                </Link>
                            </li>
                            <li className={`py-2 ${activeLink === 'products' ? 'bg-[#480C7B] text-white' : 'hover:text-[#480C7B]'}`}>
                                <Link
                                    to='/sellers/products'
                                    onClick={() => handleBreadcrumbChange('Lansuwa > Sellers > Products', 'products')}
                                >
                                    Products
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default SidebarBuyer;
