import React, { useState, useLayoutEffect } from 'react';
import LogoH from '../../Assets/LogoH.svg';
import { animated, useSpring } from 'react-spring';

function FirstJumb() {
  const anim = useSpring({
    from: { opacity: 0, transform: 'translateX(100%)' },
    to: { opacity: 1, transform: 'translateX(-15%)' },
    delay: 300,
  });

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

  

  const styles = {
    transform: `translateX(${scrolll.y}px)`,
  };

  return (
    <div className=" top-1/2 left-1/2 translate-y-60">
      <animated.div style={anim}>
        <div style={styles}>
          <div className="w-1/2 h-1/2 m-auto left-4 top-1/2 ">
            <span className="w-full h-1/2 m-auto -left-4 text-shadow text-primary text-6xl font-semibold font-sans mobile:text-4xl">
             
              Welcome to the
            </span>
          </div>
          <img
            src={LogoH}
            alt="jumbotronslogo"
            className="w-1/5 h-1/4 m-auto text-shadow -translate-x-60 mobile:-translate-x-10"
          />
        </div>
      </animated.div>
    </div>
  );
}

export default FirstJumb;
