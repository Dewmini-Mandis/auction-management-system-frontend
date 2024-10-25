import React from 'react';



const Slidebar = () => {

        

    return (
        <React.Fragment>
            
            <slidebar>

            <div className="bg-gray-50 px-4 py-2 border-b">
        <span className="text-sm text-[C6C6C6] border-bottom: 0.8px solid">Lansuwa &gt; My account</span>
      </div>

     
    
      
        <div className="w-1/4 bg-white h-screen border-r">
          <ul>
            <div class="cursor-pointer">
            <li className="mb-4 px-3">My Account</li>
            <div className="bg-[#480C7B] md:w-auto">
            <li className="mb-4  row-start-1 text-white px-3 p-2 ">Notifications</li></div>
           <div> <li className="mb-4 px-3 ">Watchlist</li></div>
            <li className="mb-4 px-3 ">My Bids</li>
            <li className="mb-4 px-3">My Orders</li>
            <li className="mb-4">
             
              <span className="ml-2">
               <select>
                 <option value="Seller">Seller</option>
                 <option value="Seller1">Seller1</option>
                 <option value="Seller2">Seller2</option>
                 <option value="Seller3">Seller3</option>
               </select>

              </span>
            </li>
            </div>
          </ul>
        </div>



</slidebar>

            </React.Fragment>
    );
};

export default Slidebar;