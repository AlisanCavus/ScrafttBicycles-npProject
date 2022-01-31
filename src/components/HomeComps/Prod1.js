import React, { useState, useLayoutEffect } from 'react';
import Vid from '../../Assets/vid.mp4';
import { IoIosArrowUp } from 'react-icons/io';
import { animateScroll as scroll} from 'react-scroll'

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

  const vidstyle = {
    transform: `translateX(${scrolll.y / 150}vw)`,
  };

  return (
    <div className="flex w-screen max-h-screen  mobile:flex-auto mobile:flex-col-reverse">
      <div className="w-1/2 h- 1/2 flex flex-col justify-center text-center  mobile:w-full">
        <h4 className="h-full  text-6xl font-sans font-medium text-slate-600 flex my-auto items-center align-middle self-center place-self-center text-center">
          YOUR STYLE.
        </h4>
        <h4 className="h-full flex my-auto items-center text-slate-600 font-semibold text-6xl align-middle self-center">
          YOUR CHOISE.
        </h4>
        <p className="mobile:indent-8 tracking-widest w-1/2 text-xl h-full self-center mobile:text-xl mobile:w-1/2 mobile:mx-auto text-slate-700">
          Product of our excitement to offer you a stylish ride. With our new 
          <span className="animate-pulse text-main font-extrabold text-xl">
          &nbsp;Scraftt mmll1&nbsp;
          </span>
          you will feel free to do anything you want on streets.
        </p>
        <button onClick={() => scroll.scrollToTop()} className="bg-inherit flex text-center z-50 items-center align-middle hover:animate-bounce fill-slate-500 justify-center my-5 mx-5 opacity-30 h-10  w-10 ">
          <IoIosArrowUp className="border-black w-full h-full fill-slate-500" />
        </button>
      </div>
      <div className=" h-screen min-h-full flex justify-start mx-auto w-1/2 bg-black  mobile:w-full mobile ">
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
