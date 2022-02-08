import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';


function Layout() {
  return (
    <>
      <Navbar classname=" overflow-hidden"/>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
