import React from 'react'
import { Link } from 'react-router-dom';
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
import profile from '../../../assets/images/profileimg.jpg';


function Header() {

    // logout function here
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('role');
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');


        // redirect to Signin page
        window.location.href = '/signin';

    }



    return (

        <div className='bg-[#FDFAFF] w-full h-fit grid md:grid-rows-3 fixed z-50'>

            <div className='grid w-full col-start-3 row-start-1 md:col-start-1 md:row-span-1 h-fit md:grid-cols-3 lg:grid-cols-4 xl:grid-col-5 2xl:grid-col-6 lg:py-1'>

                <div className='hidden col-span-2 col-start-1 ms-6 w-fit h-fit md:inline-block '>

                    {localStorage.getItem('isAuth') ? (
                        <div className='flex items-center justify-center text-sm text-[#8A3CCD]'>
                            <p>Welcome ! {localStorage.getItem('firstName')} {localStorage.getItem('lastName')}</p>
                            <button onClick={handleLogout} className='underline ms-5'>Logout</button>
                        </div>
                    ) : (
                        <>
                            <TopBarLinks linktext='Sign in' linkurl="/signin" />
                            <span className='text-[10px] md:text-[16px]'>&nbsp; or &nbsp;</span>
                            <TopBarLinks linktext='Sign up' linkurl="/signup" />
                        </>
                    )}

                </div>

                <div className="flex w-auto col-start-3 h-fit md:ms-2 lg:col-start-4 xl:ms-5 xl:col-start-5 2xl:col-start-6">
                    <TopBarIcons imgsrc={flag} alt="Ship to" linkurl="/country" />
                    <TopBarIcons imgsrc={wishlist} alt="Watchlist" linkurl="/watchlist" />
                    <TopBarIcons imgsrc={notification} alt="Notification" linkurl="/notification" />
                    <TopBarIcons imgsrc={profile} alt="Profile" linkurl="/profile" />

                    <MobileViewIcons className='w-7 h-7 xxs:w-9 xss:h-9' imgsrc={menu} alt="Menu" linkurl="/menu" />


                </div>

            </div>
            <div className='grid w-full grid-cols-3 row-span-2 row-start-1 md:row-start-2 md:grid-cols-4 h-fit xl:grid-cols-7 md:border-y md:border-solid md:border-gray-300 lg:py-2'>

                <div className='col-start-1 my-1 md:mt-3 lg:mt-1 ms-2 '>
                    <Link to="/">
                        <img className="w-[125px] lg:w-[135px] xl:w-[180px]" src={logo} alt="Logo" />
                    </Link>                </div>
                <div className='flex items-center col-span-2 col-start-2 row-start-2 md:row-start-1 xl:col-start-3 xl:col-span-3'>
                    <input type="text" className="md:ps-4 my-2 border-solid border-[1.5px] rounded-3xl md:rounded-r-none md:rounded-l-xl lg:rounded-l-2xl h-[17px] w-[260px] xs:h-[20px] xs:w-[400px] md:w-[500px] lg:h-[26px] md:h-[24px] xl:h-[35px] xl:w-[1000px] form-control search-input border-[#8A3CCD] focus:opacity-60 focus:ring focus:ring-violet-300 focus:outline-none placeholder:text-[8px] xs:placeholder:text-[10px] lg:placeholder:text-[16px] bg-[#FDFAFF] text-[18px] " placeholder="Search any" />
                    <img className='h-[15px] w-[15px] xss:h-[15px] xss:w-[15px] xs:h-[18px] xs:w-[18px] lg:h-[20px] lg:w-[20px] md:hidden inlne-block-ms-7 ' src={searchicon} alt="Search" />
                    <button type='button' className='hidden md:inline-flex border-solid border-[1.5px] border-[#8A3CCD] h-[23px] w-[60px] lg:h-[26px] md:h-[24px] xl:h-[35px] xl:w-[90px] rounded-r-lg lg:rounded-r-2xl items-center justify-center -ms-[1.5px]'>
                        <img className='h-[18px] w-[18px] lg:h-[20px] lg:w-[20px] ' src={searchicon} alt="Search" />
                    </button>
                </div>
                <div className='content-center justify-center col-start-1 md:col-start-4 xl:col-start-7'>
                    <Link to="/maincategories">
                        <button
                            type="button"
                            className="flex rounded-xl w-fit h-fit bg-gradient-to-r from-[#9e88f7] to-[#8317E1] text-white text-[6px] xxs:text-[8px] md:text-[10px] xl:text-[12px] font-medium lg:my-2 px-3 xss:px-4 xs:px-6 md:px-6 lg:px-10 py-2 ms-3 xss:ms-5 md:ms-12 lg:ms-14 lg:mr-1 xl:ms-1 2xl:ms-36"
                        >
                            Bid by Category
                        </button>
                    </Link>                </div>

            </div>
        </div>



    )
}

export default Header