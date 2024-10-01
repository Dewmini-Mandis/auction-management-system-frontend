import React from 'react'
import TopBarLinks from '../../Header/TopBarLinks';
import TopBarIcons from '../../Header/TopBarIcons';
import MobileViewIcons from '../../Header/MobileViewIcons';
import flag from '../../../assets/images/flag.png';
import cart from '../../../assets/images/cart.png';
import wishlist from '../../../assets/images/wishlist.png';
import notification from '../../../assets/images/notification.png';
import logo from '../../../assets/images/logo.png';
import searchicon from '../../../assets/images/searchicon.png';
import menu from '../../../assets/images/menu.png';

function Header() {
    return (

        <div className='bg-[#F8F0FF] w-full h-fit grid md:grid-rows-3'>

            <div className='grid w-full col-start-3 row-start-1 md:col-start-1 md:row-span-1 h-fit md:grid-cols-3 lg:grid-cols-4 xl:grid-col-5 2xl:grid-col-6'>

                <div className='hidden col-start-1 mb-1 ms-6 w-fit h-fit md:inline-block'>
                    <TopBarLinks linktext='Sign in' linkurl="/signin" /><span className='text-[#480C7B] text-[12px] lg:text-[14px]'>&nbsp; or &nbsp;</span>
                    <TopBarLinks linktext='Register' linkurl="/register" />
                </div>

                <div class="flex w-auto h-fit col-start-3 md:ms-2 lg:col-start-4 xl:ms-5 xl:col-start-5 2xl:col-start-6">
                    <TopBarIcons imgsrc={flag} alt="Ship to" linkurl="/country" />
                    <TopBarIcons imgsrc={cart} alt="Cart" linkurl="/cart" />
                    <TopBarIcons imgsrc={wishlist} alt="Watchlist" linkurl="/wishlist" />
                    <TopBarIcons imgsrc={notification} alt="Notification" linkurl="/notification" />

                    <MobileViewIcons className='w-7 h-7 xxs:w-9 xss:h-9' imgsrc={menu} alt="Menu" linkurl="/menu" />


                </div>

            </div>
            <div className='grid w-full grid-cols-3 row-span-2 row-start-1 md:row-start-2 md:grid-cols-4 h-fit xl:grid-cols-7 md:border-y md:border-solid md:border-gray-300'>
                <div className='col-start-1 my-1 md:my-3 lg:my-1 ms-2 '>
                    <img className='w-[125px] h-[30px] lg:w-[150px] lg:h-[40px] xl:w-[170px] xl:h-[45px]' src={logo} alt="Logo" />
                </div>
                <div className='flex items-center col-span-2 col-start-2 row-start-2 md:row-start-1 xl:col-start-3 xl:col-span-3'>
                    <input type="text" className=" my-3 border-solid border rounded-3xl md:rounded-r-none md:rounded-l-xl lg:rounded-l-2xl h-[21px] w-[250px] xs:h-[23px] xs:w-[400px] md:w-[500px] lg:h-[30px] md:h-[25px] xl:h-[35px] xl:w-[1000px] form-control search-input border-[#8A3CCD] focus:opacity-60 focus:ring focus:ring-violet-300 focus:outline-none placeholder:text-[9px] xs:placeholder:text-[10px] md:placeholder:text-[12px] lg:placeholder:text-[14px]" placeholder="   Search any" />
                    <img className='h-[16px] w-[16px] xss:h-[18px] xss:w-[18px] xs:h-[20px] xs:w-[20px] md:hidden inlne-block -ms-7 ' src={searchicon} alt="Search" />
                    <button type='button' className='hidden md:inline-flex border-solid border border-[#8A3CCD] h-[30px] w-[60px] lg:h-[30px] md:h-[25px] xl:h-[35px] xl:w-[90px] rounded-r-xl lg:rounded-r-2xl items-center justify-center -ms-0.8'>
                        <img className='h-[20px] w-[20px] lg:h-[25px] lg:w-[25px] ' src={searchicon} alt="Search" />
                    </button>
                </div>
                <div className='content-center justify-center col-start-1 md:col-start-4 xl:col-start-7'>
                    <button type='button' className='flex rounded-2xl w-fit h-fit bg-gradient-to-r from-[#9e88f7] to-[#8317E1] text-white text-[8px] xs:text-[10px] md:text-[12px] xl:text-[15px] font-semibold lg:my-3 px-2 xss:px-3 md:px-3 py-1 xs:py-2 ms-3 xss:ms-5 md:ms-12 lg:ms-14 lg:mr-1 xl:ms-1 2xl:ms-36'>Bid by Category</button>
                </div>

            </div>
        </div>



    )
}

export default Header