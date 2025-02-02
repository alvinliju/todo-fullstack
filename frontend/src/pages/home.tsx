import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import React from "react"

export function HomePage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />

      {/* Animated background shape */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      <main className="container relative px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24 lg:py-32">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto">
          <header className="space-y-6 text-center animate-fade-in">
            <div className="inline-block">
              <span className="px-3 py-1 text-xs tracking-wide rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300">
                work in progress
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="inline-block bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent pb-2">
                Simplify your tasks with
              </span>
              <span className="block text-5xl sm:text-7xl lg:text-8xl mt-2 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 bg-clip-text text-transparent">
                tofu
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed">
              A minimal todo app built for learning modern web development. Probably over-engineered, definitely made
              with enthusiasm.
            </p>
          </header>

          {/* CTA Section */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
            <Link
              to="/register"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 font-medium bg-white text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/login"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-gray-300 hover:text-white border border-gray-800 hover:border-gray-700 rounded-lg transition-all duration-200"
            >
              Sign in
            </Link>
          </div>

          {/* Features Grid */}
          <div className="mt-24 grid sm:grid-cols-2 gap-6 animate-fade-up delay-200">
            <div className="p-6 rounded-lg bg-gray-900/50 border border-gray-800 backdrop-blur-sm">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="text-lg font-medium mb-2">Stay Focused</h3>
              <p className="text-sm text-gray-400">
                Simple, clean interface designed to help you focus on what matters.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-900/50 border border-gray-800 backdrop-blur-sm">
              <div className="text-2xl mb-2">⚡️</div>
              <h3 className="text-lg font-medium mb-2">Quick Access</h3>
              <p className="text-sm text-gray-400">Instantly add, update, and complete tasks with minimal friction.</p>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-24 text-center text-sm text-gray-500 animate-fade-up delay-300">
            <p>Built with ♥️ and probably too much coffee</p>
          </footer>
        </div>
      </main>
    </div>
  )
}

