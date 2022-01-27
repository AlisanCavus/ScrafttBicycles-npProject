import React from 'react';
import LogoH from '../../Assets/LogoH.svg';
import { animated, useSpring } from 'react-spring';

function FirstJumb() {
  const anim = useSpring({
    from: { opacity: 0, transform: 'translateX(100%)' },
    to: { opacity: 1, transform: 'translateX(-28%)' },
    delay: 300,
  });

  

  return (
    <div className=" top-1/2 left-1/2 translate-y-60">
      <animated.div style={anim}>
        <div className="w-1/4 h-1/2 m-auto left-4 top-1/2 "> 
        <span className="w-1/4 h-1/2 m-auto left-4 text-white text-6xl font-sans"> Welcome to the </span>
         </div>
        <img src={LogoH} alt="jumbotronslogo" className="w-1/4 h-1/4 m-auto"/>
      </animated.div>
    </div>
  );
}

export default FirstJumb;
