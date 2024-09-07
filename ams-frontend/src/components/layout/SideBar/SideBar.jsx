import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import expandArrow from '../../../../src/assets/images/expandArrow.png';
import contractArrow from '../../../../src/assets/images/contractArrow.png';
import logo from '../../../assets/images/logo.png';
import SideBarLink from '../../SideBar/SideBarLink';
function SideBar() {
    const [openMenu, setOpenMenu] = useState({});

    const toggleMenu = (menuName) => {
        setOpenMenu((prevOpenMenu) => ({
          ...prevOpenMenu,
          [menuName]: !prevOpenMenu[menuName],
        }));
        
      };
  return (<div className="w-1/6 h-full bg-[#F5F0FA] shadow-md">

    <div className='w-full h-fit'>
        <img src={logo} alt="logo" className='h-10 m-4 w-55' />
    </div>
  <ul className="p-4">
    <li className="py-2 border-solid border-y border-neutral-200 ">
      <div
        onClick={() => toggleMenu('products')}
        className="flex justify-between cursor-pointer"
      >
        <span className='text-sm text-gray-600 '>Products</span>
        <span>
        <img src={openMenu['products'] ? expandArrow : contractArrow} alt="toggle" className='w-4 h-4'/>
        </span>
      </div>
      {openMenu['products'] && (
        <ul className="pl-4 text-sm text-gray-600">
          <li className="py-1">
          <Link to='/products/list'>Products list</Link>
          </li>
          <li className="py-1">
          <Link to='/products/listing'>Listing</Link>
          </li>
        </ul>
      )}
    </li>
    <li className="py-2 border-solid border-y border-neutral-200">
  <div
    onClick={() => toggleMenu('auctions')}
    className="flex justify-between cursor-pointer"
  >
    <span className='text-sm text-gray-600 '><Link to='/auctions'>Auctions</Link></span>
    <span>
    <img src={openMenu['auctions']? expandArrow : contractArrow} alt="toggle" className='w-4 h-4' />
    </span>
  </div>
  {openMenu['auctions'] && (
    <ul className="pl-4 text-sm text-gray-600">
      <li className="py-1">
      <Link to='/auctions/active'>Active</Link>
      </li>
      <li className="py-1">
      <Link to='/auctions/past'>Past</Link>
      </li>
    </ul>
  )}
</li>
<li className="py-2 border-solid border-y border-neutral-200">
  <div
    onClick={() => toggleMenu('notifications')}
    className="flex justify-between cursor-pointer"
  >
    <span className='text-sm text-gray-600 '> <Link to='/notifications'>Notifications</Link></span>
    <span>
    <img src={openMenu['notifications']? expandArrow : contractArrow} alt="toggle" className='w-4 h-4'/>
    </span>
  </div>
  {openMenu['notifications'] && (
    <ul className="pl-4 text-sm text-gray-600">
      <li className="py-1">
      <Link to='/notifications/readed'>Readed</Link>
      </li>
      <li className="py-1">
      <Link to='/notifications/unreaded'>Unreaded</Link>
      </li>
    </ul>
  )}
</li>
<li className="py-2 border-solid border-y border-neutral-200">
  <div
    onClick={() => toggleMenu('categories')}
    className="flex justify-between cursor-pointer"
  >
    <span className='text-sm text-gray-600 '>Categories</span>
    <span>
    <img src={openMenu['Categories']? expandArrow : contractArrow} alt="toggle" className='w-4 h-4' />
   </span>
  </div>
  {openMenu['categories'] && (
    <ul className="pl-4 text-sm text-gray-600">
      <li className="py-1">
      <Link to='/category/list'>Category list</Link>
      </li>
      <li className="py-1">
      <Link to='/category/add'>Add category</Link>
      </li>
    </ul>
  )}
</li>
<li className="py-2 border-solid border-y border-neutral-200">
  <div
    onClick={() => toggleMenu('labels')}
    className="flex justify-between cursor-pointer"
  >
    <span className='text-sm text-gray-600 '>Labels</span>
    <span>
    <img src={openMenu['labels']? expandArrow : contractArrow} alt="toggle" className='w-4 h-4'/>
    </span>
  </div>
  {openMenu['labels'] && (
    <ul className="pl-4 text-sm text-gray-600">
      <li className="py-1">
      <Link to='/labels/list'>Label list</Link>
      </li>
      <li className="py-1">
      <Link to='/labels/list'>Add label</Link>
      </li>
    </ul>
  )}
</li>
<li className="py-2 border-solid border-y border-neutral-200">
 
    <span className='text-sm text-gray-600 '><Link to='/bids'>Bids</Link></span>
    
</li>
  </ul>
</div>
  )
}

export default SideBar