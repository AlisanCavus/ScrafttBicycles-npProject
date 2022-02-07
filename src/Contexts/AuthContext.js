import React, { createContext,  useContext, useState, useEffect} from 'react';
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail} from 'firebase/auth'
import {  doc, setDoc } from "firebase/firestore";



const AuthContext = createContext({
    currentUser: null,
    register: () => Promise,
    login: () => Promise,
    logout: () => Promise,
    forgotPassword: () => Promise,
})


export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({children}) {
    const [ currentUser, setCurrentUser] = useState(null)
    const [ loading, setLoading] = useState(true)

    

    // async function register (email,password) {
    //     return createUserWithEmailAndPassword(auth, email, password)
    //     // .then( await addDoc(doc(db, 'users' , {userId: currentUser.user.uid , email: currentUser.user.email}))) 
    // }

    const register = async (email, password) => {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            adress: "",
            phoneNumber: null,
            displayName: "",
            orderedBikes: [],
            favoriteBikes: [],
            cartedBikes: [],
            createdAt: new Date()
          }, {merge:true});
          console.log('Document Added')
    }


    function login (email,password) {
        return signInWithEmailAndPassword(auth, email, password)
       
    }

    function logout() {
        return signOut(auth)
    }

    function forgotPassword (email) {
        return sendPasswordResetEmail(auth, email, {url: 'http://localhost:3000/Login'})
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            setLoading(false)
            // if(user !== undefined) {
            //     handleUser(user)
            // }
            
                
        
            
            
            
            
            
        })
        return () => {
           unsubscribe()
        }
    
    })

    //    const handleUser = async () => {
           
    //     await setDoc(doc(db, "users", `${currentUser?.uid}`), {
    //         email: `${currentUser?.email}`,
    //         adress: "",
    //         phoneNumber: null,
    //         displayName: "",
    //         orderedBikes: [],
    //         favoriteBikes: [],
    //         createdAt: new Date()
    //       }, {merge:true});
    //    } 
     
    
    
    const value = {
        currentUser,
        register,
        login,
        logout,
        forgotPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}