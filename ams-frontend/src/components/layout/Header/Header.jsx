import React from 'react'
import TopBarLinks from '../../Header/TopBarLinks';
import TopBarIcons from '../../Header/TopBarIcons';
import flag from '../../../assets/images/flag.png';
import cart from '../../../assets/images/cart.png';
import wishlist from '../../../assets/images/wishlist.png';
import notification from '../../../assets/images/notification.png';

function Header() {
    return (
        <div className='bg-[#F8F0FF] w-full h-fit'>
            <div className='grid w-full h-fit md:grid-cols-3 lg:grid-cols-4 xl:grid-col-5 2xl:grid-col-6'>

            <div className='col-start-1 mb-1 ms-6 w-fit h-fit'>
                    <TopBarLinks linktext='Sign in' linkurl="/signin" /><span className='text-[#480C7B]'>&nbsp; or &nbsp;</span>
                    <TopBarLinks linktext='Register' linkurl="/register" />
                </div>

                <div class="flex w-auto h-fit md:col-start-3 md:ms-2 lg:col-start-4 xl:ms-5 xl:col-start-5 2xl:col-start-6">
                    <TopBarIcons imgsrc={flag} alt="Ship to" linkurl="/country" />
                    <TopBarIcons imgsrc={cart} alt="Cart" linkurl="/cart" />
                    <TopBarIcons imgsrc={wishlist} alt="Wishlist" linkurl="/wishlist" />
                    <TopBarIcons imgsrc={notification} alt="Notification" linkurl="/notification" />
                </div>
            </div>
        </div>
    )
}

export default Header