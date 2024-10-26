import React from 'react'
import { useState } from 'react';
import SideBar from '../../../components/layout/SideBar/SideBar';
import HeaderSeller from '../../../components/layout/HeaderSeller/HeaderSeller';
function Product() {

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
                        <div className='pb-20 bg-purple-100 ' >
                   
                   <h2 className='pt-10 pl-10 ml-20 text-3xl font-bold'>All Products</h2>
                  

                   <form className='p-10 '>


                       <table className='w-11/12 ml-20 rounded-3xl bg-slate-50'>

                           <tr className='border-4 border-purple-100 rounded-2xl h-14'>
                               <th  className='float-left w-2/6 p-5 ml-20 text-xl text-left' >Name</th>
                               <th  className='float-right w-2/6 p-5 mr-64 text-xl text-right' >Price</th>
                           </tr>

                           <tr className='border-4 border-purple-100 rounded h-14' >
                               <td className='float-left w-2/6 p-5 ml-20 text-xl text-left bg-slate-50' >
                               Gold Jewellery  22 KT </td>

                               <td className='float-right w-2/6 h-10 p-5 mr-48 text-xl text-right bg-slate-50'>Rs. 50000.48</td>

                           </tr>

                           <tr className='border-4 border-purple-100 rounded h-14' >
                               <td className='float-left w-2/6 p-5 ml-20 text-xl text-left bg-slate-50' >
                               Gold Jewellery  22 KT </td>

                               <td className='float-right w-2/6 h-10 p-5 mr-48 text-xl text-right bg-slate-50'>Rs. 50000.48</td>

                           </tr>
                           <tr className='border-4 border-purple-100 rounded h-14' >
                               <td className='float-left w-2/6 p-5 ml-20 text-xl text-left bg-slate-50' >
                               Gold Jewellery  22 KT </td>

                               <td className='float-right w-2/6 h-10 p-5 mr-48 text-xl text-right bg-slate-50'>Rs. 50000.48</td>

                           </tr>
                           <tr className='border-4 border-purple-100 rounded h-14' >
                               <td className='float-left w-2/6 p-5 ml-20 text-xl text-left bg-slate-50' >
                               Gold Jewellery  22 KT </td>

                               <td className='float-right w-2/6 h-10 p-5 mr-48 text-xl text-right bg-slate-50'>Rs. 50000.48</td>

                           </tr>
                           <tr className='border-4 border-purple-100 rounded h-14' >
                               <td className='float-left w-2/6 p-5 ml-20 text-xl text-left bg-slate-50' >
                               Gold Jewellery  22 KT </td>

                               <td className='float-right w-2/6 h-10 p-5 mr-48 text-xl text-right bg-slate-50'>Rs. 50000.48</td>

                           </tr>
                           <tr className='border-4 border-purple-100 rounded h-14' >
                               <td className='float-left w-2/6 p-5 ml-20 text-xl text-left bg-slate-50' >
                               Gold Jewellery  22 KT </td>

                               <td className='float-right w-2/6 h-10 p-5 mr-48 text-xl text-right bg-slate-50'>Rs. 50000.48</td>

                           </tr>
                           <tr className='border-4 border-purple-100 rounded h-14' >
                               <td className='float-left w-2/6 p-5 ml-20 text-xl text-left bg-slate-50' >
                               Gold Jewellery  22 KT </td>

                               <td className='float-right w-2/6 h-10 p-5 mr-48 text-xl text-right bg-slate-50'>Rs. 50000.48</td>

                           </tr>

                       </table>

                       </form>
                       

                       </div>
                        </div>

                    </div>
                </div>
               
            </React.Fragment>
        </div>
  )
}

export default Product