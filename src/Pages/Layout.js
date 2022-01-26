import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Home  from './Home';

function Layout() {
  return (
    <>
      <Navbar />
      <Home />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
