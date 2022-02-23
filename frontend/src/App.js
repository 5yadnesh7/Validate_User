import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import FourOFour from './Componet/404'
import Home from './Componet/Home'
import Login from './Componet/Login'
import Profile from './Componet/Profile'
import Register from './Componet/Register'

const App = () => {

  const [active, setactive] = useState(false)
  const location = useLocation();

  useEffect(() => {
    const user = localStorage.getItem("ActiveUser")
    if (user === null || user === "null" || user === "false") {
      setactive(false)
    } else {
      setactive(true)
    }
  }, [location.pathname])

  return (
    // <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        {
          active ?
            <Route exact path="/profile" element={<Profile />} />
            :
            <React.Fragment>
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
            </React.Fragment>
        }
        <Route exact path="*" element={<FourOFour />} />
      </Routes>
    // </BrowserRouter>
  )
}

export default App