import React, { useEffect, useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import LoadingScreen from "../components/LoadingScreen";
import Profvid from "../Assets/profvid.mp4";

function Profile() {
  const { currentUser } = useAuth();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getUserProfile = async () => {

  //     const docRef = doc(db, 'users', `${currentUser?.uid}`)
  //     const docSnap = await getDoc(docRef);

  //     if (docSnap.exists()){
  //       setUser(docSnap.data())
  //     } else {
  //       console.log("nodata")
  //     }
  //   }

  //   getUserProfile()
  //   let isApiSubscribed = true
  //   if (isApiSubscribed) {

  //      setLoading(false)

  //   }

  //   console.log(user)

  //   return () => {
  //     // cancel the subscription
  //     isApiSubscribed = false
  // };

  // },[])

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

  console.log(user);

  if (loading) {
    return <LoadingScreen />;
  } else {
    return (
      <div className="min-h-screen bg-primary  ">
        <div className="flex flex-row min-h-screen m-0  ">
          <div className="flex flex-row justify-center  w-6/12 m-0 mobile:w-screen ">
            <div className=" h-screen min-h-full flex justify-center w-screen bg-black mx-0 py-0 relative mobile:h-1/2 ">
              <video
                autoPlay={true}
                loop={true}
                preload="auto"
                muted={true}
                className=" object-cover w-screen"
              >
                <source src={Profvid}></source>
              </video>
            </div>
            <div className="flex justify-center w-1/2 m-auto absolute py-36 ">
              <h1 className="text-4xl h-full w-11/12 flex flex-col text-center justify-center font-normal text-secondary mobile:text-xl text-shadow-md ">
                Hello {!user.displayName ? user.email : user.displayName}
              </h1>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Profile;
