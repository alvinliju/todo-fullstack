import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar.tsx"
import { HomePage } from "./pages/home.tsx"
import { LoginPage } from "./pages/auth/login.tsx"
import { RegisterPage } from "./pages/auth/register.tsx"
import { TodosPage } from "./pages/tdos.tsx"

function App() {
  return (
    <Router>
      <div className="dark min-h-screen bg-gray-950 text-gray-100 antialiased">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/todos" element={<TodosPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
