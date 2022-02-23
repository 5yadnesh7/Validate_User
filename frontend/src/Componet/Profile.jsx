import React from 'react'
import Footer from './Footer'
import Header from './Header'
import "./profile.css"

const Profile = () => {

  
  // const usersAry = localStorage.getItem("Users")
  // const parseUsers = usersAry ? JSON.parse(usersAry) : []
  // parseUsers.push(userData)
  // localStorage.setItem("Users", JSON.stringify(parseUsers))
  // navigate("/login")

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
                      <h6 className="f-w-600">Hembo Tingor</h6>
                      <p>Web Designer</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 className="text-muted f-w-400">rntng@gmail.com</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Phone</p>
                          <h6 className="text-muted f-w-400">98979989898</h6>
                        </div>
                      </div>
                      <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Recent</p>
                          <h6 className="text-muted f-w-400">Sam Disuja</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Most Viewed</p>
                          <h6 className="text-muted f-w-400">Dinoter husainm</h6>
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