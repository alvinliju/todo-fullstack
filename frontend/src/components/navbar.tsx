import { Github } from "lucide-react"
import { Link } from "react-router-dom"
import React from "react"

export function Navbar() {
  return (
    <header className="border-b border-gray-800">
      <nav className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link to="/" className="text-xl font-semibold">
          tofu
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm text-gray-300 hover:text-white transition-colors">
            Login
          </Link>
          <Link
            to="/register"
            className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
          >
            Get Started
          </Link>
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </nav>
    </header>
  )
}