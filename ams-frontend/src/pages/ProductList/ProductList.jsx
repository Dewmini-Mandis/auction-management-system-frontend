import React from 'react'
import SideBar from '../../components/layout/SideBar/SideBar';
import HeaderSeller from '../../components/HeaderSeller/HeaderSeller';
function ProductList() {
  return (
    <div>
            <React.Fragment>
                <div className="flex w-full h-screen">

                    <SideBar />

                    <div className="flex flex-col w-5/6 bg-slate-600">
                        <HeaderSeller />

                        <div className="flex-grow p-4 text-white">
                            <p>Welcome to the seller dashboard!</p>
                        </div>

                    </div>
                </div>
               
            </React.Fragment>
        </div>
  )
}

export default ProductList