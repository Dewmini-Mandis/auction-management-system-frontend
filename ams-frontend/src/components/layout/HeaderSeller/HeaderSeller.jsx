import React from 'react'
import searchicon from '../../../assets/images/searchicon.png';
import profile from '../../../assets/images/profile.jpg';
import alarm from '../../../assets/images/alarm.png';
import xbox from '../../../assets/images/xbox.png';

function HeaderSeller({isSidebarVisible , toggleSidebarVisibility}) {

  return (
    <div className={`w-full bg-[#FDFAFF] h-fit p-1 xxs:p-2 lg:p-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 grid ${isSidebarVisible ? 'grid-cols-1' : 'grid-cols-2'}`}>
        <button type='button' className={`block col-start-1 row-start-1 md:hidden ${isSidebarVisible ? 'xxs:-ms-4' : 'ms-0'} ${isSidebarVisible ? '-ms-3' : 'ms-0'}`}>
            <img className='w-4 h-4 xxs:w-5 xxs:h-5' src={xbox} alt="Xbox"  onClick={toggleSidebarVisibility} />
      </button>
      <div className={`row-start-1 lg:col-span-2 col-start-1 font-medium md:text-[12px] xl:text-[15px] xxs:text-[10px] text-[8px] w-fit 2xl:ms-12 my-0 lg:mb-0 ms-7 md:ms-0 ${isSidebarVisible ? 'hidden' : 'block'}`}>
      Lansuwa &gt; Products &gt; Listing
      </div>
      <div className='flex col-start-2 row-start-1 lg:col-start-3 xl:col-span-2 xl:col-start-4 d-flex'>
      <input type="text" className="hidden md:block bg-[#e4c6ff] border rounded-3xl placeholder:text-[#8A3CCD] placeholder:font-medium placeholder:text-[10px] h-6 xl:w-60 xl:h-7 2xl:w-96 md:w-32 lg:w-44 md:ms-24 lg:ms-0 xs:w-32" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Search any" />
      <img className='w-3 h-3 mt-1 xxs:w-4 ml-[85px] xxs:h-4 xxs:ml-16 xs:ml-20 md:-ml-6' src={searchicon} alt="Search" />
      </div>
      <div className="flex col-start-2 row-start-1 md:col-start-3 lg:col-span-2 lg:col-start-4 xl:col-start-6 md:ms-8 lg:ms-0 ">
        <input type="text" className="hidden md:block placeholder:text-[#FF0080] placeholder:font-medium bg-[#fcb5e2] border rounded-3xl placeholder:text-[10px] h-6 xl:w-60 xl:h-7 2xl:w-96 lg:ms-12 xl:ms-0 md:w-32 lg:w-44 xs:w-28" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;You have 8 Bids of ..." />
        <img className='w-3 h-3 mt-1 ml-28 xxs:w-4 xxs:h-4 xxs:ml-28 md:-ml-6 xs:ml-32' src={alarm} alt="Alarm" />
        <img className='w-5 h-4 rounded-full xxs:w-6 xxs:h-5 md:h-6 md:w-7 xl:h-7 xl:w-8 lg:ms-14 2xl:ms-36 md:ms-6 xxs:ms-8 ms-3' src={profile} alt="Profile" />
      </div>

    </div>
  )
}

export default HeaderSeller