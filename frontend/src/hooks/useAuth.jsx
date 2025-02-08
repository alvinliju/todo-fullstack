// hooks/useAuthCheck.ts
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { authState } from "../contexts/AuthContext";


export const useAuthCheck = () => {
  const setAuth = useSetRecoilState(authState);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
        setAuth(true)
     
    } else {
      setAuth(false); // No token found, user is not authenticated
    }
  }, [setAuth]);
};