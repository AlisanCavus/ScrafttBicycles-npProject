import React from 'react'
import reactDom from 'react-dom';
import { useSpring, animated } from 'react-spring';

function ProductPhotos(prosp) {

  const animSingUp = useSpring({
    from: { opacity: 0, transform: 'translate3d(0px, -10%, 0px)' },
    to: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' },
    leave: { opacity: 0, transform: 'translate3d(0px, -10%, 0px)' },
    delay: 300,
  });

  const {img0,
  setToogle
  } = prosp


  return reactDom.createPortal(
    <animated.div style={animSingUp} className="cursor-pointer flex w-screen h-screen justify-center bg-black bg-opacity-70 top-0 absolute left-0 z-[999999] mobile:object-scale-down mobile:h-[200vh] mobile:w-screen" onClick={() => setToogle(false)}  >
      <img className=" object-cover mobile:w-full mobile:h-full" alt="bikes" src={img0} onClick={() => setToogle(false)} />

    </animated.div>
   ,document.getElementById('modal') )  
}

export default ProductPhotos