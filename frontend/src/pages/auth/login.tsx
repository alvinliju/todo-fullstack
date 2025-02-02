import { useState } from "react"
import { Link } from "react-router-dom"
import React from "react"
import axios from "axios"

export function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
  }

  return (
    <main className="container px-4 py-16 mx-auto max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-gray-400 mt-2">Enter your details to sign in</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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
          Sign in
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-400">
        Don't have an account?{" "}
        <Link to="/register" className="text-purple-400 hover:text-purple-300">
          Sign up
        </Link>
      </p>
    </main>
  )
}