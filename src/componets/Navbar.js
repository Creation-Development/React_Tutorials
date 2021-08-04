import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/R.png'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#"> <img src={logo} alt="Logo" height="50"/> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:300}}>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/class-component">Class-Component</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/function-component">Function-Component</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user-data">User Data</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
