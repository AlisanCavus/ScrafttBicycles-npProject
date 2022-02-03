import React, { useEffect, useState } from 'react';
import { useAuth } from '../Contexts/AuthContext';
import {  db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import LoadingScreen from '../components/LoadingScreen';



function Profile() {

const { currentUser } = useAuth()
const [ user, setUser ] = useState()
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

    const docRef = doc(db, 'users', `${currentUser?.uid}`)
     getDoc(docRef)
      .then((doc) =>{
        if(doc.exists){
          setUser(doc.data())
          setLoading(false)
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  let isApiSubscribed = true
  if (isApiSubscribed) {
    getUserInfo()
  }
  

  return () => {
    // cancel the subscription
    isApiSubscribed = false
};
 
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[]);


console.log(user)

if (loading) {
  return (<LoadingScreen />)
} else {

  return (<div className=" h-screen bg-primary">
     <div className="flex">
      {user.email}

     </div>
  </div>);

}

  
}

export default Profile;
