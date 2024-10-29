import React from 'react';
import Header from '../../components/layout/Header/Header';
import rectangle122 from '../../assets/images/Rectangle 122.png';
import rectangle123 from '../../assets/images/Rectangle 123.png';
import rectangle124 from '../../assets/images/Rectangle 124.png';
import rectangle125 from '../../assets/images/Rectangle 125.png';
import rectangle126 from '../../assets/images/Rectangle 126.png';
import rectangle127 from '../../assets/images/Rectangle 127.png';
import star4 from '../../assets/images/Star 4.png';
import star6 from '../../assets/images/Star 6.png';
import love from '../../assets/images/Love.png';
import rectangle0 from '../../assets/images/Rectangle 269 (8).png';
import rectangle1 from '../../assets/images/Rectangle 269 (7).png';
import rectangle2 from '../../assets/images/Rectangle 269-(3).png';
import rectangle3 from '../../assets/images/Rectangle 269-(1).png';
import rectangle4 from '../../assets/images/Rectangle 269-7.png';
import rectangle5 from '../../assets/images/Rectangle 269 (6).png';
import rectangle6 from '../../assets/images/Rectangle 269-(4).png';
import rectangle7 from '../../assets/images/Rectangle 269-(2).png';
import rectangle8 from '../../assets/images/Rectangle 269-0.png';
import rectangle9 from '../../assets/images/Rectangle 269 (5).png';


const AuctionDetails = () => {

  const relateditems = [
    { id: 1, image: rectangle0, title: "Electric Indicator", price: "210.48", timeLeft: "7d:4h:18m" },
    { id: 1, image: rectangle0, title: "Electric Indicator", price: "210.48", timeLeft: "7d:4h:18m" },
    { id: 1, image: rectangle1, title: "Electric Test Pen", price: "598.48", timeLeft: "7d:4h:18m" },
    { id: 1, image: rectangle9, title: "Abs Digital Voltmeter", price: "333.48", timeLeft: "7d:4h:18m" },
    { id: 1, image: rectangle2, title: "Digital Voltage Tester", price: "528.48", timeLeft: "7d:4h:18m" },
    { id: 1, image: rectangle3, title: "Electric Brush", price: "72,122.48", timeLeft: "7d:4h:18m" },
    { id: 1, image: rectangle4, title: "Calculator", price: "1346.48", timeLeft: "7d:4h:18m" },
    { id: 1, image: rectangle4, title: "Calculator", price: "1346.48", timeLeft: "7d:4h:18m" },
    { id: 1, image: rectangle5, title: "Slendar Laptop Desk", price: "6142.48", timeLeft: "7d:4h:18m" },
    { id: 1, image: rectangle6, title: "Mini pc Fanless", price: "22515.48", timeLeft: "7d:4h:18m" },
    { id: 1, image: rectangle7, title: "Handeld Printer", price: "210,42.48", timeLeft: "7d:4h:18m" },
    { id: 1, image: rectangle8, title: "One Capacitive Touch", price: "128,211.48", timeLeft: "7d:4h:18m" }
  ];



  return (
    <React.Fragment>
      <Header />
      <div className=" mx-6  bg-white   rounded-lg">
        <div className="bg-gray-50 px-4 py-2 border-b">
          <span className="text-sm text-[C6C6C6] border-bottom: 0.8px solid ">Lansuwa &gt; Electronics &gt; Laptops &gt; Win 11 Pro Intel Celeron J4125 15.6 Inch Windows11 Pro 1920*1080 ame Office Laptop 12GB RAM ....</span>
        </div>



        {/* Main Content */}
        <div className=" px-3 flex flex-cols-2 md:flex-row py-2">
          {/* Left section: Product images */}
          <div className="md:w-1/3">
            <img
              src={rectangle122}
              alt="Rectangle 122"
              className="w-full h-60 object-cover "
            />
            <div className="flex space-x-2 mt-2">
              <img src={rectangle123} alt="Rectangle123" className="w-16 h-16 object-cover " />
              <img src={rectangle124} alt="Rectangle124" className="w-16 h-16 object-cover " />
              <img src={rectangle125} alt="Rectangle125" className="w-16 h-16 object-cover " />
              <img src={rectangle126} alt="Rectangle126" className="w-16 h-16 object-cover " />
              <img src={rectangle127} alt="Rectangle127" className="w-16 h-16 object-cover " />
            </div>
          </div>

          {/* Right section: Product details */}
          <div className=" mx-5  bg-white ">
            <div className="bg-gray-50 px-4 py-2 border-b">
              <span className="text-sm text-[C6C6C6] border-bottom: 0.8px solid ">
                Win 11 Pro Intel Celeron J4125 15.6 Inch Windows11 Pro 1920*1080 Game Office Laptop 12GB RAM 512GB/1TB SSD Windows 10 NoteBook
              </span>
              <p className="text-sm text-gray-500 mt-1">
                <div class="flex">
                  <img src={star4} alt="Star 4" />
                  <img src={star4} alt="Star 4" />
                  <img src={star4} alt="Star 4" />
                  <img src={star4} alt="Star 4" />
                  <img src={star6} alt="Star 6" />
                  4.2 12 Reviews | 56 sold </div></p></div>



            <div className="bg-gray-50 px-4 py-2 border-b">
              <span className="text-sm text-[C6C6C6] border-bottom: 0.8px solid col-span-2 ">

              </span>
              <p className="text-sm text-gray-500 mt-1">
                <div class="flex">

                  4.2 12 Reviews | 56 sold </div></p></div>

            {/* Seller Info */}
            <div className="bg-gray-50 px-4 py-2 border-b">
              <span className="text-sm text-[C6C6C6] border-bottom: 0.8px solid ">
                <div className="mt-4">
                  <p className="text-gray-700">Seller: <span className="font-medium"> <button className="text-black hover:underline mt-2">kamal gunaratne (1056)</button></span></p>
                  <button className="text-black hover:underline mt-2">Seller's other item | Contact seller</button>
                </div>

              </span>
            </div>

            {/* Bidding and Pricing */}
            <div className="bg-gray-50 px-4 py-2 border-b">
              <span className="text-sm text-[C6C6C6] border-bottom: 0.8px solid ">

                <div className="mt-4">
                  <p className="text-3xl font-semibold text-black">LKR 250,000.00</p>
                  <p className="text-gray-500 flex">2 bids | Ends in &nbsp; <div class="text-red-600"> 6m 49s</div> - Thursday, 01:42 AM</p>
                </div>
                {/* Action Buttons */}
                <div className="mt-6 flex space-x-4">
                  <button className="px-6 py-2 bg-[#480C7B]  text-white rounded-lg hover:bg-[#480C7B]">Place bid</button>
                  <button className="px-6 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-300 border-black">Add to watchlist</button>
                </div>
              </span>
            </div>






            {/* Shipping and Delivery */}
            <div className="mt-4 text-gray-600">
              <p>Shipping: <span className=" font-bold">U$35.00</span> FedEx International Priority®. See detailsfor shipping
                International shipment of items may be subject to customs processing and additional charges.
                Located in: Seoul, Dongjak-gu, South Korea®</p><br />
              <p>Delivery: Estimated between <span className="font-medium">Wed, Sep 11</span> and <span className="font-medium">Wed, Sep 25</span>
                Please allow additional time if international delivery is subject to customs processing.</p><br />

              <p>Returns: 30 days returns. Buyer pays for return shipping. See details.</p><br />

              <p>Payments:  Estimated between <span className="font-medium">Wed, Sep 11</span> and <span className="font-medium">Wed, Sep 25</span>
                Please allow additional time if international delivery is subject to customs processing.</p>
            </div>
          </div>
        </div>



        {/* Related Items */}

        <div className="container mx-10 p-4">
          <div className="flex justify-between items-center content-center">
            <div className="text-2xl font-semibold text-black">Related items</div>

          </div>
        </div>
        <br></br>

        <div className="container mx-6 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">


            {relateditems.map((product) => (
              <div key={product.id} className="bg-white shadow-md  overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover"></img>
                <div className="">
                  <h3 className="text-sm font-semibold">{product.title}</h3>
                  <p className="text-gray-500 text-xs">
                    <div class="flex">
                      <img src={star4} alt="Star 4" />
                      <img src={star4} alt="Star 4" />
                      <img src={star4} alt="Star 4" />
                      <img src={star4} alt="Star 4" />
                      <img src={star6} alt="Star 6" />4.8</div></p>
                  <p className="text-black font-semibold text-lg mt-2">LKR {product.price}</p>

                  <p className="text-red-500 font-bold text-xs mt-1 ">{product.timeLeft}<div className="text-black">more</div></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mt-10 px-3">
          <h3 className="text-xl font-semibold mb-4">Description</h3>
          <p className="text-gray-700">
            For Brazil Discount Information<br />
            1. order≥ $50<br />
            💥 Direct tariff reduction: Get a $20 discount!<br />
            🎊 Spend BRL200 and get BRL20 off!<br />

            2. Order ＜$50<br />
            🔥 Spend Spend BRL200 and get BRL20 off!<br />
            💡 Buy more,save more<br />

            💸 Excellent opportunity! More discounts for group buying, more savings for more purchases! Hurry up and add your favorite products to your shopping cart to enjoy greater discounts. Discounts don't <br />wait for anyone!<br />
            二. Back to School Promotion code<br />
            • 4K Resolution :Experience immersive visuals with the Magcubic projector's 4K resolution, delivering crisp details and vibrant colors for home cinema or outdoors.<br />

            • Android 11 Operating System :Powered by Android 11, this projector offers smooth operation, easy navigation, and access to a wide range of apps and multimedia content.<br />

            • Dual WiFi6 Connectivity :Equipped with dual WiFi6 connectivity, this projector ensures stable and high-speed internet access, enhancing your streaming experience.<br />

            • BT5.0 Bluetooth Support :With built-in BT5.0 Bluetooth support, this projector allows you to wirelessly connect your devices for a hassle-free data transfer.<br />

            • Auto Correction Feature :The auto correction feature ensures optimal projection quality, automatically adjusting to provide the best viewing experience.<br />

            • High-Dimension Projection :Boasting a projected dimension of 40-200 inches, this projector offers flexibility in customizing the viewing experience to suit your needs.<br />

            CPU:Allwinner H713Quad-core ARM Cortex-A53<br />

            GPU:Mali-G31supports OpenGL ES3.2,Vulkan 1.1,and OpenCL2.0<br />

            -Native 1280*720P support 4K 260 ANSI with 5W HIFI speaker built-in,<br />

            -Android 11 system,app store projector is the combination of traitional projector and android 11 tv box operating system<br />

            -Support:Wifi6 2.4G/5.8G Dual Wifi IEEE802. a/b/g/n/ac /ax Wifi6 stronger signal) support BT 5.0<br />
            180° Rotatable Projector with 260 ANSI<br />
            260 ANSI Support 4K Display<br />
            Let image clearer without blurry<br />
            Newly Upgraded Native 720P Mini Projector<br />
            +50% Brightness / +225% Clarity<br />
            HY300 PRO Smaller than HY300<br />
            More compact size makes it highly portable and convenient to carry around<br />
            Projects a Larger Screen at The Same Distance for HY300 Pro<br />
            2.4G/5G Dual WIFI Connection<br />
            Deliver ultra fast link speed while providing stable video input<br />
            Auto Horizontal Keystone & 4-Point Correction<br />
            180-Degree Rotation Projector<br />
            Flexibility to point and enjoy from walls to floors or ceiling<br />
            130"Screen Projection Display <br />
            1.6 m optimal projection distance for 80 inch<br />
            More Videos for Less Data<br />
            AV1 is 30% better than H.265 OR VP9<br />
            BT 5.0 & Built-in HiFi Speaker<br />
            Connect with your BT speakers conveniently, bringing you a great sound experience<br />
            Android 11 System & APPs<br />
            Screen mirroring:Support Miracast ,Airplay ,DLNA<br />
            Quad-core AEM Cortex-A53<br />
            Low Noise ≤25DB<br />
            Highly efficient heat dissipation for a quiet viewing experience<br />
            Widely Applicable<br />
            Interfaces
          </p>
        </div>
      </div>





    </React.Fragment>
  );
};

export default AuctionDetails;