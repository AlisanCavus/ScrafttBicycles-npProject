// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};





// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 

 export const auth = getAuth(app)

// init firestore service
 const db = getFirestore(app)

 const usersRef = collection(db, 'users')

 
 //collection referance
 const  collref = collection(db, 'bicycles')

//  get collection data
// getDocs(collref)
//   .then((snapshot) => {
//     let bicycles = []
//     snapshot.docs.forEach((doc) => {
//       bicycles.push({...doc.data() , id: doc.id})
//     })
//     console.log(bicycles)
//   })
//   .catch( err => {
//     console.log(err.message)
//   })

export {db, collref, usersRef}