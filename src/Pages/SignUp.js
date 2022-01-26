import React, { useRef, useState } from "react";
import Logo from "../Assets/Logo.svg";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { IoCreate } from "react-icons/io5";

function SignUp({ close, setClose, handleCloseModal }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const cPasswordRef = useRef();
  const [termsConds, setTermsConds] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const terms = (e) => {
    setTermsConds(e.target.checked);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== cPasswordRef.current.value) {
      return setError("Passwords do not matched!");
    } else if (termsConds !== true) {
      return setError("You need to accept our Terms and Conditions!");
    }
    try {
      setError("");
      setLoading(true);
      await register(emailRef.current.value, passwordRef.current.value)
        .then((response) => console.log(response.user.email))
        .catch((error) => console.log(error.message));
      navigate("/Login");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div className=" container  w-3/4 h-min align-middle mx-auto bg-black rounded-xl mobile:w-11/12">
      <div className="flex bg-secondary w-full flex-col align-middle justify-center rounded-xl">
        <div className=" -m-4">
          <button
            className="mr-auto float-right border-1 z-50 rounded border-primary cursor-pointer bg-inherit  hover:animate-spin"
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
        <div className="flex justify-center flex-col mx-auto w-full mobile:w-11/12">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col mx-auto w-full mobile:w-11/12 "
          >
            <div className="my-2 mx-auto flex flex-col mobile:w-11/12">
              <label htmlFor="email" className=" text-center mobile:w-11/12 ">
                Enter your e-mail:
              </label>
              <input
                className=" w-96 h-10 px-5 rounded-2xl placeholder:text-center my-2 mobile:w-11/12 mobile:mx-auto"
                type="email"
                name="email"
                placeholder="...ex@example.com"
                required
                ref={emailRef}
              />
            </div>
            <div className="my-2 mx-auto flex flex-col mobile:w-11/12">
              <label htmlFor="password" className="text-center mobile:w-11/12">
                Enter a password:
              </label>
              <input
                type="password"
                className=" w-96 h-10 my-2 px-5 rounded-2xl placeholder:text-center mobile:w-11/12 mobile:mx-auto"
                placeholder="Choose a password min. 8 characters."
                required
                name="password"
                minLength="8"
                ref={passwordRef}
              />
            </div>
            <div className="my-2 mx-auto flex flex-col mobile:w-11/12 ">
              <label htmlFor="cPassword" className=" text-center mobile:w-11/12">
                Confirm your password:
              </label>
              <input
                type="password"
                className=" w-96 h-10 rounded-2xl my-2 px-5 placeholder:text-center mobile:w-11/12"
                placeholder="Retype your password"
                required
                minLength="8"
                name="cPassword"
                ref={cPasswordRef}
              />
            </div>
            <div className="my-2 mx-auto flex flex-row mobile:w-11/12 ">
              <input
                onChange={terms}
                checked={termsConds}
                type="checkbox"
                className=" rounded-2xl my-2 px-5 placeholder:text-center mobile:w-11/12"
                name="acceptTerms"
              />
              <label
                htmlFor="acceptTerms"
                className="align-middle my-auto mx-1 hover"
              >
                <Link to="/Terms" className=" text-slate-500">
                  {" "}
                  Agree with Our Terms & Conditions{" "}
                </Link>
              </label>
            </div>

            <div
              disabled={loading}
              className="  flex flex-col align-middle mx-auto rounded-2xl bg-primary border-2 border-primary justify-center cursor-pointer hover:animate-pulse text-gray-700"
            >
              <div className="p-2 flex flex-row">
                <IoCreate className="my-auto mx-1" />
                <button disabled={loading} type="submit">
                  {" "}
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          <div className="h-8 w-full mx-auto text-center">
            {error && (
              <span className="text-center text-red-600"> {error} </span>
            )}
          </div>
          <hr className="border-2 border-primary fill-primary" />
          <div className="  h-16 flex flex-row justify-between">
            <div className="w-1/2 my-auto">
              <span className="mx-4">Do you already have an account?</span>
            </div>
            <div className="w-1/2 my-auto text-center">
              <Link
                to="/Login"
                className=" bg-primary p-2  border-2 border-primary rounded-2xl text-gray-700 hover:animate-pulse"
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

export default SignUp;
