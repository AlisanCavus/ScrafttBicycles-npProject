import React, {useEffect, useState} from 'react'
import { useAuth } from "../Contexts/AuthContext";
import LoadingScreen from "../components/LoadingScreen";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

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
    <div className="bg-primary w-screen min-h-screen flex flex-col">
     <div className=" w-1/2 flex flex-col h-10/12 my-auto justify-center bg-slate-300 text-center border-r-2 border-slate-700">
       <div className=" grid grid-rows-6">
         <div className=""> hello </div>
         <div className=""> mofos </div>
         <div className=""> tuttu </div>
         <div className=""> dondurma </div>
         <div className=""> baklava </div>
         <div className=""> kazim </div>
       </div>
     </div>
     <div className=" w-1/2 flex flex-col h-10/12 my-auto justify-center border-l-2 border-slate-700"></div>
    </div>
  )}
}

export default CheckOut