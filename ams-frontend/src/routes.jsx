import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import HomePage from './pages/Home/HomePage';
import NotFound from './components/NotFound/NotFound';

import ProductList from './pages/Product/ProductList/ProductList';
import MyBids from './pages/MyBids/MyBids';
import WishList from './pages/Wishlist/WishList';

import SignInPage from './pages/Auth/SignIn/SignInPage';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/mybids" element={<MyBids />} />


        {/* Auth Routes */}
        <Route path="/signin" element={<SignInPage />} />


        {/* Protected Routes */}


        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
