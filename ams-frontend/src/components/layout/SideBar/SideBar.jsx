import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import expandArrow from '../../../../src/assets/images/expandArrow.png';
import contractArrow from '../../../../src/assets/images/contractArrow.png';
import logo from '../../../assets/images/logo.png';

function SideBar({ isSidebarVisible, onBreadcrumbChange }) {
  const [openMenu, setOpenMenu] = useState({});

  const toggleMenu = (menuName) => {
    setOpenMenu((prevOpenMenu) => {
      const isCurrentlyOpen = prevOpenMenu[menuName];
      // Reset breadcrumb if closing the "products" menu
      if (isCurrentlyOpen) {
        switch (menuName) {
          case 'products':
            handleBreadcrumbChange('Lansuwa > ');
            break;
          case 'auctions':
            handleBreadcrumbChange('Lansuwa > ');
            break;
          case 'notifications':
            handleBreadcrumbChange('Lansuwa > ');
            break;
          case 'categories':
            handleBreadcrumbChange('Lansuwa > ');
            break;
          case 'labels':
            handleBreadcrumbChange('Lansuwa > ');
            break;
          default:
            break;
        }
      }
      return {
        ...prevOpenMenu,
        [menuName]: !isCurrentlyOpen,
      };
    });
  };

  const handleBreadcrumbChange = (breadcrumb) => {
    onBreadcrumbChange(breadcrumb);
  };

  return (
    <div className={`2xl:pl-6 w-1/3 md:w-1/6 h-screen bg-[#FDFAFF] shadow-md md:block ${isSidebarVisible ? 'block' : 'hidden'} `}>

      <div className='flex items-center justify-center w-full h-fit'>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className='h-5 m-1 mt-2 w-25 xss:h-6 xss:w-30 md:m-3 lg:m-4 md:w-35 md:h-7 xl:h-10 xl:w-55'
          />
        </Link>    </div>
      <ul className="p-3 xss:p-4 lg:px-6 xl:px-8 ">
        <li className="py-2 text-gray-600 border-solid border-y border-neutral-200 ">

          <div
            onClick={() => {
              toggleMenu('auctions')
              handleBreadcrumbChange('Lansuwa > Auctions');
            }}
            className="flex justify-between cursor-pointer"
          >
            <span className={`text-[10px] md:text-[12px] lg:text-[13px] xl:text-sm ${openMenu['auctions'] ? 'font-medium' : ''}`}><Link to='/auctions'>Auctions</Link></span>
            <span>
              <img src={openMenu['auctions'] ? expandArrow : contractArrow} alt="toggle" className='w-3 h-3 lg:w-4 lg:h-4' />
            </span>
          </div>
          {openMenu['auctions'] && (
            <ul className="pl-4 text-[10px] md:text-[12px] lg:text-[13px] xl:text-sm text-gray-600 active:text-[#5f288f] active:font-medium">
              <li className="py-1">
                <Link to='/auctionlist' onClick={() => handleBreadcrumbChange('Lansuwa > Auctions > Auction List')}>Auction List</Link>
              </li>
              <li className="py-1">
                <Link to='/auctioncreate' onClick={() => handleBreadcrumbChange('Lansuwa > Auctions > Product Listing')}>Product Listing</Link>
              </li>
              <li className="py-1">
                <Link to='/auction' onClick={() => handleBreadcrumbChange('Lansuwa > Auctions > Auction Listing')}>Auction Listing</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="py-2 text-gray-600 border-b border-solid border-neutral-200">
          <div
            onClick={() => {
              toggleMenu('notifications')
              handleBreadcrumbChange('Lansuwa > Notifications');
            }}
            className="flex justify-between cursor-pointer"
          >
            <span className={`text-[10px] md:text-[12px] lg:text-[13px] xl:text-sm ${openMenu['notifications'] ? 'font-medium' : ''}`}> <Link to='/notifications'>Notifications</Link></span>
            <span>
              <img src={openMenu['notifications'] ? expandArrow : contractArrow} alt="toggle" className='w-3 h-3 lg:w-4 lg:h-4' />
            </span>
          </div>
          {openMenu['notifications'] && (
            <ul className="pl-4 text-[10px] md:text-[12px] lg:text-[13px] xl:text-sm text-gray-600 active:text-[#5f288f] active:font-medium">
              <li className="py-1">
                <Link to='/notifications/readed' onClick={() => handleBreadcrumbChange('Lansuwa > Notifications > Readed')}>Readed</Link>
              </li>
              <li className="py-1">
                <Link to='/notifications/unreaded' onClick={() => handleBreadcrumbChange('Lansuwa > Notifications > Unreaded')}>Unreaded</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="py-2 text-gray-600 border-b border-solid border-neutral-200">
          <div
            onClick={() => {
              toggleMenu('categories')
              handleBreadcrumbChange('Lansuwa > Categories');
            }}
            className="flex justify-between cursor-pointer"
          >
            <span className={`text-[10px] md:text-[12px] lg:text-[13px] xl:text-sm ${openMenu['categories'] ? 'font-medium' : ''}`}>Categories</span>
            <span>
              <img src={openMenu['Categories'] ? expandArrow : contractArrow} alt="toggle" className='w-3 h-3 lg:w-4 lg:h-4' />
            </span>
          </div>
          {openMenu['categories'] && (
            <ul className="pl-4 text-[10px] md:text-[12px] lg:text-[13px] xl:text-sm text-gray-600 active:text-[#5f288f] hover:font-medium">
              <li className="py-1">
                <Link to='/categoryproduct' onClick={() => handleBreadcrumbChange('Lansuwa > Categories > Category list')}>Category list</Link>
              </li>
              <li className="py-1">
                <Link to='/category' onClick={() => handleBreadcrumbChange('Lansuwa > Categories > Add Category')}>Add category</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="py-2 text-gray-600 border-b border-solid border-neutral-200">
          <div
            onClick={() => {
              toggleMenu('labels')
              handleBreadcrumbChange('Lansuwa > Labels');
            }}
            className="flex justify-between cursor-pointer"
          >
            <span className={`text-[10px] md:text-[12px] lg:text-[13px] xl:text-sm ${openMenu['categories'] ? 'font-medium' : ''} `}>Labels</span>
            <span>
              <img src={openMenu['labels'] ? expandArrow : contractArrow} alt="toggle" className='w-3 h-3 lg:w-4 lg:h-4' />
            </span>
          </div>
          {openMenu['labels'] && (
            <ul className="pl-4 text-[10px] md:text-[12px] lg:text-[13px] xl:text-sm text-gray-600 active:text-[#5f288f] active:font-medium">
              <li className="py-1">
                <Link to='/labels/list' onClick={() => handleBreadcrumbChange('Lansuwa > Labels > Label list')}>Label list</Link>
              </li>
              <li className="py-1">
                <Link to='/labels/list' onClick={() => handleBreadcrumbChange('Lansuwa > Labels > Add label')}>Add label</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="py-2 border-b border-solid border-neutral-200">

          <span className='text-[10px] md:text-[12px] lg:text-[13px] xl:text-sm text-gray-600 '><Link to='/bids' onClick={() => handleBreadcrumbChange('Lansuwa > Bids ')}>Bids</Link></span>

        </li>
      </ul>
    </div>
  )
}

export default SideBar