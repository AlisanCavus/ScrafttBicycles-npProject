import React, { useState, useLayoutEffect } from 'react';

function HomeProd() {
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

  console.log(scroll.y);

  const styles = {
    transform: `translateX(${scroll.y / 1.15}px)`,
    opacity: `0.${999999000 * scroll.y}`,
  };

  const stt = {
    transform: `translateX(${scroll.y}px)`,
    height: '100vh',
    
  };
  return (
    <div>
      <div className=" bg-primary max-h-screen w-full rounded-xl relative mobile:border-0 mobile:width:3/4">
        <div className="flex flex-auto mobile:flex-col ">
          <div style={styles}>
            <div className="h-80 w-full flex flex-row justify-center mobile:w-11/12 ">
              <div className="flex flex-col justify-center h-80 w-full mobile:w-11/12 absolute top-1/4">
                <div className="w-2/12 h-80 my-16 mt-10 bg-transparent rounded-xl shadow-lg shadow-slate-700  -translate-x-[150%] ">
                  <span className="text-center font-semibold italic font-sans text-5xl h-20">
                    HANDCRAFTED
                  </span>
                </div>
                <div className="w-2/12 h-80 my-16 mt-10 bg-transparent rounded-xl shadow-lg shadow-slate-700   -translate-x-[160%]  ">
                  <span className="text-center font-semibold font-sans italic text-5xl h-20">
                    FOR
                  </span>
                </div>
                <div className="w-2/12 h-80 my-16 mt-10 bg-transparent rounded-xl shadow-lg shadow-slate-700    -translate-x-[170%]  ">
                  <span className="text-center font-semibold font-sans italic text-5xl h-20">
                    YOU.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={stt}>
            <div className="w-full m-0  max-h-screen -translate-x-[150%]">
              <img
                src="https://images.pexels.com/photos/5446308/pexels-photo-5446308.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                className="max-h-screen "
                alt="Homeprodbike"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProd;
