import React, { useRef, useState, useEffect} from "react";
import Logo from "../Assets/Logo.svg";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth} from "../Contexts/AuthContext";




function ForgotPassword({ close, setClose, handleCloseModal,succesfull }) {
    const mounted = useRef(false);
    const emailRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { forgotPassword } = useAuth();
  


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
          await forgotPassword(emailRef.current.value)
            .then((response) => console.log(response.user.email))
            .catch((error) => setError(error.message.slice(10)));
        } catch (err) {
          console.log(err)
        }
          
        setError("")
        setLoading(false);
        succesfull()
        // navigate('/Login')
      }

  return (
    <div className="  w-3/4 h-min align-middle mx-auto bg-primary mobile:flex mobile:w-full mobile:justify-center rounded ">
      <div className="flex bg-primary w-full flex-col align-middle justify-center rounded mobile:w-screen ">
        <div className=" -m-4 mobile:-m-6 mobile:mx-auto">
          <button
            className="mr-auto float-right border-1 z-50 rounded border-slate-500 cursor-pointer  bg-inherit  hover:animate-spin"
            onClick={handleCloseModal}
          >
            <AiFillCloseCircle className=" w-12 h-12 text-slate-500 border-2 border-slate-500 rounded-full z-50" />
          </button>
        </div>
        <div className="justify-center text-center">
          <span>
            <img src={Logo} alt="logo" className=" w-24 h-24 m-0 p-0 inline " />
          </span>
        </div>
        <div className="justify-center text-center mb-4">
          <span className=" text-slate-700 text-xl "> Password Recovery </span>
        </div>
        <div className="flex justify-center flex-col mx-auto w-full mobile:w-full">
          <form
          onSubmit={handleSubmit}
            className="flex justify-center flex-col mx-auto w-full  mobile:w-11/12 mobile:mx-auto "
          >
            <div className="my-2 mx-auto flex flex-col mobile:w-11/12">
              <label htmlFor="text" className=" mobile:w-11/12 text-slate-500 mobile:mx-auto">
                Enter your Email:
              </label>
              <input
                className=" w-96 h-10 px-5 rounded  my-2 mobile:w-11/12 mobile:mx-auto focus:shadow-md shadow-md focus:shadow-slate-600 focus:scale-105 focus:outline-none"
                type="email"
                name="text"
                placeholder="doe@example.com"
                required
                ref={emailRef}
              />
            
            </div>
            {loading ? (
              <div
                disabled={loading}
                className="  flex flex-col align-middle mx-auto rounded w-96 bg-secondary  border-secondary shadow-md justify-center cursor-not-allowed hover:animate-pulse text-gray-700 my-10 mobile:w-2/3"
              >
                <div className="h-10  flex flex-row text-center align-middle justify-center">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm text-white  transition ease-in-out duration-150 cursor-not-allowed"
                    disabled=""
                  >
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </button>
                </div>
              </div>
            ) : (
              <button
              type="submit"
                className="flex flex-row align-middle mx-auto rounded w-96 bg-secondary  border-secondary shadow-md justify-center cursor-pointer hover:animate-pulse text-gray-700 my-10 mobile:w-2/3"
              >
                <div className="h-10  flex flex-col text-center align-middle justify-center mx-auto">
                 
               Recover Your Password
                  
                </div>
              </button>
            )}
          </form>
          <div className="h-8 w-full mx-auto text-center">
            {error && (
              <span className="text-center text-red-600"> {error} </span>
            )}
          </div>
         
          <div className=" w-96 mb-2 flex flex-row mx-auto text-sm mobile:w-screen mobile:justify-center mobile:text-center">
            <div className="w-full my-auto">
              <span className=" text-slate-500">Do you already have an account? &nbsp; </span>
              
              <Link
                to="/Login"
                className=" text-gray-700 underline-offset-4 no-underline hover:underline hover:animate-pulse"
              >
                Login
              </Link>
            
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
