import React from 'react';
import Navbar from './pages/shered/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './pages/shered/footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;