import React, { useRef, useState, useEffect} from "react";
import Logo from "../Assets/Logo.svg";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
// import { updateProfile } from "@firebase/auth";


function UpdateProfile({ close, setClose, handleCloseModal }) {
  const displayNameRef = useRef();
  const phoneNumberRef = useRef();
  const adressRef = useRef();
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


  const updateProfile = async () => {

    const updateDocRef = doc(db, 'users', `${currentUser?.uid}`);

    await updateDoc(updateDocRef, {
      displayName: displayNameRef.current.value,
      adress: adressRef.current.value,
      phoneNumber: phoneNumberRef.current.value
    })
  }

  async function handleSubmit (e)  {
    e.preventDefault()
    setLoading(true)
    updateProfile()
    navigate('/Profile')

  }
  

  
//   const terms = (e) => {
//     setTermsConds(e.target.checked);
//   };

//   async function handleSubmit(e) {
//     e.preventDefault();

//     if (passwordRef.current.value !== cPasswordRef.current.value) {
//       return setError("Passwords do not matched!");
//     } else if (termsConds !== true) {
//       return setError("You need to accept our Terms and Conditions!");
//     }
//     try {
//       setError("");
//       setLoading(true);
//       await register(emailRef.current.value, passwordRef.current.value)
//         .then((response) => console.log(response.user.email))
//         .catch((error) => console.log(error.message));
//       navigate("/Login");
//     } catch {
//       setError("Failed to create an account");
//     }
//     setLoading(false);
//   }

  return (
    <div className="  w-3/4 h-min align-middle mx-auto bg-primary mobile:flex mobile:w-full mobile:justify-center rounded ">
      <div className="flex bg-primary w-full flex-col align-middle justify-center rounded mobile:w-screen">
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
          <span className=" text-slate-700 text-xl "> Update your Profile </span>
        </div>
        <div className="flex justify-center flex-col mx-auto w-full mobile:w-full">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col mx-auto w-full  mobile:w-11/12 mobile:mx-auto "
          >
            <div className="my-2 mx-auto flex flex-col mobile:w-11/12">
              <label htmlFor="text" className=" mobile:w-11/12 text-slate-500 mobile:mx-auto">
                Enter your Full Name:
              </label>
              <input
                className=" w-96 h-10 px-5 rounded  my-2 mobile:w-11/12 mobile:mx-auto focus:shadow-md shadow-md focus:shadow-slate-600 focus:scale-105 focus:outline-none"
                type="text"
                name="text"
                placeholder="John Doe"
                required
                ref={displayNameRef}
              />
            </div>
            <div className="my-2 mx-auto flex flex-col mobile:w-11/12 mobile:mx-auto">
              <label htmlFor="phoneNumber" className=" mobile:w-11/12 text-slate-500 mobile:mx-auto">
                Enter Your Phone Number:
              </label>
              <input
                type="tel"
                className=" w-96 h-10 my-2 px-5 rounded  mobile:w-11/12 mobile:mx-auto focus:shadow-md shadow-md focus:shadow-slate-600 focus:scale-105 focus:outline-none"
                placeholder="+32471000000"
                required
                name="phoneNumber"
                minLength="8"
                ref={phoneNumberRef}
              />
            </div>
            <div className="my-2 mx-auto flex flex-col mobile:w-11/12 mobile:mx-auto">
              <label htmlFor="adress" className=" mobile:w-11/12 text-slate-500 mobile:mx-auto">
                Enter Your Full Address:
              </label>
              <textarea
                rows="2"
                type="address"
                className=" w-96 h-20 rounded my-2 px-5  mobile:w-11/12 mobile:mx-auto focus:shadow-md shadow-md focus:shadow-slate-600 focus:scale-105 focus:outline-none "
                placeholder="Enter your address for delivery"
                required
                ref={adressRef}
                minLength="10"
                name="adress"
                // ref={cPasswordRef}
              />
            </div>
            
            {/* <div className="my-3 mx-auto flex flex-row mobile:w-11/12 mobile:mx-auto ">
              <input
                // onChange={terms}
                // checked={termsConds}
                type="checkbox"
                className=" rounded my-2 px-5 mobile:my-auto mobile:w-3/12 mobile:mx-auto focus:shadow-md focus:shadow-slate-600 focus:scale-105 focus:outline-none"
                name="acceptTerms"
              />
              <label
                htmlFor="acceptTerms"
                className="align-middle my-auto mx-1 mobile:w-full mobile:text-center hover:underline underline-offset-4" >
                <a
                  href="https://thatsthefinger.com/"
                  target="_blank"
                  rel="noreferrer"
                  className=" text-slate-500 visited:text-slate-600 mobile:w-full focus:text-slate-600  no-underline"
                >
                  
                  Agree with Our Terms & Conditions
                </a>
              </label>
            </div> */}

            {/* <div
              disabled={loading}
              className="  flex flex-col align-middle mx-auto rounded w-96 bg-secondary  border-secondary shadow-md justify-center cursor-pointer hover:animate-pulse text-gray-700 my-2.5 mobile:w-2/3"
            >
              <div className="h-10  flex flex-row text-center align-middle justify-center">

                <button disabled={loading} type="submit">
                  
                  Sign Up
                </button>
              </div>
            </div> */}
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
                 
               Update Your Profile
                  
                </div>
              </button>
            )}
          </form>
          <div className="h-8 w-full mx-auto text-center">
            {/* {error && (
              <span className="text-center text-red-600"> {error} </span>
            )} */}
          </div>
         
          {/* <div className=" w-96 mb-2 flex flex-row mx-auto text-sm mobile:w-screen mobile:justify-center mobile:text-center">
            <div className="w-full my-auto">
              <span className=" text-slate-500">Do you already have an account? &nbsp; </span>
              
              <Link
                to="/Login"
                className=" text-gray-700 underline-offset-4 no-underline hover:underline hover:animate-pulse"
              >
                Login
              </Link>
            
            
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;