import React, { useState } from 'react';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import Untitled1 from '../../assets/images/Untitled-1.png';
import Untitled2 from '../../assets/images/Untitled-2.png';
import Untitled3 from '../../assets/images/Untitled-3.png';
import Untitled4 from '../../assets/images/Untitled-4.png';
import Heart from '../../assets/images/Property 1=Variant2.png';
import Group90 from '../../assets/images/Group 90.png';
import Group91 from '../../assets/images/Group 91.png';
import Group92 from '../../assets/images/Group 92.png';
import Group93 from '../../assets/images/Group 93.png';
import Group94 from '../../assets/images/Group 94.png';
import Ellipse7 from '../../assets/images/Ellipse 7.png';
import Ellipse8 from '../../assets/images/Ellipse 8.png';
import Ellipse9 from '../../assets/images/Ellipse 9.png';
import Ellipse10 from '../../assets/images/Ellipse 10.png';
import Ellipse11 from '../../assets/images/Ellipse 11.png';
import Ellipse12 from '../../assets/images/Ellipse 12.png';
import Ellipse13 from '../../assets/images/Ellipse 13.png';
import Ellipse14 from '../../assets/images/Ellipse 14.png';
import Ellipse15 from '../../assets/images/Ellipse 15.png';
import Ellipse16 from '../../assets/images/Ellipse 16.png';
import Ellipse18 from '../../assets/images/Ellipse 18.png';
import Ellipse19 from '../../assets/images/Ellipse 19.png';


const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images
  const items = [Untitled1, Untitled2, Untitled3, Untitled4];

  // Function to show the previous image
  const Back1 = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  // Function to show the next image
  const Back = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <React.Fragment>
      <Header />

      <div id="controls-carousel" className="relative w-full" data-carousel="static">
        <div className="relative h-56 overflow-hidden md:h-auto">
          <div className="flex">

            {/* Display the active image based on the current index */}
            <img
              src={items[currentIndex]}
              alt={`Untitled-${currentIndex + 1}`}
              className="w-full flex-none md:h-[500px] object-cover"
            />

            {/* Back button */}
            <button
              onClick={Back1}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white p-2 text-2xl rounded-full"
            >
              &lt;
            </button>

            {/* Next button */}
            <button
              onClick={Back}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white p-2 text-2xl rounded-full"
            >
              &gt;
            </button>

          </div>
        </div>
      </div>


<br></br>



        <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-black">Featured Products</div>
 
              <div className="col-span-2 h-24 w-14 text-right   flex justify-center  border-[9747FF] border-dashed border-2 rounded-lg  items-center">
                
                 
                    <img className='object-bottom' src={Heart} alt="Property 1=Variant2" >
                    </img>
              </div>
            
            </div>
</div>
<br></br>

<div>
<div className="flex items-center justify-between min-h-10 container w-fit mx-auto">
<div className="flex flex-row-reverse ">
   
   <a href="#">
    <img src={Group90} alt="Group 90" className="mx-3">
    </img>
    </a>


    <a href="#">
    <img src={Group91} alt="Group 91" className='mx-3'>
    </img>
    </a>

    <a href="#">
    <img src={Group92} alt="Group 92" className='mx-3'>
    </img>
    </a>


    <a href="#">
    <img src={Group93} alt="Group 93" className='mx-3'>
    </img>
    </a>

    <a href="#">
    <img src={Group94} alt="Group 94" className='mx-3'>
    </img>
    </a>

</div>
</div>
</div>

<div className="container mx-auto p-4">
        <div>
            <div className="text-2xl font-bold text-black  flex justify-between items-center">Bid by Categories</div>

<div>
<div className="flex items-center justify-between min-h-10 container mx-auto">
<div className="flex flex-row-reverse space-x-4  space-y-10">
   <br></br>
<a href="#">
    <img src={Ellipse12} alt="Ellipse 12" className="mx-2 my-2 ">
    </img>
    <p className="text-[10px] text-center font-bold text-black ">Home & Garden</p>
    </a>

    <a href="#">
    <img src={Ellipse11} alt="Ellipse 11" className="mx-2">
    </img>
    <p className="text-[10px] text-center font-bold text-black">Art</p>
    </a>

    <a href="#">
    <img src={Ellipse10} alt="Ellipse 10" className="mx-2">
    </img>
    <p className="text-[10px] text-center font-bold text-black">Furniture</p>
    </a>

    <a href="#">
    <img src={Ellipse9} alt="Ellipse 9" className="mx-2">
    </img>
    <p className="text-[10px] text-center font-bold text-black">Furniture</p>
    </a>

    <a href="#">
    <img src={Ellipse8} alt="Ellipse 8" className="mx-2">
    </img>
    <p className="text-[10px] text-center font-bold text-black">Jewellery</p>
    </a>

    <a href="#">
    <img src={Ellipse7} alt="Ellipse 7" className="mx-2">
    </img>
    <p className="text-[10px] text-center font-bold text-black">Real State</p>
    </a>

    </div>
    </div>

    <div className="flex items-center justify-between min-h-10 container mx-auto">
    <div className="flex flex-row-reverse space-x-4  space-y-4">


     
    <a href="#">
    <img src={Ellipse18} alt="Ellipse 18" className="mx-2 my-4">
    </img>
    <span className="text-[10px] text-center font-bold text-black "><div className="text-center">Music</div></span>
    </a>
    
    <a href="#">
    <img src={Ellipse19} alt="Ellipse 19" className="mx-2">
    </img>
    <p className="text-[10px] text-center font-bold text-black">Toys</p>
    </a>

    <a href="#">
    <img src={Ellipse16} alt="Ellipse 16" className="mx-2">
    </img>
    <p className="text-[10px] text-center font-bold text-black">Fashion</p>
    </a>

    <a href="#">
    <img src={Ellipse15} alt="Ellipse 15" className="mx-2">
    </img>
    <p className="text-[10px] text-center font-bold text-black">Books</p>
    </a>

    <a href="#">
    <img src={Ellipse14} alt="Ellipse 14" className="mx-2">
    </img>
    <p className="text-[10px] text-center font-bold text-black">I phones</p>
    </a>

    <a href="#">
    <img src={Ellipse13} alt="Ellipse 13" className="mx-2">
    </img>
    <p className="text-[10px] text-center font-bold text-black">Electric</p>
    </a>

   

</div>
</div>

</div>
</div>
</div>
 

    <Footer/>
           
        </React.Fragment>
    );
};

export default HomePage;


