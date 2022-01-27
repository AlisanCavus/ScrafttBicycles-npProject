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

  console.log(scroll);

  let opc = 100 / scroll.y
  let visib = "visible"


  if (opc < 0.102) {
    opc = 0
    visib = "none"
  } else if (opc > 0){
      visib = "flex"
  }

  const styles = {
    transform: `translateY(${scroll.y/4}px)`,
    opacity: opc,
    display: visib
  };
  return (
    <div>
      <div className="mx-auto bg-primary min-h-screen w-full rounded-xl relative mobile:border-0 mobile:width:3/4">
        <div className="flex  justify-center text-center align-middle w-full mobile:w-4/5 mobile:mx-auto">
          <div style={styles}>
            <div className="h-40 w-full flex flex-row justify-center mobile:w-11/12">
              <div className="flex flex-row justify-center h-40 w-3/4 mobile:w-11/12">
                <div className="items-center h-40 align-middle flex bg-black bg-opacity-50 mobile:w-4/12">
                  <span className=" items-center text-5xl font-semibold text-gray-700 text-sans mobile:invisible">
                    &nbsp;100%
                  </span>
                </div>
                <div className="items-center h-40  align-middle flex bg-yellow-400 bg-opacity-50 mobile:w-4/12">
                  <span className=" text-5xl font-semibold text-gray-700 align-middle text-sans mobile:invisible">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BEL
                  </span>
                </div>
                <div className="items-center h-40  align-middle flex bg-red-600 bg-opacity-50 mobile:w-4/12">
                  <span className=" text-5xl font-semibold text-gray-700 text-center align-middle text-sans mobile:invisible">
                    GIAN
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default HomeProd;
