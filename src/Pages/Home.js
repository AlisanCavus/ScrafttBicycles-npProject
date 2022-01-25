import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring'
import HomeJumbotron from '../Components/HomeComponents/HomeJumbotron';

function Home() {

  
  return (
    <div className=" min-h-screen bg-primary z-0 top-0 absolute">
  
     <HomeJumbotron />
     
    </div>
  );
}

export default Home;
