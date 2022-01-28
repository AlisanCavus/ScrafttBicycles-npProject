import React, {useState, useLayoutEffect} from 'react';
import Vid from '../../Assets/vid.mp4'

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
    
      
    
    let vidscr = Math.round(scroll.y) / 32
    let scrrll = Math.round(vidscr)

    
    console.log(scrrll)

    if (scrrll > 44 ) {
        scrrll = 45
    }
    
    const vidstyle = {
        transform: `translateX(-${scrrll}rem)`,
    }



  return (
  <div className='flex w-screen max-h-screen '>
      <div className='w-1/2 flex justify-center my-auto'>
        <div>
        <p>ajhsjd hajskdja hsdlk jasodj lkasndk nksl,</p>
        </div>
      </div>
      <div className='w-1/2 flex justify-end translate-x-[100%]'>
        <div style={vidstyle}> 
            <video autoPlay={true} loop={true} preload='auto' muted={true} >
                <source src={Vid}></source>
            </video>
        </div>
      </div>
  </div>
  );
}

export default Prod1;
