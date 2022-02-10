import React, {useEffect, useState} from 'react'
import { useAuth } from "../Contexts/AuthContext";
import LoadingScreen from "../components/LoadingScreen";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link } from 'react-router-dom'

function CheckOut() {
  const [ user, setUser ] = useState()
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    const getUserInfo = () => {
      const docRef = doc(db, "users", `${currentUser?.uid}`);
      getDoc(docRef)
        .then((doc) => {
          if (doc.exists) {
            setUser(doc.data());
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    let isApiSubscribed = true;
    if (isApiSubscribed) {
      getUserInfo();
    }

    return () => {
      // cancel the subscription
      isApiSubscribed = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  if (loading || !user === undefined) {
    return <LoadingScreen />;
  } else {
  return (
    <div className="bg-primary w-screen min-h-screen flex flex-row">
     <div className=" w-1/2 flex flex-col h-10/12 my-auto justify-center text-center">
       <div className=" grid grid-rows-4">
            <div className="w-11/12 mx-auto flex flex-col justify-center "> 
              <div className="flex justify-start  ">
                <h1 className="text-2xl text-slate-700 mobile:text-lg w-4/12 "> Email Adress:  </h1>
                <p className="text-center align-baseline my-auto text-xl text-slate-700 mx-5"> {user.email} </p>
              </div>
            </div>

            <div className="w-11/12 mx-auto flex flex-col justify-center"> 
              <div className="flex justify-start ">
                <h1 className=" text-2xl text-slate-700 mobile:text-lg w-4/12 "> Full Name: </h1>
                {!user.displayName ? (<Link to="/UpdateProfile" className="text-center animate-pulse  align-baseline my-auto text-xl text-slate-700 mx-5 italic font-light text-opacity-70"> Please update your profile </Link>) : (<p className="text-center align-baseline my-auto text-xl text-slate-700 mx-5"> {user.displayName} </p>)}
              </div>
            </div>

            <div className="w-11/12 mx-auto flex flex-col justify-center"> 
              <div className="flex justify-start">
                <h1 className=" text-2xl text-slate-700 mobile:text-lg w-4/12"> Phone Number: </h1>
                {!user.phoneNumber ? (<Link to="/UpdateProfile" className="text-center animate-pulse  align-baseline my-auto text-xl text-slate-700 mx-5 italic font-light text-opacity-70"> Please update your profile </Link>) : (<p className="text-center align-baseline my-auto text-xl text-slate-700 mx-5"> {user.phoneNumber} </p>)}
              </div>
            </div>

            <div className="w-11/12 mx-auto flex flex-col justify-center"> 
              <div className="flex justify-start ">
                <h1 className=" text-2xl text-slate-700 mobile:text-lg w-4/12"> Address: </h1>
                {!user.adress ? (<Link to="/UpdateProfile" className="text-center  animate-pulse align-baseline my-auto text-xl text-slate-700 mx-5 italic font-light text-opacity-70"> Please update your profile </Link>) : (<p className="text-center align-baseline my-auto text-xl text-slate-700 mx-5"> {user.adress} </p>)}
              </div>
            </div>

       </div>
       <div>
          payment methods
       </div>
     </div>
     <div className=" w-1/2 flex flex-col h-10/12 my-auto justify-center"></div>
    </div>
  )}
}

export default CheckOut