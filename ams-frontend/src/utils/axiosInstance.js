// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL, // Change here
});

// Request interceptor to attach token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle 401 errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear the token and store the intended URL
      localStorage.removeItem('token');
      const currentPath = window.location.pathname;
      localStorage.setItem('intendedUrl', currentPath);

      // Redirect to the login page
      window.location.href = '/signin';
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;
