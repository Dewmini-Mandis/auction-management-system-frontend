import React, { useState } from 'react';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import Untitled1 from '../../assets/images/Untitled-1.png';
import Untitled2 from '../../assets/images/Untitled-2.png';
import Untitled3 from '../../assets/images/Untitled-3.png';
import Untitled4 from '../../assets/images/Untitled-4.png';
import Heart from '../../assets/images/Property 1=Variant2.png';
import rectangle0 from '../../assets/images/Rectangle 269.png';
import rectangle1 from '../../assets/images/Rectangle 269 (1).png';
import rectangle2 from '../../assets/images/Rectangle 269 (2).png';
import rectangle3 from '../../assets/images/Rectangle 269 (3).png';
import rectangle4 from '../../assets/images/Rectangle 269 (4).png';
import Union from '../../assets/images/Union.png';
import Star4 from '../../assets/images/Star 4.png';
import Star6 from '../../assets/images/Star 6.png';
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


  const featuredProducts = [
    { id: 1, image: rectangle0, title: "Gold Jewellery A 22 KT", price: "50000.48", timeLeft: "8d:4h:28m" },
    { id: 2, image: rectangle1, title: "Gold Jewellery A 22 KT", price: "50000.48", timeLeft: "8d:4h:28m" },
    { id: 3, image: rectangle3, title: "Gold Jewellery A 22 KT", price: "50000.48", timeLeft: "8d:4h:28m" },
    { id: 4, image: rectangle2, title: "Gold Jewellery A 22 KT", price: "50000.48", timeLeft: "8d:4h:28m" },
    { id: 5, image: rectangle4, title: "Gold Jewellery A 22 KT", price: "50000.48", timeLeft: "8d:4h:28m" }
  ];

  return (
    <React.Fragment>
      <Header />

      <div id="controls-carousel" className="relative w-full pt-20" data-carousel="static">
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
              className="absolute p-2 text-2xl text-white transform -translate-y-1/2 bg-gray-400 rounded-full left-2 top-1/2"
            >
              &lt;
            </button>

            {/* Next button */}
            <button
              onClick={Back}
              className="absolute p-2 text-2xl text-white transform -translate-y-1/2 bg-gray-400 rounded-full right-2 top-1/2"
            >
              &gt;
            </button>

          </div>
        </div>
      </div>


<br></br>



        <div className="container p-4 mx-auto">
        <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-black">Featured Products</div>
 
              <div className="col-span-2 h-24 w-14 text-right   flex justify-center  border-[9747FF] border-dashed border-2 rounded-lg  items-center">
                
                 
                    <img className='object-bottom' src={Heart} alt="Property 1=Variant2" >
                    </img>
              </div>
            
            </div>
</div>
<br></br>
<div className="container p-4 mx-auto">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">


    {featuredProducts.map((product) => (
            <div key={product.id} className="overflow-hidden bg-white rounded-lg shadow-md">
              <img src={product.image} alt={product.title} className="object-cover w-full h-48"></img>
              <div className="p-4">
                <h3 className="text-sm font-semibold">{product.title}</h3>
                <p className="text-xs text-gray-500"> 
                  <div class="flex">
                <img src={Star4} alt="Star 4"/>
                <img  src={Star4} alt="Star 4"/>
                <img  src={Star4} alt="Star 4"/>
                <img  src={Star4} alt="Star 4"/>
                <img  src={Star6} alt="Star 6"/>4.8</div></p>
                <p className="mt-2 text-lg font-semibold text-black">LKR {product.price}</p>
                
                <p className="mt-1 text-xs font-bold text-red-500 ">{product.timeLeft}<div className="font-normal text-black">more</div></p>
                <img src={Heart} alt="Heart Icon" className="absolute w-5 h-5 cursor-pointer top-2 right-2" />
              </div>
            </div>
          ))}
        </div>
        </div>

<div className="container p-4 mx-auto">
        <div>
            <div className="flex items-center justify-between text-2xl font-bold text-black">Bid by Categories</div>

<div>
<div className="container flex items-center justify-between mx-auto min-h-10">
<div className="flex flex-row-reverse space-x-4 space-y-10">
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

    <div className="container flex items-center justify-between mx-auto min-h-10">
    <div className="flex flex-row-reverse space-x-4 space-y-4">


     
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
 
      <Footer />
    </React.Fragment>
  );
}
export default HomePage;