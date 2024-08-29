import React from 'react'
import TopBarLinks from '../../Header/TopBarLinks';
import TopBarIcons from '../../Header/TopBarIcons';
import flag from '../../../assets/images/flag.png';
import cart from '../../../assets/images/cart.png';
import wishlist from '../../../assets/images/wishlist.png';
import notification from '../../../assets/images/notification.png';
import logo from '../../../assets/images/logo.png';
import searchicon from '../../../assets/images/searchicon.png';

function Header() {
    return (

        <div className='bg-[#F8F0FF] w-full h-fit'>

            <div className='grid w-full h-fit md:grid-cols-3 lg:grid-cols-4 xl:grid-col-5 2xl:grid-col-6'>

                <div className='col-start-1 mb-1 ms-6 w-fit h-fit '>
                    <TopBarLinks linktext='Sign in' linkurl="/signin" /><span className='text-[#480C7B] text-[12px] lg:text-[14px]'>&nbsp; or &nbsp;</span>
                    <TopBarLinks linktext='Register' linkurl="/register" />
                </div>

                <div class="flex w-auto h-fit md:col-start-3 md:ms-2 lg:col-start-4 xl:ms-5 xl:col-start-5 2xl:col-start-6">
                    <TopBarIcons imgsrc={flag} alt="Ship to" linkurl="/country" />
                    <TopBarIcons imgsrc={cart} alt="Cart" linkurl="/cart" />
                    <TopBarIcons imgsrc={wishlist} alt="Wishlist" linkurl="/wishlist" />
                    <TopBarIcons imgsrc={notification} alt="Notification" linkurl="/notification" />
                </div>
            </div>
            <div className='grid w-full grid-cols-4 h-fit xl:grid-cols-6'>
                <div className='col-start-1 mb-2 ms-2 '>
                    <img className='w-[125px] h-[35px] lg:w-[150px] lg:h-[45px] xl:w-[180px] xl:h-[55px]' src={logo} alt="Logo" />
                </div>
                <div className='flex items-center col-span-2 col-start-2 xl:col-start-3'>
                    <input type="text" className="hidden md:inline-block my-2 border-solid border-2 rounded-l-xl w-[600px] h-[35px] lg:h-[30px] md:h-[25px] xl:h-[35px] xl:w-[1000px] form-control search-input border-[#8A3CCD] focus:opacity-60 focus:ring focus:ring-violet-300 focus:outline-none placeholder:text-[12px] lg:placeholder:text-[14px] items-center justify-center" placeholder="   Search any" />
                    <button type='button' className='hidden md:inline-flex border-solid border-2 border-[#8A3CCD] h-[35px] w-[60px] lg:h-[30px] md:h-[25px] xl:h-[35px] xl:w-[90px] rounded-r-xl items-center justify-center -ms-0.5'>
                        <img className='h-[20px] w-[20px] lg:h-[25px] lg:w-[25px] ' src={searchicon} alt="Search" />
                    </button>
                </div>
                <div className='flex col-start-4 xl:col-start-6'>
                    <button type='button' className='flex rounded-2xl px-4 py-2 w-fit h-fit bg-gradient-to-r from-[#9e88f7] to-[#8317E1] text-white text-[12px] xl:text-[15px] font-semibold my-3 mx-12 mr-3 lg:ms-20 lg:mr-5'>Shop by Category</button>
                </div>

            </div>
        </div>



    )
}

export default Header