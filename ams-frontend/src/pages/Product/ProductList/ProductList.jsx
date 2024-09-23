import React from 'react'
import { useState } from 'react';
import SideBar from '../../../components/layout/SideBar/SideBar';
import HeaderSeller from '../../../components/layout/HeaderSeller/HeaderSeller';
function ProductList() {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [breadcrumb, setBreadcrumb] = useState('Lansuwa > '); 


    const toggleSidebarVisibility = () => {
        setIsSidebarVisible(!isSidebarVisible);
      };
      
      const handleBreadcrumbChange = (newBreadcrumb) => {
        setBreadcrumb(newBreadcrumb);
      };
   
  return (
    <div className='w-full h-screen parent-container' >
            <React.Fragment>
                <div className="flex w-full h-full">

                <SideBar isSidebarVisible={isSidebarVisible} onBreadcrumbChange={handleBreadcrumbChange}/>

                    <div className={`flex flex-col md:w-5/6 bg-[#F5F0FA] ${isSidebarVisible ? 'w-3/4' : 'w-full'}`}>
                    <HeaderSeller toggleSidebarVisibility={toggleSidebarVisibility} isSidebarVisible={isSidebarVisible} breadcrumb={breadcrumb}/>

                        <div className="flex-grow p-4 text-black border border-solid border-neutral-200">
                            <p>Welcome to the seller dashboard!</p>
                        </div>

                    </div>
                </div>
               
            </React.Fragment>
        </div>
  )
}

export default ProductList