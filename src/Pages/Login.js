import React, { useRef, useState, useEffect } from "react";
import Logo from "../Assets/Logo.svg";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../Components/LoadingScreen";


function Login({ closeModal, handleCloseModal }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value)
        .then((response) => console.log(response.user.email))
        .catch((error) => setError(error.message));
    } catch (err) {
      console.log(err)
    }
    setLoading(false);
  }

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return <LoadingScreen />;
    }
    if (currentUser) navigate("/Profile");
  }, [currentUser, navigate, loading]);

  return (
    <div className=" container mx-auto w-2/4 h-min my-auto bg-black rounded-xl">
      <div className="flex bg-primary w-full flex-col align-middle justify-center rounded-xl">
        <div className=" -m-4">
          <button
            className="mr-auto float-right border-1 z-50 rounded border-slate-700 cursor-pointer  hover:animate-spin"
            onClick={handleCloseModal}
          >
            <AiFillCloseCircle className=" w-12 h-12 text-slate-700 border-2 border-slate-700 rounded-full z-50" />
          </button>
        </div>
        <div className="justify-center text-center">
          <span>
            <img src={Logo} alt="logo" className=" w-24 h-24 m-0 p-0 inline" />
            
          </span>
        </div>
        <div className="justify-center text-center mb-4">
          <span className=" text-lg text-slate-600">
            Login to Your Account
          </span>
        </div>
        <div className="flex justify-center flex-col mx-auto w-full">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col mx-auto w-full  "
          >
            <div className="my-2 mx-auto flex flex-col ">
              <label htmlFor="email" className="  ">
                Enter your e-mail:
              </label>
              <input
                className=" w-96 h-10 px-5 rounded-xl  my-2 focus:shadow-md shadow-md focus:shadow-slate-600 focus:scale-105 focus:outline-none"
                type="email"
                name="email"
                placeholder="...ex@example.com"
                required
                ref={emailRef}
              />
            </div>
            <div className="my-2 mx-auto flex flex-col ">
              <label htmlFor="password" className="">
                Enter your password:
              </label>
              <input
                type="password"
                className=" w-96 h-10 my-2 px-5 rounded-xl  shadow-md focus:shadow-lg focus:scale-105 focus:shadow-slate-600 focus:outline-none"
                placeholder="Your password"
                required
                name="password"
                minLength="8"
                ref={passwordRef}
              />
            </div>

            {error && (
              <span className="text-center text-red-600 my-2"> {error} </span>
            )}

            <div
              disabled={loading}
              className="  flex flex-col w-96 mx-auto my-9 align-middle rounded-xl shadow-md  bg-secondary h-10 border-secondary justify-center cursor-pointer hover:animate-pulse text-gray-700 ">
              <div className=" h-9 flex flex-row text-center justify-center">
                <button disabled={loading} type="submit" className="text-center align-middle">
                  Login
                </button>
              </div>
            </div>
          </form>
        
          <div className=" w-96  flex flex-row justify-between text-sm mx-auto">
            <div className="w-full my-auto">
              <Link
                to="/Signup"
                className="  text-gray-700  hover:animate-pulse">
                Forgot your password? 
              </Link>
            </div>
          </div>
          
          <div className="w-96 mb-2 flex flex-row mx-auto text-sm ">
            <div className="w-full my-auto">
              <span className=""> Do you need an account? &nbsp; <Link
                to="/Signup"
                className="  text-gray-700 underline-offset-4 no-underline hover:underline hover:animate-pulse">
                 Signup
              </Link></span>
            </div>
          </div>
         
          
        </div>
      </div>
    </div>
  );
}

export default Login;
