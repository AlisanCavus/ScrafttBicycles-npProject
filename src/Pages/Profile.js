import React, { useEffect, useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import LoadingScreen from "../components/LoadingScreen";
import Profvid from "../Assets/profvid.mp4";
import { Link } from "react-router-dom";
import { animated, useSpring } from 'react-spring';
import { FiEdit } from 'react-icons/fi'

function Profile() {
  const { currentUser } = useAuth();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);


  const anim = useSpring({
    from: { opacity: 0, transform: 'translateX(100%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    delay: 300,
  });

  

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
      <div className="min-h-screen bg-primary overflow-hidden ">
        <div className="flex flex-row min-h-screen m-0 mobile:flex-col ">
          <div className="flex flex-row justify-center  w-6/12 m-0 mobile:w-full ">
            <div className=" h-screen min-h-full flex justify-center w-screen mx-0 py-0 relative mobile:h-1/2 ">
              <video
                autoPlay={true}
                loop={true}
                preload="auto"
                muted={true}
                playsInline={true}
                controls={false}
                className=" object-cover w-screen"
              >
                <source src={Profvid}></source>
              </video>
            </div>
            <animated.div style={anim} className="flex justify-center w-1/2 m-auto absolute py-36 ">
              <h1 className="text-4xl h-full w-11/12 flex flex-col text-center justify-center font-normal text-secondary mobile:text-xl text-shadow-md ">
                Hello, {!user.displayName ? user.email : user.displayName}
              </h1>
            </animated.div>
          </div>

          <div className="grid grid-rows-6 w-full my-20 mobile:min-h-[80vh] ">
            <div className="w-11/12 mx-auto flex flex-col justify-center"> 
              <div className="border-b-2 border-slate-700 ">
                <h1 className="text-center text-2xl text-slate-700 my-auto mobile:text-lg"> Your Profile {user.displayName && user.phoneNumber && user.adress ? (<Link className=" inline-block align-sub mx-auto w-5 text-center cursor-pointer" to="/UpdateProfile"> <FiEdit/> </Link>) : (<></>)} </h1>
                
              </div>
            </div>

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

            <div className="w-11/12 mx-auto flex flex-col justify-center"> 
              <div className="flex justify-start mobile:flex-col">
              <div className="h-3/12 text-slate-600 w-10/12 flex justify-center mx-auto  my-2 cursor-pointer mobile:w-full ">
                <Link to="/Favorites" className="flex text-center justify-center rounded fill-slate-600 py-2 w-3/4 mobile:w-1/2 px-10 mobile:py-0 mobile:px-2 text-primary  bg-slate-700 align-middle"> Go to Your Favorites </Link>
              </div>
              <div className="h-3/12 text-slate-600 w-10/12 flex justify-center mx-auto  my-2 cursor-pointer mobile:w-full ">
                <Link to="/YourCart" className="flex text-center justify-center rounded fill-slate-600 py-2 w-3/4  px-10 mobile:py-0 mobile:px-2 text-primary mobile:w-1/2 bg-slate-700 align-middle"> Go to Your Cart </Link>
              </div>
              </div>
            </div>

            
          </div>

        </div>
      </div>
    );
  }
}

export default Profile;
