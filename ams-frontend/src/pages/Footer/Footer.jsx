import React from 'react';
import Visa from '../../assets/images/visa.png';
import Mastercard from '../../assets/images/Mastercard.png';
import Google from '../../assets/images/Google.png';
import PayPal from '../../assets/images/PayPal.png';
import Facebook from '../../assets/images/Facebook.png';
import TwitterSquared from '../../assets/images/Twitter Squared.png';

const Footer = () => {

        

    return (
      <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
       
        <div>
          <h3 className="font-bold mb-4">Bid</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Registration</a></li>
            <li><a href="#" className="hover:underline">Lansuwa money back guarantee</a></li>
            <li><a href="#" className="hover:underline">Bidding help</a></li>
            <li><a href="#" className="hover:underline">Stores</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-bold mb-4">Help & contact</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Seller Information center</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
          </ul>
        </div>

        
        <div>
  <h3 className="font-bold mb-4">Pay with</h3>
  <div className="flex space-x-2">
    <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer">
      <img src={Visa} alt="Visa" className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer" />
    </a>
    <a href="https://www.mastercard.com" target="_blank" rel="noopener noreferrer">
      <img src={Mastercard} alt="Mastercard" className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer" />
    </a>
    <a href="https://google.com" target="_blank" rel="noopener noreferrer">
      <img src={Google} alt="Google" className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer" />
    </a>
    <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">
      <img src={PayPal} alt="PayPal" className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer" />
    </a>
  </div>
</div>


        
         <div>
          <h3 className="font-bold mb-4">About Lansuwa</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Company info</a></li>
            <li><a href="#" className="hover:underline">News</a></li>
            <li><a href="#" className="hover:underline">Investors</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-bold mb-4">Auction</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Start auctioning</a></li>
            <li><a href="#" className="hover:underline">Learn to auction</a></li>
            <li><a href="#" className="hover:underline">Affiliates</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-bold mb-4">Stay connected</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Lansuwa’s Blogs</a></li>
            <li><a href="https://www.facebook.com" className="hover:underline">
        <img src={Facebook} alt="Facebook" className="inline-block w-6 h-6 mr-2"/> Facebook
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com" className="hover:underline">
        <img src={TwitterSquared} alt="Twitter" className="inline-block w-6 h-6 mr-2"/> Twitter
      </a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-bold mb-4">Tools & apps</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Developers</a></li>
            <li><a href="#" className="hover:underline">Security center</a></li>
            <li><a href="#" className="hover:underline">Site map</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Multi-Language Sites</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">English, Sinhala, Tamil</a></li>
          </ul>
        </div>
      </div>
    </footer>
);
};

export default Footer;
