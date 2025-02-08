import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../contexts/AuthContext";


export const AuthRoutes = ({children}) =>{
    const isAuthenticated = useRecoilValue(authState)
    return isAuthenticated ?  <Navigate to="/" replace/> : children
}