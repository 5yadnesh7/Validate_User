import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import "./login.css"
import Axios from 'axios'
import { backendurl } from './config';
import jwt_decode from "jwt-decode";


const Login = () => {

  const [user, setuser] = useState({ email: "", pass: "" })
  const navigate = useNavigate()

  const handleClick = async () => {
    console.log(user);
    if (user.email !== "" && user.pass !== "") {
      // const usersAry = localStorage.getItem("Users")
      // const parseUsers = usersAry ? JSON.parse(usersAry) : []
      // if (parseUsers.length === 0) {
      //   alert("Email is Register! Please Register First")
      // } else {

      const getUser = await Axios.post(`${backendurl}login`, user)
      if (getUser.data.status && getUser.data.message === "User Found Successfully") {
        // we use this method also to decode token and extract user detail but for try i will verify token and fetch data from middleware in backend
        // var decoded = jwt_decode(getUser.data.data);
        // localStorage.setItem("ActiveUser", JSON.stringify(decoded))
        const getUserDetail = await Axios.post(`${backendurl}fetch`, { email: user.email, token: getUser.data.data })
        localStorage.setItem("ActiveUser", JSON.stringify(getUserDetail.data.data))
        alert('User Login Successfully')
        navigate("/profile")
      } else if (getUser.data.status && getUser.data.message === "Invalid Credentials") {
        alert('Invalid Credentials')
      } else if (getUser.data.status && getUser.data.message === "User Not Found") {
        alert('User Not Found, Create Account First to login')
      } else {
        alert('Fail to Get User, For More information check logs')
        console.log(getUser.data);
      }
      // if (parseUsers.filter(item => item.email === user.email).length === 1) {
      //   const ActiveUser = parseUsers.filter(item => item.email === user.email && item.pass === user.pass)
      //   if (ActiveUser.length === 1) {
      //     localStorage.setItem("ActiveUser", JSON.stringify(ActiveUser[0]))
      //     navigate("/profile")
      //   } else {
      //     alert("Invalid Credentail!")
      //   }
      // } else {
      //   alert("Email is Register! Please Register First")
      // }
      //   }
      // } else {
      //   alert("Enter all Field");
    }
  }

  return (
    <div>
      <Header />
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="wrap d-md-flex">
                <div className="img login_div_img">
                </div>
                <div className="login-wrap p-4 p-md-5">
                  <div className="d-flex">
                    <div className="w-100">
                      <h3 className="mb-4">Sign In</h3>
                    </div>
                    <div className="w-100">
                      <p className="social-media d-flex justify-content-end">
                        <a href="#f" className="social-icon d-flex align-items-center justify-content-center"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#t" className="social-icon d-flex align-items-center justify-content-center"><i className="fa-brands fa-twitter"></i></a>
                      </p>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" htmlFor="name">Email</label>
                    <input type="text" className="form-control" placeholder="Email" required
                      value={user.email} onChange={(e) => setuser({ ...user, email: e.target.value })} />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" htmlFor="password">Password</label>
                    <input type="password" className="form-control" placeholder="Password" required
                      value={user.pass} onChange={(e) => setuser({ ...user, pass: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <button onClick={handleClick} className="form-control btn btn-primary rounded submit px-3">Sign In</button>
                  </div>
                  <div className="form-group d-md-flex">
                    <div className="w-50 text-left">
                      <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                        <input type="checkbox" defaultChecked />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="w-50 text-md-right">
                      <a href="#f">Forgot Password</a>
                    </div>
                  </div>
                  <p className="text-center">Not a member? <Link to="/register">Sign Up</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Login