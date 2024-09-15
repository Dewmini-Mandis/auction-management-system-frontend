import React from 'react'
import searchicon from '../../../assets/images/searchicon.png';
import profile from '../../../assets/images/profile.jpg'
import alarm from '../../../assets/images/alarm.png'

function HeaderSeller() {
  return (
    <div className="w-full bg-[#F5F0FA] h-fit p-1 xxs:p-2 xs:p-3 lg:p-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 grid">
      <div className="row-start-1 lg:col-span-2 col-start-1 font-medium md:text-[12px] xl:text-[15px] xxs:text-[10px] text-[8px] w-fit 2xl:ms-12 mb-2 lg:mb-0">
        Lansuwa > Products > Listing
      </div>
      <div className='flex col-start-2 row-start-1 lg:col-start-3 xl:col-span-2 xl:col-start-4 d-flex'>
      <input type="text" className="hidden md:block bg-[#e4c6ff] border rounded-3xl placeholder:text-[#8A3CCD] placeholder:font-medium placeholder:text-[10px] h-6 xl:w-60 xl:h-7 2xl:w-96 md:w-32 lg:w-44 md:ms-24 lg:ms-0 xs:w-32" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Search any" />
      <img className='w-3 h-3 mt-1 ml-14 xxs:w-4 xxs:h-4 xxs:ml-16 xs:ml-20 md:-ml-6' src={searchicon} alt="Search" />
      </div>
      <div className="flex col-start-2 row-start-1 md:col-start-3 lg:col-span-2 lg:col-start-4 xl:col-start-6 md:ms-8 lg:ms-0">
        <input type="text" className="hidden md:block placeholder:text-[#FF0080] placeholder:font-medium bg-[#fcb5e2] border rounded-3xl placeholder:text-[10px] h-6 xl:w-60 xl:h-7 2xl:w-96 lg:ms-12 xl:ms-0 md:w-32 lg:w-44 xs:w-28" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;You have 8 Bids of ..." />
        <img className='w-3 h-3 mt-1 ml-20 xxs:w-4 xxs:h-4 xxs:ml-24 md:-ml-6 xs:ml-28' src={alarm} alt="Alarm" />
        <img className='w-5 h-4 rounded-full xxs:w-6 xxs:h-5 md:h-6 md:w-7 lg:ms-12 2xl:ms-24 md:ms-6 ms-3 ' src={profile} alt="Profile" />
      </div>

    </div>
  )
}

export default HeaderSeller