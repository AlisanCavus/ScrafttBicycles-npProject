import React, { useState, useLayoutEffect } from 'react';
import Vid from '../../Assets/vid.mp4';

function Prod1() {
  const [scroll, setScroll] = useState({
    y: window.pageYOffset,
  });

  const handle = () => {
    setScroll({
      y: window.pageYOffset,
    });
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', handle);

    return () => {
      window.removeEventListener('scroll', handle);
    };
  }, []);

  

  const vidstyle = {
   transform: `translateX(${scroll.y / 220}vw)`
  };

  

  return (
    <div className="flex w-screen max-h-screen  mobile:flex-auto mobile:flex-col-reverse">
      <div className="w-1/2 flex justify-center my-auto mobile:w-full">
       
          <p>ajhsjd hajskdja hsdlk jasodj lkasndk nksl,</p>
        
      </div>
      <div className=" h-screen min-h-full flex justify-start mx-auto w-1/2 bg-black mobile:w-full mobile ">
        <video
          
          style={vidstyle}
          autoPlay={true}
          loop={true}
          preload="auto"
          muted={true}
          
        >
          <source src={Vid}></source>
        </video>
      </div>
    </div>
  );
}

export default Prod1;
