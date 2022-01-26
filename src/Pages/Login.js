import React, { useRef, useState, useEffect } from 'react';
import Logo from '../Assets/Logo.svg';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../Components/LoadingScreen';
import { IoKeyOutline } from 'react-icons/io5'

function Login({ closeModal, handleCloseModal }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { currentUser } = useAuth();

  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value)
        .then((response) => console.log(response.user.email))
        .catch((error) => console.log(error.message));
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return <LoadingScreen />;
    }
    if (currentUser) navigate('/Profile');
  }, [currentUser, navigate, loading]);

  return (
    <div className=" container mx-auto w-3/4 h-min my-auto bg-black rounded-xl">
      <div className="flex bg-secondary w-full flex-col align-middle justify-center rounded-xl">
        <div className=" -m-4">
          <button
            className="mr-auto float-right border-1 z-50 rounded border-primary cursor-pointer  hover:animate-spin"
            onClick={handleCloseModal}
          >
            <AiFillCloseCircle className=" w-12 h-12 text-primary border-2 border-tonage rounded-full z-50" />
          </button>
        </div>
        <div className="justify-center text-center py-5">
          <span>
            Welcome to the
            <img src={Logo} alt="logo" className=" w-16 h-16 m-0 p-0 inline " />
          </span>
        </div>
        <div className="flex justify-center flex-col mx-auto w-full">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col mx-auto w-full  "
          >
            <div className="my-2 mx-auto flex flex-col ">
              <label htmlFor="email" className=" text-center ">
                Enter your e-mail:
              </label>
              <input
                className=" w-96 h-10 px-5 rounded-2xl placeholder:text-center my-2"
                type="email"
                name="email"
                placeholder="...ex@example.com"
                required
                ref={emailRef}
              />
            </div>
            <div className="my-2 mx-auto flex flex-col ">
              <label htmlFor="password" className="text-center">
                Enter a password:
              </label>
              <input
                type="password"
                className=" w-96 h-10 my-2 px-5 rounded-2xl placeholder:text-center"
                placeholder="Your password"
                required
                name="password"
                minLength="8"
                ref={passwordRef}
              />
            </div>

            <div
              disabled={loading}
              className="  flex flex-col align-middle mx-auto rounded-2xl bg-primary border-2 border-primary justify-center cursor-pointer hover:animate-pulse text-gray-700"
            >
              <div className="p-2 flex flex-row">
              <IoKeyOutline className="my-auto mx-1"/>
              <button disabled={loading} type="submit">
                
                Login
              </button>
              </div>
            </div>
          </form>
          <div className="h-8 w-full mx-auto text-center">
            {error && (
              <span className="text-center text-red-600"> {error} </span>
            )}
          </div>
              <hr className='border-2 border-primary fill-primary' />
          <div className=" h-16 flex flex-row ">
            <div className="w-1/2 my-auto">
              <span className="mx-4">Forgot your password?</span>
            </div>
            <div className="w-1/2 my-auto text-center">
              <Link
                to="/Signup"
                className=" bg-primary border-2 p-2 border-primary rounded-2xl text-gray-700 hover:animate-pulse"
              >
                New Password
              </Link>
            </div>
          </div>
          <hr className='border-2 border-primary fill-primary' />   
          <div className="  h-16 flex flex-row justify-between">
            <div className="w-1/2 my-auto">
              <span className="mx-4">Do you need an account?</span>
            </div>
            <div className="w-1/2 my-auto text-center">
              <Link
                to="/Signup"
                className=" bg-primary p-2  border-2 border-primary rounded-2xl text-gray-700 hover:animate-pulse"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
