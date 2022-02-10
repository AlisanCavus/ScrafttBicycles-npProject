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
  const [ cartedBikes, setCartedBikes] = useState([])
  const [sum , setSum ] = useState()

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

  useEffect(() => {
    const data = localStorage.getItem('CartBikes');
    if (data) {
      setCartedBikes(JSON.parse(data));
    }
    const data2 = localStorage.getItem('Sum')

    if (data2) {
      setSum(JSON.parse(data2))
    }
  }, []);


  console.log(cartedBikes)

  if (loading || !user === undefined) {
    return <LoadingScreen />;
  } else {
  return (
    <div className="bg-primary w-screen min-h-screen flex flex-row mobile:flex-col">
     <div className=" w-1/2 flex flex-col min-h-10/12 my-auto justify-center text-center border border-slate-700 mobile:w-full mobile:h-screen">
       <div className=" grid grid-rows-4">
            <div className="w-11/12 mx-auto flex flex-col justify-center "> 
              <div className="flex justify-around my-10">
                <h1 className="text-2xl text-right text-slate-700 mobile:text-lg w-4/12 "> Email Adress:  </h1>
                <p className="text-center w-8/12 align-baseline my-auto text-xl text-slate-700 mx-5"> {user.email} </p>
              </div>
            </div>

            <div className="w-11/12 mx-auto flex flex-col justify-center"> 
              <div className="flex justify-around ">
                <h1 className=" text-2xl text-right text-slate-700 mobile:text-lg w-4/12 "> Full Name: </h1>
                {!user.displayName ? (<Link to="/UpdateProfile" className="text-center animate-pulse  align-baseline my-auto text-xl text-slate-700 mx-5 italic font-light text-opacity-70"> Please update your profile </Link>) : (<p className="text-center align-baseline w-8/12 my-auto text-xl text-slate-700 mx-5"> {user.displayName} </p>)}
              </div>
            </div>

            <div className="w-11/12 mx-auto flex flex-col justify-center"> 
              <div className="flex justify-around">
                <h1 className=" text-2xl text-right text-slate-700 mobile:text-lg w-4/12"> Phone Number: </h1>
                {!user.phoneNumber ? (<Link to="/UpdateProfile" className="text-center animate-pulse  align-baseline my-auto text-xl text-slate-700 mx-5 italic font-light text-opacity-70"> Please update your profile </Link>) : (<p className="text-center align-baseline my-auto w-8/12 text-xl text-slate-700 mx-5"> {user.phoneNumber} </p>)}
              </div>
            </div>

            <div className="w-11/12 mx-auto flex flex-col justify-center"> 
              <div className="flex justify-around ">
                <h1 className=" text-2xl text-right text-slate-700 mobile:text-lg w-4/12"> Address: </h1>
                {!user.adress ? (<Link to="/UpdateProfile" className="text-center  animate-pulse align-baseline my-auto text-xl text-slate-700 mx-5 italic font-light text-opacity-70"> Please update your profile </Link>) : (<p className="text-center align-baseline my-auto w-8/12 text-xl text-slate-700 mx-5"> {user.adress} </p>)}
              </div>
            </div>


            <div className="h-3/12 text-slate-600 w-6/12 flex justify-center mx-auto  my-2 cursor-pointer mobile:w-full ">
                <Link to="/UpdateProfile" className="flex text-center justify-center rounded fill-slate-600 py-2 w-3/4 mobile:w-1/2 px-10 mobile:py-0 mobile:px-2 text-primary  bg-slate-700 align-middle"> Update Your Profile </Link>
              </div>

       </div>
       
     </div>
     <div className=" w-1/2 flex flex-col h-10/12 my-auto justify-center mobile:h-screen">
       <ul>
         {cartedBikes.map((bike, index) => (
           <li key={index} className="w-full flex justify-center">
             <div className="flex justify-evenly w-1/2">
               <span className="text-xl font-medium text-slate-600">{bike.brand} {bike.model}</span>
               <span className="text-xl font-medium text-slate-600">{bike.price} €</span>
             </div>
           </li>
         ))}
       </ul>
       <div className="w-full flex justify-center">
         <span>
           {sum} €
         </span>
       </div>
       <div className="w-full flex justify-center">
          payment methods
       </div>
     </div>
    </div>
  )}
}

export default CheckOut