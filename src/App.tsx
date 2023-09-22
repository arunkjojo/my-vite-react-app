import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './pages/footer/Footer'
import Navbar from './pages/header/Navbar'
import { ErrorPage, Home, Login, Profile } from './pages'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
