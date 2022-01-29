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

  let scr =  (scroll.y / 1000 )

  let scr1 =  (scroll.y / 1000 )

  if (scr >= 1) {
    scr = 1
  }

  // console.log(scr)


  const sty = {
    transform: `scale(${scr1 * 0.7}) perspective(${scr1 * 1000}px)`,
    opacity: `${scr}`,
    display: 'flex',
    flexDirection: 'column',
    width: '33.33333%',
    marginTop: '-2000',
    

  }

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

    <div className="flex min-h-screen">


      <div className="w-1/3 flex object-fill bg-tamir">
     
      </div>

      
      <div style={sty}>
          
          <div className="w-full h-1/3  bg-transparent flex justify-center my-auto  items-center">
              <span className="text-center font-semibold absolute italic font-sans text-slate-600 text-7xl h-20">
                HANDCRAFTED
              </span>
            </div>
            <div className="w-full h-1/3  bg-transparent flex justify-center my-auto  items-center">
              <span className="text-center absolute font-semibold text-slate-600 font-sans italic text-7xl h-20">
                FOR
              </span>
            </div>
            <div className="w-full h-1/3  bg-transparent  flex  justify-center my-auto  items-center">
              <span className="text-center font-semibold absolute font-sans italic text-slate-600 text-7xl h-20">
                YOU.
              </span>
            </div>
       
      </div>



      <div className="w-1/3 align-middle flex justify-items-center items-center  ">
      
              <div className= "w-2/4 ">
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
  );
}

export default HomeProd;
