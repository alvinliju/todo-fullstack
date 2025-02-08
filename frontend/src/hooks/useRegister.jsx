import axios from "axios";
import { useRecoilState } from "recoil";
import { emailState, passwordState, errorState, regState , regStateName} from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


export const useRegister = () => {
  const [email, setEmail] = useRecoilState(emailState)
  const [password, setPassword] = useRecoilState(passwordState)
  const [error, setError] = useRecoilState(errorState)
  const [regStatus, setRegStatus] = useRecoilState(regState)
  const [userName, setUserName] = useRecoilState(regStateName)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        const registerData = JSON.stringify({name:userName, email:email, password:password})
 
        const response = await axios.post('https://todo-fullstack-sape.onrender.com/auth/login/auth/register', registerData, {
            headers: {
                'Content-Type': 'application/json'
              }
        })

        if(response.status == 201){
            setRegStatus("Registration Success, you'll be redirected")
            navigate('/login')
        }
    }catch(err){
        if(err.response && err.response.data && err.response.data.error){
            console.log(err)
            setError(err.response.data.error.join(', '))
        }else{
            setError('Something went wrong')
        }
    }
  }

  return {
    email, setEmail, password, setPassword, error, setError, regStatus, setRegStatus, userName, setUserName, handleSubmit
  }
}