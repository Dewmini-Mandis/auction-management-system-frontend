import React, { useEffect, useState } from 'react';
import HeaderSeller from '../../components/layout/HeaderSeller/HeaderSeller';
import SideBar from '../../components/layout/SideBar/SideBar';

function CategoryProduct() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [breadcrumb, setBreadcrumb] = useState('Lansuwa > ');
    
    const toggleSidebarVisibility = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const handleBreadcrumbChange = (newBreadcrumb) => {
        setBreadcrumb(newBreadcrumb);
    };

    return (
        <div className='w-full h-screen parent-container'>
            <React.Fragment>
                <div className="flex w-full h-full">
                    <SideBar isSidebarVisible={isSidebarVisible} onBreadcrumbChange={handleBreadcrumbChange} />

                    <div className={`flex flex-col md:w-5/6 bg-[#F5F0FA] ${isSidebarVisible ? 'w-3/4' : 'w-full'}`}>
                        <HeaderSeller toggleSidebarVisibility={toggleSidebarVisibility} isSidebarVisible={isSidebarVisible} breadcrumb={breadcrumb} />

                        <div className="flex-grow p-4 text-black border border-solid border-neutral-200">
                            <div className='pb-20 bg-purple-100'>
                                <h2 className='pt-3 pl-10 ml-20 text-2xl font-inter'>All Categories</h2>

                                <form className='p-10'>
                                    <table className='w-11/12 ml-20 -mt-4 rounded-3xl bg-slate-50'>
                                        <tbody>
                                            <tr className='h-2 border-4 border-purple-100 rounded'>
                                                <td className='float-left w-2/6 p-2 ml-20 text-sm text-left bg-slate-50'>Real Estate</td>
                                            </tr>
                                            <tr className='h-2 border-4 border-purple-100 rounded'>
                                                <td className='float-left w-2/6 p-2 ml-20 text-sm text-left bg-slate-50'>Vehicles</td>
                                            </tr>
                                            <tr className='h-2 border-4 border-purple-100 rounded'>
                                                <td className='float-left w-2/6 p-2 ml-20 text-sm text-left bg-slate-50'>Jewellery</td>
                                            </tr>
                                            <tr className='h-2 border-4 border-purple-100 rounded'>
                                                <td className='float-left w-2/6 p-2 ml-20 text-sm text-left bg-slate-50'>Furniture</td>
                                            </tr>
                                            <tr className='h-2 border-4 border-purple-100 rounded'>
                                                <td className='float-left w-2/6 p-2 ml-20 text-sm text-left bg-slate-50'>Art</td>
                                            </tr>
                                            <tr className='h-2 border-4 border-purple-100 rounded'>
                                                <td className='float-left w-2/6 p-2 ml-20 text-sm text-left bg-slate-50'>Home & Garden</td>
                                            </tr>
                                            <tr className='h-2 border-4 border-purple-100 rounded'>
                                                <td className='float-left w-2/6 p-2 ml-20 text-sm text-left bg-slate-50'>Electric</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className='float-right pt-5 mt-5 mr-24'>
                                        <button type='reset' name='Cancel' className='p-1 mr-10 text-sm font-medium text-center text-purple-900 bg-gray-300 border-2 cursor-pointer w-28 rounded-2xl'>
                                            Cancel
                                        </button>
                                        <button type='submit' name='Save' className='p-1 text-sm font-medium text-center text-white bg-purple-500 border-2 cursor-pointer w-28 rounded-2xl'>
                                            Create
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
}

export default CategoryProduct;
