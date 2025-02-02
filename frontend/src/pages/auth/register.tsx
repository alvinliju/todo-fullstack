import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import React from "react"
import axios from '../../utils/axios-config';


export function RegisterPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("");
  const [regStatus, setRegStatus] = useState("")
  const [name, setName] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try{
        const registerData = JSON.stringify({name:name, email:email, password:password})
 
        const response = await axios.post('/auth/register', registerData)

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



  return (
    <main className="container px-4 py-16 mx-auto max-w-md">
      <div className="text-center mb-8">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {regStatus &&  <p style={{ color: 'green' }}>{regStatus}</p>}
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-gray-400 mt-2">Start organizing your tasks with tofu</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
        >
          Create account
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <Link to="/login" className="text-purple-400 hover:text-purple-300">
          Sign in
        </Link>
      </p>
    </main>
  )
}

