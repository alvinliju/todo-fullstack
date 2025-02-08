import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../contexts/AuthContext";


export const ProtectedRoute = ({children}) =>{
    const isAuthenticated = useRecoilValue(authState)
    return isAuthenticated ? children : <Navigate to="/login"/>
}