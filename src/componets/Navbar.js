import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../images/R.png'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#"> <img src={logo} alt="Logo" height="50" /> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: 300 }}>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <NavDropdown title="Class Component" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/class-component-form">Form</NavDropdown.Item>
                                <NavDropdown.Item href="/class-component-addition">Addition</NavDropdown.Item>
                                <NavDropdown.Item href="/class-component-counter">Counter</NavDropdown.Item>
                                <NavDropdown.Item href="/class-component-state">State</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Function Component" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/function-component-addition">Addition</NavDropdown.Item>
                                <NavDropdown.Item href="/function-component-counter">Counter</NavDropdown.Item>
                                <NavDropdown.Item href="/function-component-state">State</NavDropdown.Item>
                                <NavDropdown.Item href="/table-search">Search Data</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="User-Data" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/user-data-radio">Data-Radio</NavDropdown.Item>
                                <NavDropdown.Item href="/user-data-option">Data-Option</NavDropdown.Item>
                            </NavDropdown>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


