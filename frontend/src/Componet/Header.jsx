import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {

    const [activeuser, setactiveuser] = useState({})
    const [active, setactive] = useState(false)
    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        const user = localStorage.getItem("ActiveUser")
        if (user === null || user === "null" || user === "false") {
            setactive(false)
        } else {
            setactive(true)
        }
        setactiveuser(user)
    }, [activeuser])

    const handleLogout = () => {
        localStorage.setItem("ActiveUser", "false")
        if (location.pathname === "/" || location.pathname === "/home") {
            window.location.href = "/"
        } else {
            navigate("/")
        }
    }

    return (
        <div>
            <header>
                <div className="px-3 py-2 bg-dark text-white">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <Link to="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                <img src="https://www.pngkey.com/png/full/347-3470107_open-website-vector-icon-png.png"
                                    alt="icon" className='iconWeb' />
                            </Link>

                            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                <li>
                                    <Link to="/" className="nav-link text-white">
                                        Home
                                    </Link>
                                </li>
                                {
                                    active ?
                                        <li>
                                            <Link to="/profile" className="nav-link text-white">
                                                Profile
                                            </Link>
                                        </li>
                                        : ""
                                }
                                {
                                    !active ?
                                        <React.Fragment>
                                            <li>
                                                <Link to="/login">
                                                    <button type="button" className="btn btn-light text-dark me-2">Login</button>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/register">
                                                    <button type="button" className="btn btn-primary me-2">Sign-up</button>
                                                </Link>
                                            </li>
                                        </React.Fragment> : ""
                                }
                                {
                                    active ?
                                        <li>
                                            <button onClick={handleLogout} type="button" className="btn btn-secondary">Logout</button>
                                        </li>
                                        : ""
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header