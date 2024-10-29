import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import HomePage from './pages/Home/HomePage';
import NotFound from './components/NotFound/NotFound';
import Notification from './pages/Notification/Notification';
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
import Category from './pages/Category_list/Category';
import CategoryProduct from './pages/Category_list/CategoryProduct';
import Subcategory from './pages/Category_list/Subcategory';

import AuctionDetails from './pages/Auction_Details/AuctionDetails';

import Footer from './pages/Footer/Footer';

import Checkout from './pages/Payment/Checkout';
import PaymentSuccess from './pages/Payment/PaymentSuccess';
import Transactions from './pages/Payment/Transactions';



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
        <Route path="/category" element={<Category />} />
        <Route path="/categoryproduct" element={<CategoryProduct />} />
        <Route path="/subcategory" element={<Subcategory />} />

        {/* Protected Routes */}


        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />

        <Route path="/notification" element={<Notification/>} />

        <Route path="/slidebar" element={<Slidebar/>} />


       {/* Payment Routes */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/Payment-success' element={<PaymentSuccess/>}/>
        <Route path="/Transactions" element={<Transactions />} />

        <Route path="/auctiondetails" element={<AuctionDetails/>} />

        
        <Route path="/footer" element={<Footer/>} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;