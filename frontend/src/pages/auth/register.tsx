
import { Link, useNavigate } from "react-router-dom"
import React from "react"
import { useRegister } from "../../hooks/useRegister"


export function RegisterPage() {
 const {email, setEmail, password, setPassword, userName, setUserName, error, regStatus,handleSubmit} = useRegister()



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
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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

