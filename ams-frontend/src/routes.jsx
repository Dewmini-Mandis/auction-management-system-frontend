import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import HomePage from './pages/Home/HomePage';
import NotFound from './components/NotFound/NotFound';
import Slidebar from './pages/Slidebar/Slidebar';

import ProductList from './pages/Product/ProductList/ProductList';
import MyBids from './pages/MyBids/MyBids';
import WishList from './pages/Wishlist/WishList';
import Product from './pages/Product/ProductList/Product';

import SignInPage from './pages/Auth/SignIn/SignInPage';
import SignUpPage from './pages/Auth/SignUp/SignUpPage';
import EmailVerification from './pages/Auth/EmailVerification/EmailVerification';
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';

import Watchlist from './pages/Watchlist/Watchlist';

import AuctionDetails from './pages/Auction_Details/AuctionDetails';


import AuctionList from './pages/Auction/AuctionList';
import AuctionCreate from './pages/Auction/AuctionCreate';
import Auction from './pages/Auction/Auction';

import Footer from './pages/Footer/Footer';

import Checkout from './pages/Payment/Checkout';
import PaymentSuccess from './pages/Payment/PaymentSuccess';
import Transactions from './pages/Payment/Transactions';


 import MainCategories from './pages/Categories/MainCatrgories/MainCategories';
 import SubCategory from './pages/Categories/SubCategory/SubCategory';
 import Category from './pages/Category_list/Category';
 import DeleteCategory from './pages/Category_list/DelectCategory';
 import Subcategory from './pages/Category_list/Subcategory';
 import UpdateCategory from './pages/Category_list/UpdateCategory';
 import CategoryProduct from './pages/Category_list/CategoryProduct';

import UserProfile from './pages/UserProfile/UserProfile';
import Notification from './pages/Notification/Notification';




const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/mybids" element={<MyBids />} />
        <Route path="/product" element={<Product />} />

        {/* Auth Routes */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/watchlist" element={<Watchlist />} />

        <Route path="/auctionlist" element={<AuctionList />} />
        <Route path="/auctioncreate" element={<AuctionCreate />} />
        <Route path="/auction" element={<Auction />} />

        <Route path="/maincategories" element={<MainCategories />} />
        <Route path="/subcategory" element={<SubCategory />} />
        <Route path="/category" element={<Category />} />
        <Route path="/deletecategory" element={<DeleteCategory />} />
        <Route path="/sub-category" element={<Subcategory />} />
        <Route path="/updatecategory" element={<UpdateCategory />} />
        <Route path="/categoryproduct" element={<CategoryProduct />} />


        {/* Protected Routes */}


        {/* Catch-All Route */}


 

       


        {/* Category Routes */}


       {/* Payment Routes */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/payment-success' element={<PaymentSuccess/>}/>
        <Route path="/Transactions" element={<Transactions />} />

        <Route path="/auctiondetails" element={<AuctionDetails/>} />

        
        <Route path="/footer" element={<Footer/>} />


        <Route path="/my-account" element={<UserProfile />} />
        <Route path="/notifications" element={<Notification />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;