import axios from "axios";
import { useRecoilState } from "recoil";
import { emailState, passwordState, errorState, authState } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


export const useLogin = () => {
    const [email, setEmail] = useRecoilState(emailState)
    const [password, setPassword] = useRecoilState(passwordState)
    const [error, setError] = useRecoilState(errorState)
    const [isAuthenticated, setIsAuthenticated] = useRecoilState(authState)
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      try{
          const loginData = JSON.stringify({ email:email, password:password})
          const response = await axios.post('https://todo-fullstack-sape.onrender.com/auth/login', loginData, {
            headers: {
                'Content-Type': 'application/json'
              }
          })
  
          if(response.data.token){
            setIsAuthenticated(true)
              localStorage.setItem('token', response.data.token)
              navigate('/todos')
          }
        
      }catch(err){
          setError(err.response?.data?.message || 'Login failed. Please try again.');
      }
    }

    return {
        email, setEmail, password, setPassword, error, handleSubmit
    }
}