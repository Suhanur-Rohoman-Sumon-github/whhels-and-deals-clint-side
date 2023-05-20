import React, { useContext } from 'react';
import { AuthContext } from '../provider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({children}) => {
    const {loding,user} = useContext(AuthContext)
    const location = useLocation()
    if(loding){
     return   <progress className="progress w-56 "> loading .....</progress>
    }
    if(user!==null){
        return children
    }
    else
   
    return <Navigate state={{from:location}} to={'/login'} replace></Navigate>
};

export default PrivateRout;