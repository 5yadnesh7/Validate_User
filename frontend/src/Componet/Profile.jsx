import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import "./profile.css"

const Profile = () => {

  const [user, setuser] = useState({})
  useEffect(() => {
    const getuser = JSON.parse(localStorage.getItem("ActiveUser"))
    setuser(getuser)
  }, [])

  return (
    <div className='profileContainer'>
      <Header />
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                        <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User_Profile_Image" />
                      </div>
                      <h6 className="f-w-600">{`${user.fname} ${user.lname}`}</h6>
                      <p>Software Engineer</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 className="text-muted f-w-400">{user.email}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Phone</p>
                          <h6 className="text-muted f-w-400">{user.number}</h6>
                        </div>
                      </div>
                      <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Security Question</h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Question</p>
                          <h6 className="text-muted f-w-400">{user.sucque}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Your Answer</p>
                          <h6 className="text-muted f-w-400">{user.sucans}</h6>
                        </div>
                      </div>
                    </div>
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

export default Profile