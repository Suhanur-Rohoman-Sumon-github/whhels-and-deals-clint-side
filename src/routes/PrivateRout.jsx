import React, { useContext } from 'react';
import { AuthContext } from '../provider/Authprovider';
import { Navigate } from 'react-router-dom';

const PrivateRout = ({children}) => {
    const {loding,user} = useContext(AuthContext)
    if(loding){
        <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
   
    return  <Navigate to={'/login'}></Navigate>
};

export default PrivateRout;