import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import "./register.css"

const Register = () => {

  const [userData, setuserData] = useState({
    fname: "", lname: "", email: "", number: ""
    , pass: "", cpass: "", sucque: "What is your Birthdate?", sucans: ""
  })
  const navigate = useNavigate()

  const handleClick = () => {
    console.log(userData);
    if (userData.fname !== "" && userData.lname !== "" && userData.email !== "" && userData.number !== "" && userData.pass !== "" && userData.cpass !== "" && userData.sucque !== "" && userData.sucans !== "") {
      if (userData.pass === userData.cpass) {
        // Success Code;
        const usersAry = localStorage.getItem("Users")
        const parseUsers = usersAry ? JSON.parse(usersAry) : []
        parseUsers.push(userData)
        localStorage.setItem("Users", JSON.stringify(parseUsers))
        navigate("/login")
      } else {
        // password and confirm password not match
        alert("Please Enter Password and Confirm Password Same")
      }
    } else {
      alert("Enter all Field");
    }
  }

  return (
    <div>
      <Header />
      <div className="registerContainer container register">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="p" />
            <h3>Welcome</h3>
            <p>You are 30 seconds away from earning your own money!</p>
            <Link to="/login"><input type="submit" name="" value="Login" /></Link><br />
          </div>
          <div className="col-md-9 register-right">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <h3 className="register-heading">Apply as a Hirer</h3>
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="First Name *"
                        value={userData.fname} onChange={(e) => setuserData({ ...userData, fname: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Last Name *"
                        value={userData.lname} onChange={(e) => setuserData({ ...userData, lname: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email *"
                        value={userData.email} onChange={(e) => setuserData({ ...userData, email: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <input type="text" maxLength={10} minLength={10} className="form-control" placeholder="Phone *"
                        value={userData.number} onChange={(e) => setuserData({ ...userData, number: e.target.value })} />
                    </div>


                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Password *"
                        value={userData.pass} onChange={(e) => setuserData({ ...userData, pass: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Confirm Password *"
                        value={userData.cpass} onChange={(e) => setuserData({ ...userData, cpass: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <select className="form-control"
                        value={userData.sucque} onChange={(e) => setuserData({ ...userData, sucque: e.target.value })}>
                        <option value="What is your Birthdate?">What is your Birthdate?</option>
                        <option value="What is Your old Phone Number">What is Your old Phone Number</option>
                        <option value="What is your Pet Name?">What is your Pet Name?</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="`Answer *"
                        value={userData.sucans} onChange={(e) => setuserData({ ...userData, sucans: e.target.value })} />
                    </div>
                    <button className="btnRegister" onClick={handleClick}>Register</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Register