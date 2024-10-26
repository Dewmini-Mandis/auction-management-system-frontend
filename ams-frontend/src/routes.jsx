import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import HomePage from './pages/Home/HomePage';
import NotFound from './components/NotFound/NotFound';
import Notification from './pages/Notification/Notification';
import Slidebar from './pages/Slidebar/Slidebar';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />


        {/* Auth Routes */}


        {/* Protected Routes */}


        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />

        <Route path="/notification" element={<Notification/>} />

        <Route path="/slidebar" element={<Slidebar/>} />

       
        

      </Routes>
    </Router>
  );
};

export default AppRoutes;
