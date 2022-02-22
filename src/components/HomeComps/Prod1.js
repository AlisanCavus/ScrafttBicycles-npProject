import React, { useState, useLayoutEffect } from 'react';
import Vid from '../../Assets/vid.mp4';
import { Link } from 'react-router-dom';

function Prod1() {
  const [scrolll, setScrolll] = useState({
    y: window.pageYOffset,
  });

  const handle = () => {
    setScrolll({
      y: window.pageYOffset,
    });
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', handle);

    return () => {
      window.removeEventListener('scroll', handle);
    };
  }, []);

  console.log(scrolll.y)

  const vidstyle = {
    transform: `scale(${scrolll.y / 1750})`,
  };

  

  return (
    <div className="flex w-screen max-h-screen mobile:flex-auto mobile:flex-col-reverse">
      <div className="w-1/2 h-screen flex flex-col justify-center text-center  mobile:w-full ">
        <h4  className="h-full  text-6xl font-sans font-medium text-slate-600 flex my-auto items-center align-middle mx-5 self-left mobile:text-3xl  mobile:py-10 text-left mobile:h-1/2 ">
          Your Style
        </h4>
        <h4  className="h-full flex my-auto -mt-40 items-center text-slate-600 font-semibold text-6xl text-right mx-6 justify-end mobile:text-3xl mobile:py-10  mobile:h-1/2 mobile:mt-0">
          Your Choice
        </h4>
        <p className="mobile:indent-2 tracking-widest w-1/2 text-xl h-1/2 mobile:h-1/3 self-center mobile:text-sm mobile:w-1/2 mobile:mx-auto text-slate-700 mobile:hidden font-sans">
          We are excited to offer you a stylish ride with our new 
          <span className="animate-pulse text-main font-extrabold text-xl">
          &nbsp;Scraftt Deus-Ex.
          </span>
          &nbsp;Get ready for enjoyable adventures.
        </p>
        <Link to="/Products" className="text-primary mb-10 rounded w-60 mx-auto p-2 bg-slate-700 hover:animate-pulse">Discover For More</Link>
        
      </div>
      <div className=" h-screen min-h-full flex justify-center mx-auto w-1/2 bg-black  mobile:w-full mobile:h-1/2 ">
        <video 
          
          playsInline={true}
          style={vidstyle}
          autoPlay={true}
          loop={true}
          preload="auto"
          muted={true}
          controls={false}
        >
          <source src={Vid}></source>
        </video>
      </div>
    </div>
  );
}

export default Prod1;
