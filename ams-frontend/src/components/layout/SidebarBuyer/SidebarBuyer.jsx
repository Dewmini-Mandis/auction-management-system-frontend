import React, { useState , useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

import expandArrow from '../../../../src/assets/images/expandArrow.png';
import contractArrow from '../../../../src/assets/images/contractArrow.png';

function SidebarBuyer({ isSidebarVisible, onBreadcrumbChange }) {

    const [isSeller, setIsSeller] = useState(false);
    const [isAdmin , setIsAdmin] = useState(false);
    const location = useLocation();
    const [openMenu, setOpenMenu] = useState({});
    const [activeLink, setActiveLink] = useState('');  

    useEffect(() => {

        setIsSeller(localStorage.getItem('role') === 'seller');
        // setIsSeller(localStorage.getItem('role') === 'admin');
        setIsAdmin(localStorage.getItem('role') === 'admin');

        // Set activeLink and breadcrumb based on current path
        const path = location.pathname;
        if (path === '/my-account') {
            setActiveLink('myaccount');
            onBreadcrumbChange('Lansuwa > My Account');
        } else if (path === '/notifications') {
            setActiveLink('notifications');
            onBreadcrumbChange('Lansuwa > Notifications');
        } else if (path === '/watchlist') {
            setActiveLink('watchlist');
            onBreadcrumbChange('Lansuwa > Watchlist');
        } else if (path === '/mybids') {
            setActiveLink('mybids');
            onBreadcrumbChange('Lansuwa > My Bids');  
        } else if (path === '/myorders') {
            setActiveLink('myorders');
            onBreadcrumbChange('Lansuwa > My Orders');
        } else if (path.startsWith('/sellers/listing')) {
            setActiveLink('listing');
            onBreadcrumbChange('Lansuwa > Sellers > Listing');
        } else if (path.startsWith('/sellers/products')) {
            setActiveLink('products');
            onBreadcrumbChange('Lansuwa > Sellers > Products');
        }
    }, [location.pathname, onBreadcrumbChange]);
    
    const toggleMenu = (menuName) => {
        setOpenMenu((prevOpenMenu) => ({
            ...prevOpenMenu,
            [menuName]: !prevOpenMenu[menuName],
        }));
    };

    const handleBreadcrumbChange = (breadcrumb, linkName) => {
        onBreadcrumbChange(breadcrumb);
        setActiveLink(linkName);  
    };

    return (
        <div className={`fixed mt-[136px] 2xl:pl-6 w-1/3 md:w-1/6 h-screen bg-[#FDFAFF] text-gray-800 border-r border-solid border-neutral-200 shadow-md md:block ${isSidebarVisible ? 'block' : 'hidden'}`}>
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

                { (isSeller || isAdmin) && (

                <li className={`p-3 border-b border-solid xss:p-4 lg:px-6 xl:px-8 border-neutral-200 ${activeLink === 'sellers' ? 'bg-[#480C7B] text-white' : 'hover:text-[#480C7B]'}`}>
                    <span className='text-[10px] md:text-[12px] lg:text-[13px] xl:text-sm'>
                        <Link
                            to='/auctioncreate'
                            onClick={() => handleBreadcrumbChange('Lansuwa > Sellers', 'sellers')}
                        >

                            Sellers
                        </Link>
                    </span>
                </li>

                )}

                { isAdmin && (
                <li className={`p-3 border-b border-solid xss:p-4 lg:px-6 xl:px-8 border-neutral-200 ${activeLink === 'admin' ? 'bg-[#480C7B] text-white' : 'hover:text-[#480C7B]'}`}>
                    <span className='text-[10px] md:text-[12px] lg:text-[13px] xl:text-sm'>
                        <Link
                            to='/admin'
                            onClick={() => handleBreadcrumbChange('Lansuwa > Admin', 'admin')}
                        >
                            Admin
                        </Link>
                    </span>
                </li>
                )}
                

            </ul>
        </div>
    );
}

export default SidebarBuyer;
