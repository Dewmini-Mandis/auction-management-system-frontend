import React, { useState } from 'react';
import HeaderSeller from '../../components/layout/HeaderSeller/HeaderSeller';
import SideBar from '../../components/layout/SideBar/SideBar';


function Category() {
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
                            <div>
                                <div className='pb-20 bg-purple-100'>
                                    <h2 className='pt-3 pl-10 ml-20 text-xl font-inter'>Delect new category</h2>
                                    <div className='-mt-9'>
                                        <form className='p-10'>
                                            <table className='w-11/12 ml-20 bg-slate-50 rounded-xl'>
                                                <thead>
                                                    <tr>
                                                        <th className='p-5 pt-10 pl-10 ml-0 text-xl text-left'>Category Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className='w-1/2 pb-16 pl-10 text-left'>Category Name</td>
                                                        <td className='float-left w-1/2 pl-10 text-left'>Description</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className='pb-5 mt-8'>
                                                                <select className='float-left w-11/12 h-10 ml-10 -mt-24 border-2 rounded bg-slate-50'>
                                                                    <option value="Option 1">Select Category</option>
                                                                    <option value="Option 2">Real estate</option>
                                                                    <option value="Option 3">Jewellery</option>
                                                                    <option value="Option 4">Furniture</option>
                                                                    <option value="Option 5">Art</option>
                                                                    <option value="Option 6">Home & Garden</option>
                                                                    <option value="Option 7">Electric</option>
                                                                    <option value="Option 8">I phone</option>
                                                                    <option value="Option 9">Books</option>
                                                                    <option value="Option 10">Fashion</option>
                                                                    <option value="Option 11">Toys</option>
                                                                    <option value="Option 12">Music</option>
                                                                </select>
                                                            </div>
                                                            <label htmlFor="upload" className='float-left w-11/12 pl-10 mb-5 text-left -mt-14'>Images</label>
                                                            <div className="float-right w-12 mb-5 mr-5 -mt-8 border border-purple-700 rounded-md">
                                                                <label htmlFor="upload" className="float-left cursor-pointer">
                                                                    <span className="float-left ml-1.5 -mt-1.5 text-5xl text-center text-purple-700">+</span>
                                                                </label>
                                                                <input id="upload" type="file" className="hidden p-5" />
                                                            </div>
                                                            <div className="relative float-left w-11/12 p-10 ml-10 -mt-3 border-2 rounded-lg bg-slate-50 min-h-40" id="dropzone">
                                                                <input type="file" className="absolute inset-0 z-50 float-left w-full h-full opacity-0 min-h-56"  />
                                                                <div className="text-center">
                                                                    <img className="w-12 h-12 mx-auto" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt="Upload icon" />
                                                                    <p className="mt-1 text-xs text-gray-500">Drag and drop images & videos</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className='float-left w-11/12 pb-5 text-left'>
                                                            <input type="text" className='float-left w-11/12 ml-10 -mt-12 border-2 rounded bg-slate-50 min-h-72' />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className='float-right pt-5 mt-5 mr-24'>
                                                <input type='reset' name='Cancel' value="Cancel" className='p-2 mr-10 text-sm font-medium text-center text-purple-900 bg-gray-300 border-2 cursor-pointer w-28 rounded-2xl' />
                                                <input type='submit' name='Delect' value="Delect" className='p-2 text-sm font-medium text-center text-white bg-purple-500 border-2 cursor-pointer w-28 rounded-2xl' />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
}

export default Category;
