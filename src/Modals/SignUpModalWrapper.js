import React from 'react';
import reactDom from 'react-dom';
import Signup from '../Pages/SignUp';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpModalWrapper() {
  const animSingUp = useSpring({
    from: { opacity: 0, transform: 'translate3d(50%, -10%, 0px)' },
    to: { opacity: 1, transform: 'translate3d(50%, 30%, 0px)' },
    delay: 500,
  });

  const [close, setClose] = useState(false);

  const navigate = useNavigate();
  const handleCloseModal = () => {
    setClose(true);
    navigate('/');
  };

  return reactDom.createPortal(
    <>
      <div
      onClick={handleCloseModal}
        className=" top-0 left-0 bg-cover bg-bicycle opacity-60
     fixed z-[1] w-screen h-screen overflow-hidden flex align-middle justify-center "
      ></div>
      <animated.div className="mx-auto  w-1/2 h-3/4 z-[99] absolute  " style={animSingUp}>
        <Signup
          close={close}
          setClose={setClose}
          handleCloseModal={handleCloseModal}
        />
      </animated.div>
    </>,
    document.getElementById('modal')
  );
}

export default SignUpModalWrapper;
