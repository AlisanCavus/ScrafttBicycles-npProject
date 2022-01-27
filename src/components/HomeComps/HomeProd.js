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

  let opa = 1 / (1 / scroll.y);
  let ss = Math.log(opa);
  let truncked = Math.trunc(ss);

  console.log(truncked);

  const styles = {
    transform: `translateX(${scroll.y / 1.4}px)`,
  };

  const stt = {
    transform: `translateX(${scroll.y}px)`,
  };

  const oppp = {
    opacity: `0.${truncked + 1}`,
  };
  return (
    <div>
      <div className=" bg-primary max-h-screen w-full relative mobile:border-0 mobile:width:3/4">
        <div className="flex flex-row mobile:flex-col ">
          <div style={styles}>
            <div className="h-80 w-full flex flex-row justify-center items-center self-center origin-center mobile:w-11/12 ">
              <div className="flex flex-col justify-center h-96 w-full mobile:w-11/12 absolute top-1/3">
                <div className="w-2/12 h-80 my-16 mt-10 bg-transparent   ">
                  <span className="text-center font-semibold absolute italic font-sans text-slate-600 text-5xl h-20">
                    HANDCRAFTED
                  </span>
                </div>
                <div className="w-2/12 h-80 my-16 mt-10 bg-transparent   ">
                  <span className="text-center absolute font-semibold text-slate-600 font-sans italic text-5xl h-20">
                    FOR
                  </span>
                </div>
                <div className="w-2/12 h-80 my-16 mt-10 bg-transparent     ">
                  <span className="text-center font-semibold absolute font-sans italic text-slate-600 text-5xl h-20">
                    YOU.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div style={stt}>
            <div className="min-w-full m-0  max-h-screen -translate-x-[150%]">
              <img
                src="https://images.pexels.com/photos/5446308/pexels-photo-5446308.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                className="max-h-screen "
                alt="Homeprodbike"
              />
            </div>
          </div>

          <div className="w-80 h-80 flex my-auto ml-[27%] ">
            <div className="flex justify-items-end  ">
              <div className=" align-middle flex justify-items-center items-center ">
                <div style={oppp}>
                  <p className="indent-20 font-medium">
                    We made it. Just for you. Our bicycles are all hand crafted.
                    We know you want to be unique even when you are commuting.{' '}
                    <span className="text-slate-700 font-bold">Scraftt</span>{' '}
                    gives you all in one. Do it in style. Check our desings
                    inside. We are 100% sure you can find one. One more little
                    secret for you: We are proudly Belgian so, our bikes are
                    100% <strong> 🇧🇪 </strong> too.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProd;
