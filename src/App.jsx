import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import CreateImage from './pages/CreateImage/CreateImage'
import Blogs from './pages/Blogs/Blogs'
import BlogsNew from './pages/Blogs/BlogsNew'
import BlogsEdit from './pages/Blogs/BlogsEdit'
import * as authService from './services/authService'
import Base from './pages/Base/Base'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  console.log(user)

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/login')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
      <Route
          path="/"
          element={<Base />}
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profile"
          element={user ? <Profile user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/createimage"
          element={<CreateImage />}
        />
        <Route
          path="/blogs"
          element={<Blogs user={user}/>}
        />
        <Route
          path="/blogs/new"
          element={<BlogsNew />}
        />
        <Route
          path="/blogs/edit"
          element={<BlogsEdit />}
        />
      </Routes>
    </>
  )
}

export default App
