import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import HomePage from './pages/Home/HomePage';
import NotFound from './components/NotFound/NotFound';
import ProductList from './pages/Product/ProductList/ProductList';
import CategoryList from './pages/Category_list/Category';
import CategoryProduct from './pages/Category_list/Categoryproduct';
import Subcategory from './pages/Category_list/Subcategory';
import Watchlist from './pages/Watchlist/Watchlist';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/categorylist" element={<CategoryList />} />
        <Route path="/categoryproduct"element={<CategoryProduct />}/>
        <Route path="/subcategory"element={<Subcategory/>}/>
        <Route path="/watchlist"element={<Watchlist/>}/>

        {/* Auth Routes */}


        {/* Protected Routes */}


        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
