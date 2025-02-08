import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar.tsx"
import { HomePage } from "./pages/home.tsx"
import { LoginPage } from "./pages/auth/login.tsx"
import { RegisterPage } from "./pages/auth/register.tsx"
import { TodosPage } from "./pages/tdos.tsx"
import { ProtectedRoute } from "./components/ProtectedRoute.jsx"
import { AuthRoutes } from "./components/AuthRoutes.jsx"
// import useAuthCheck from './hooks/useAuthCheck';
import { useAuthCheck } from "./hooks/useAuth.jsx"

function App() {

  // useAuthCheck()
  // useAuthCheck()
  return (
    <Router>
      <div className="dark min-h-screen bg-gray-950 text-gray-100 antialiased">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={
            <AuthRoutes>
            <LoginPage />
            </AuthRoutes>
            } />
          <Route path="/register" element={
            <AuthRoutes>
            <RegisterPage />
            </AuthRoutes>
            } />
          <Route path="/todos" element={ 
            <ProtectedRoute>
              <TodosPage />
            </ProtectedRoute>
           } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
