import React from 'react'
import { useState } from 'react';
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
    <div className='w-full h-screen parent-container' >
            <React.Fragment>
                <div className="flex w-full h-full">

                <SideBar isSidebarVisible={isSidebarVisible} onBreadcrumbChange={handleBreadcrumbChange}/>

                    <div className={`flex flex-col md:w-5/6 bg-[#F5F0FA] ${isSidebarVisible ? 'w-3/4' : 'w-full'}`}>
                    <HeaderSeller toggleSidebarVisibility={toggleSidebarVisibility} isSidebarVisible={isSidebarVisible} breadcrumb={breadcrumb}/>

                        <div className="flex-grow p-4 text-black border border-solid border-neutral-200">
                            
                        <div>
      <div className='pb-20 bg-purple-100' >
                   
                   <h2 className='pt-3 pl-10 ml-20 text-xl font-inter'>Add new category</h2>
                   <div className='-mt-9'>
                   <form className='p-10 '>
                       <table className='w-11/12 ml-20 bg-slate-50 rounded-xl'>

                           <tr>
                               <th  className='p-5 pt-10 pl-10 ml-0 text-xl text-left' >Category Details</th>
                           </tr>

                           <tr>
                               <td  className='w-1/2 pb-16 pl-10 text-left'>Category Name</td>
                               <td  className='float-left w-1/2 pl-10 text-left'>Description</td>
                           </tr>

                           <tr>
                               <td  ><div className='pb-5 mt-8'><input type="text" className='float-left w-11/12 h-10 ml-10 -mt-24 border-2 rounded bg-slate-50' /></div>
                               <lable  className='float-left w-11/12 pl-10 mb-5 text-left -mt-14 '>Images</lable>
                               <div className="float-right w-12 mb-5 mr-5 -mt-8 border border-purple-700 rounded-md">
    <label for="upload" className="float-left cursor-pointer ">
     
    <span className="float-left ml-1.5 -mt-1.5 text-5xl text-center text-purple-700 ">+</span>
    </label>
    <input id="upload" type="file" className="hidden p-5" />

</div>

<div class=" w-11/12 relative border-2 bg-slate-50  rounded-lg  ml-10 min-h-40 p-10 float-left -mt-3  " id="dropzone">
                                            <input type="file" class="float-left absolute inset-0 w-full h-full opacity-0 z-50 min-h-56 " />
                                            <div class="text-center">
                                            <img class="mx-auto h-12 w-12" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt=""/>

                                            
                                            <p class="mt-1 text-xs text-gray-500">
                                             Drag and drop images & videos
                                            </p>
                            </div>

                            <img src="" class="mt-4 mx-auto max-h-40 hidden" id="preview"/>
                        </div> 
                               </td>
                               <td className='float-left w-11/12 pb-5 text-left' ><input type="text" className='float-left w-11/12 ml-10 -mt-12 border-2 rounded bg-slate-50 min-h-72'/></td><br/>
                     </tr>
                           </table>
                       <div className='float-right pt-5 mt-5 mr-24'>
                           <input type='reset' name='Chancel' value="Chancel" className='p-2 mr-10 text-sm font-medium text-center text-purple-900 bg-gray-300 border-2 cursor-pointer w-28 rounded-2xl'/>   

                            <input type='submit' name='Save' value="Create" className='p-2 text-sm font-medium text-center text-white bg-purple-500 border-2 cursor-pointer w-28 rounded-2xl'/>
                            
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
   
  )
}

export default Category