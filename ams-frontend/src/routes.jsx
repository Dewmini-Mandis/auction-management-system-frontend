import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import HomePage from './pages/Home/HomePage';
import NotFound from './components/NotFound/NotFound';

import ProductList from './pages/Product/ProductList/ProductList';
import MyBids from './pages/MyBids/MyBids';
import WishList from './pages/Wishlist/WishList';
import Product from './pages/Product/ProductList/Product';

import SignInPage from './pages/Auth/SignIn/SignInPage';
import SignUpPage from './pages/Auth/SignUp/SignUpPage';
import EmailVerification from './pages/Auth/EmailVerification/EmailVerification';
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/mybids" element={<MyBids />} />
        <Route path="/productlist" element={<Product />} />

        {/* Auth Routes */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        

        {/* Protected Routes */}


        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
