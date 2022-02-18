import React from 'react';
import reactDom from 'react-dom';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ForgotPassword from '../Pages/ForgotPassword';
import RecoveryPasswordAlert from '../components/RecoveryPasswordAlert';

function UpdateProfileModalWrapper() {
  const animSingUp = useSpring({
    from: { opacity: 0, transform: 'translate3d(50%, -10%, 0px)' },
    to: { opacity: 1, transform: 'translate3d(50%, 30%, 0px)' },
    delay: 500,
  });

  const [close, setClose] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const handleCloseModal = () => {
    setClose(true);
    navigate('/Login');
  };

  const succesfull = () => {
    setSuccess(!success);
  };

  return reactDom.createPortal(
    <>
      <div
        onClick={handleCloseModal}
        className=" top-0 left-0 bg-cover bg-forgot opacity-60
     fixed z-[1] w-screen h-screen overflow-hidden flex align-middle justify-center "
      ></div>
      <animated.div
        className="mx-auto  w-1/2 h-3/4 z-[99] absolute  "
        style={animSingUp}
      >
        {success ? (
          <RecoveryPasswordAlert
            close={close}
            setClose={setClose}
            handleCloseModal={handleCloseModal}
          />
        ) : (
          <ForgotPassword
            close={close}
            setClose={setClose}
            handleCloseModal={handleCloseModal}
            succesfull={succesfull}
          />
        )}
      </animated.div>
    </>,
    document.getElementById('modal')
  );
}

export default UpdateProfileModalWrapper;
