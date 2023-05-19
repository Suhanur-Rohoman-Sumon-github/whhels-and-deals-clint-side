import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext(app)
const auth = getAuth(app)


const Authprovider = ({children}) => {
    const [user,setUser] = useState(null)

const handleSinups = (email,password) =>{
  return  createUserWithEmailAndPassword(auth,email,password)
}
const logOut = () => {
    return signOut(auth)
}
const handlelogins = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
}
useEffect(()=>{
    const unSubcribe = onAuthStateChanged(auth,loggedUser=>{
        console.log(loggedUser)
        setUser(loggedUser)
    })
    return ()=>{
        unSubcribe()
    }

        
},[])

const authInfo = {
    handleSinups ,
    user,
    logOut,
    handlelogins,
    auth

}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;