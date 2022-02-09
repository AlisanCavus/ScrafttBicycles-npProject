import React from 'react';
import cart from "../Assets/cart.mp4"
import { animated, useSpring } from 'react-spring';


function YourCart() {

  const anim = useSpring({
    from: { opacity: 0, transform: 'translateX(-100%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    delay: 300,
  });

  return (
  <div className="min-h-screen w-screen bg-primary flex flex-row">
    <div className="w-1/2 h-screen flex mobile:w-full">
     <video
              autoPlay={true}
              loop={true}
              preload="auto"
              muted={true}
              className=" object-cover w-screen"
            >
              <source src={cart}></source>
      </video>
      <animated.div
            style={anim}
            className="flex top-0 left-0 justify-center w-1/2 m-auto  mx-auto absolute py-36 mobile:w-screen "
          >
            <h1 className="text-4xl h-full w-11/12 flex flex-col text-center justify-center font-normal text-primary mobile:text-xl text-shadow-md ">
              Your Cart
            </h1>
          </animated.div>
    </div>
    <div className="w-1/2 min-h-screen flex justify-center">
      <div className='w-11/12 mx-auto h-10/12 my-auto'>
          <ul className='w-full h-full flex justify-center '>
            
          </ul>
      </div>
    </div>
  </div>
  )}

export default YourCart;
