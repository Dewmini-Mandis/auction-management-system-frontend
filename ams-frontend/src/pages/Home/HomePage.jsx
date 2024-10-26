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
<div className="container mx-auto p-4">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">


    {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover"></img>
              <div className="p-4">
                <h3 className="text-sm font-semibold">{product.title}</h3>
                <p className="text-gray-500 text-xs"> 
                  <div class="flex">
                <img src={Star4} alt="Star 4"/>
                <img  src={Star4} alt="Star 4"/>
                <img  src={Star4} alt="Star 4"/>
                <img  src={Star4} alt="Star 4"/>
                <img  src={Star6} alt="Star 6"/>4.8</div></p>
                <p className="text-black font-semibold text-lg mt-2">LKR {product.price}</p>
                
                <p className="text-red-500 font-bold text-xs mt-1 ">{product.timeLeft}<div className="text-black font-normal">more</div></p>
                <img src={Heart} alt="Heart Icon" className="w-5 h-5 absolute top-2 right-2 cursor-pointer" />
              </div>
            </div>
          ))}
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
 
    return (

        <React.Fragment>
            <Header />
            <h1 className='text-5xl text-center pt-80'>Home Page</h1>
        </React.Fragment>
    );
};

export default HomePage;


