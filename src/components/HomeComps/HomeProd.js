import React, { useState, useLayoutEffect } from 'react';
import './HomeProd.css'


function HomeProd() {
  const [scrolll, setScrolll] = useState({
    y: window.pageYOffset,
  });

  const handle = () => {
    setScrolll({
      y: window.pageYOffset,
    });
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handle);

    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, []);

  let scr = scrolll.y / 1000;

  let scr1 = scrolll.y / 1000;

  if (scr >= 1) {
    scr = 1;
  }

  // console.log(scr);

  const sty = {
    transform: `scale(${scr1 * 0.8}) perspective(${scr1 * 1000}px)`,
    opacity: `${scr}`,
    display: 'flex',
    flexDirection: 'column',
    width: '33.33333%',
    marginTop: '-2000',

  
  };

  const righ = {
    transform: ` scale(${scr1 * 1.3})`,
    textIndent: '5rem',
    fontWeight: 400,
  };

  return (
    // <div className=" bg-primary max-h-screen w-full relative mobile:border-0 mobile:width:3/4">
    //   <div className="flex flex-row mobile:flex-col ">

    //       <div className="flex flex-col justify-center h-96 w-1/3 mobile:w-11/12 absolute top-1/3">

    //       </div>

    //     <div className="w-80 h-80 flex mt-[25%] ml-[30%] ">
    //       <div className="flex justify-items-end  ">
    // <div className=" align-middle flex justify-items-center items-center ">
    //   <div>
    //     <p className="indent-20 font-medium">
    //       We made it. Just for you. Our bicycles are all hand crafted.
    //       We know you want to be unique even when you are commuting.{' '}
    //       <span className="text-slate-700 font-bold">Scraftt</span>{' '}
    //       gives you all in one. Do it in style. Check our desings
    //       inside. We are 100% sure you can find one. One more little
    //       secret for you: We are proudly Belgian so, our bikes are
    //       100% <strong> 🇧🇪 </strong> too.
    //     </p>
    //   </div>
    // </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex min-h-screen mobile:grid mobile:grid-rows-2"  >
      <div className="w-[60%] flex object-fill bg-tamir bg-cover mobile:w-full mobile:h-full ">
        
      </div>

      
      <div style={sty} className="mobile:w-3/12 w-3/12 mobile:mx-auto mobile:-translate-y-20 mobile:justify-center mobile:text-center mobile:items-center" >
      
        <div className="w-full h-1/3  bg-transparent flex justify-center my-auto  items-center mobile:justify-center mobile:mx-auto mobile:h-1/2 ">
          <span className="text-center font-semibold absolute font-sans text-slate-600 text-7xl h-20 mobile:h-1/3 mobile:text-5xl mobile:text-black">
            Handcrafted
          </span>
        </div>
        <div className="w-full h-1/3  bg-transparent flex justify-center my-auto  items-center">
          <span className="text-center absolute font-semibold text-slate-600 font-sans text-7xl h-20 mobile:text-5xl mobile:h-1/3 mobile:text-black">
            For
          </span>
        </div>
        <div className="w-full h-1/3  bg-transparent  flex  justify-center my-auto  items-center">
          <span className="text-center font-semibold mobile:h-1/3 absolute font-sans  text-slate-600 text-7xl h-20 mobile:text-5xl mobile:text-black">
            You
          </span>
        </div>
    
      </div>

      <div className="w-3/12 align-middle flex justify-items-center items-center relative mobile:hidden ">
        <div className="w-full absolute mobile:w-full">
          <p style={righ} className="mobile:indent-8 mobile:text-xl mobile:w-1/2 break-words w-2/4 tracking-widest mx-auto mobile:mx-auto text-slate-700">
            We made it. Just for you. Our bicycles are all hand crafted. We know
            you want to be unique even when you are commuting.
            <span className="animate-pulse text-main font-extrabold ">&nbsp;Scraftt</span> gives you
            all in one. Do it in style. Check our desings. We are 100%
            sure you can find the one that suits you the best . 
          </p>
        </div>
      </div>

      
    </div>
  );
}

export default HomeProd;
