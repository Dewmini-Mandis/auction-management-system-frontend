import React from 'react';
import AppRoutes from './routes';
import { Toaster } from 'sonner';



const App = () => {
  return (
    <>
      <Toaster richColors />
      <AppRoutes />
    </>      
  );
};

export default App;
