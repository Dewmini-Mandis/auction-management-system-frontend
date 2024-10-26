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
                        <div className='pb-20 bg-purple-100 ' >
                   
                   <h2 className='pt-10 pl-10 ml-20 text-3xl font-bold'>Complete your listing</h2>
                   <div className=''>

                   <form className='p-10 '>


                       <table className='w-11/12 ml-20 bg-slate-50 rounded-xl'>

                           <tr>
                               <th  className='p-5 pt-10 pl-10 ml-0 text-xl text-left' >Product Details</th>
                           </tr>

                           <tr>
                               <td  className='w-1/2 pl-10 text-left'>Product Name</td>
                               <td  className='w-1/2 pl-10 text-left'>Category</td>
                           </tr>

                           <tr>
                               <td  ><input type="text" className='w-11/12 h-10 mt-3 ml-10 border-4 rounded bg-slate-50' /></td>

                               <td>
                                   <select className='w-11/12 h-10 mt-3 ml-10 border-4 rounded bg-slate-50'>
                                       
                                       <option value=""></option>
                                       <option value="Electronic">Electronic</option>
                                       <option value="Clothing">Clothing</option>
                                       <option value="Furniture">Furniture</option>
                                   </select>
                                   
                                   </td>

                           </tr>

                           <tr>

                               <td className='w-1/2 pt-5 pb-5 pl-10 text-left'>Short Description</td>
                               <td className='w-1/2 pt-5 pb-5 pl-10 -mb-10 text-left'>Sub-Category</td>

                           </tr>
                           
                           <tr>
                               <td className='w-1/2 pb-5 text-left' ><input type="text" className='w-11/12 h-10 ml-10 border-4 rounded bg-slate-50 min-h-56'/></td>
                               <td className='w-1/2 pb-5 text-left'><select className='w-11/12 h-10 ml-10 align-top border-4 rounded bg-slate-50' >
                                       
                                       <option value=""></option>
                                       <option value="Electronic">Electronic</option>
                                       <option value="Clothing">Clothing</option>
                                       <option value="Furniture">Furniture</option>

                                   </select>

                                   <div className='mt-5'>
                                   <label className='mt-5 ml-10 text-left '>Lables</label>
                                   <label className='ml-10 text-left '><input type="search" id="query" name="q" placeholder="         Search & add label names" className='w-1/2 h-10 border-4 ml-60 rounded-3xl bg-slate-50 '/></label>
                                   </div>

                                   <div className=''>
                                   
                                   <div className='float-left w-11/12 h-24 mt-5 ml-10 border-4 rounded bg-slate-50' ><button className='w-20 m-3 border-2 rounded-3xl bg-slate-100 border-slate-500'>Men</button></div>
                                   </div>
                                   </td>

                           </tr>
                         
                          
                           

                       </table>

                  
                   

                  
                  
                       <table className='w-11/12 mt-10 ml-20 bg-slate-50 rounded-xl'>

                           <tr>
                               <th  className='p-5 pt-10 pl-10 ml-0 text-xl text-left' >Product Images & Videos</th>

                           </tr>

                           <tr>

<td> 
   
   <div className="float-right w-12 mb-5 mr-20 border border-purple-700 rounded-md">
   <label for="upload" className="float-left cursor-pointer ">
    
   <span className="float-left ml-1.5 -mt-1.5 text-5xl text-center text-purple-700 ">+</span>
   </label>
   <input id="upload" type="file" className="hidden p-5" />

</div></td>

</tr>

<tr> 
                               <td>       <div class=" w-11/12 relative border-4 bg-slate-50  rounded-lg  ml-20 min-h-56 p-10 mb-10 " id="dropzone">
                                           <input type="file" class="absolute inset-0 w-full h-full opacity-0 z-50 min-h-56 p-1010 " />
                                           <div class="text-center mt-8">
                                           <img class="mx-auto h-12 w-12" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt=""/>

                                           
                                           <p class="mt-1 text-xs text-gray-500">
                                            Drag and drop images & videos
                                           </p>
                           </div>

                           <img src="" class="mt-4 mx-auto max-h-40 hidden" id="preview"/>
                       </div></td>

                           </tr>






                           </table>

                    
                           <table className='w-11/12 mt-10 ml-20 bg-slate-50 rounded-xl'>

                           <tr>
                               <th  className='p-5 pt-10 pl-10 ml-0 text-xl text-left' >Shipping</th>
                           </tr>

                           <tr>
                               <td  className='w-1/2 pl-10 text-left'>Shipping Methods</td>
                               <td  className='pl-10 text-left '>Accept returns</td>
                               <label class="inline-flex items-center cursor-pointer">
 <input type="checkbox" value="" className="sr-only peer"/>
 <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-400 float-left -ml-20 "></div>
 
</label>
                           </tr>

                           <tr>
                               <td  > <select className='w-11/12 h-10 mt-3 ml-10 border-4 rounded bg-slate-50'>
                                       
                                       <option value="Standard Shipping">Standard Shipping</option>
                                       <option value="International Shipping">International Shipping</option>
                                       <option value="Two-Day Shipping">Two-Day Shipping</option>
                                       <option value="Same-Day Delivery">Same-Day Delivery</option>
                                       <option value="In-Store Pickup">In-Store Pickup</option>
                                   </select>
                                   </td>

                               <td>
                                  
                                   </td>

                           </tr>

                           <tr>

                               <td className='w-1/2 pt-5 pb-5 pl-10 text-left'><label>Package weight</label><label className='ml-32'>Package dimensions</label></td>
                               <td className='w-1/2 pt-5 pb-5 pl-10 -mb-10 text-left'>Allowed with in</td>

                           </tr>
                           
                           <tr>
                               <td className='w-1/2 pb-5 text-left' >
                               <div className='float-left mt-28'>
                               <input type="text" placeholder='           KG' className='float-left w-20 ml-10 placeholder-right border-4 rounded -mt-28 bg-slate-50'/> 
                               
                               <div className='ml-60'>
                               <input type="text" placeholder='           IN' className='float-left w-20 ml-10 placeholder-right border-4 rounded -mt-28 bg-slate-50'/>    
                                <label className='float-left text-center ml-36 -mt-28'>X</label> 
                                <input type="text" placeholder='           IN' className='float-left w-20 placeholder-right border-4 rounded ml-44 -mt-28 bg-slate-50'/>  
                                <label className='float-left text-center ml-72 -mt-28'>X</label> 
                                <input type="text" placeholder='           IN' className='float-left w-20 placeholder-right border-4 rounded ml-80 -mt-28 bg-slate-50 '/> 
                               </div></div></td>


                               <td className='w-1/2 pb-5 text-left'><select className='float-left w-11/12 h-10 ml-10 -mt-4 border-4 rounded bg-slate-50' >
                                       
                                        <option value="30" >30 Days</option>
                                       <option value="29">29 Days</option>
                                       <option value="28">28 Days</option>
                                       <option value="27">27 Days</option>
                                       <option value="26">26 Days</option>
                                       <option value="25">25 Days</option>
                                     
                                  


                                   </select>
                                   <label className='float-left w-full pt-5 pb-5 ml-10 '>Return shipping paid by</label>

                                   </td>
                                   </tr>

                                                      
                                   <tr>
                                      
                                   <td className='float-left w-full pt-5 pb-5 pl-10 -mt-20 text-left '><input type="checkbox"/> Irregular package</td> 
                                   
                                 
                                 
                                   </tr>
                                  




                                  <tr>
                                   <td  className='float-left w-1/2 pt-5 pb-5 text-left'><label className='ml-10'></label></td>
                                   <td className='w-1/2 pt-5 pb-5 text-left ' ><select className='float-left w-11/12 h-10 ml-10 -mt-16 border-4 rounded bg-slate-50' >
                                       
                                       <option value="Buyer" >Paid by Buyer</option>
                                       <option value="Seller">Paid by Seller</option>

                                   </select></td>

                                  </tr>

                                  <tr>
                                   <td  className='float-left w-1/2 pt-5 pb-5 text-left'><label className='ml-10'></label></td>
                                   <td className='w-1/2 pt-5 pb-5 text-left ' ><label className='float-left w-full pt-3 pb-5 ml-10 -mt-20'>Return method</label>
                                   </td>

                                  </tr>


                                  <tr>
                                   <td  className='float-left w-1/2 pt-5 pb-5 text-left'><label className='ml-10'></label></td>
                                   <td className='w-1/2 pb-5 -mt-20 text-left' ><select className='float-left w-11/12 h-10 ml-10 -mt-20 border-4 rounded bg-slate-50' >
                                       
                                       <option value="Buyer" >Money back</option>
                                       <option value="Seller">Bank Transfer</option>

                                   </select></td>

                                  </tr>
                           
                         
                          
                           

                       </table>


                          <div className='float-right pt-5 mt-5 mr-24'>
                          <input type='reset' name='Chancel' value="Chancel" className='p-3 mr-10 text-lg font-medium text-center text-purple-900 bg-gray-300 border-2 cursor-pointer w-28 rounded-2xl'/>   

                           <input type='submit' name='Save' value="Save" className='p-3 text-lg font-medium text-center text-white bg-purple-500 border-2 cursor-pointer w-28 rounded-2xl'/>
                           
                           </div> 

                   </form>

                   </div>

                   </div>
                        </div>

                    </div>
                </div>
               
            </React.Fragment>
        </div>
  )
}

export default ProductList