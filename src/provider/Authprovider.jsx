import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext(app)
const auth = getAuth(app)


const Authprovider = ({children}) => {
    const [user,setUser] = useState(null)
    console.log(user)
    const [loding, setLoading] = useState(true)

const handleSinups = (email,password) =>{
    setLoading(false)
  return  createUserWithEmailAndPassword(auth,email,password)
}
const logOut = () => {
    setLoading(false)
    return signOut(auth)
}
const handlelogins = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)

}
useEffect(()=>{
    const unSubcribe = onAuthStateChanged(auth,loggedUser=>{
        console.log(loggedUser)
        setUser(loggedUser)
        setLoading(false)
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
    auth,
    loding

}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;