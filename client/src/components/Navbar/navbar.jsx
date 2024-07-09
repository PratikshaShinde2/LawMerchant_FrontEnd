import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import logo from '../../images/Logo.svg';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link to={'/'}>
                    <a className="navbar-brand" href="#">
                        <img className="logo" src={logo} height="70px" alt="Logo" />
                    </a>
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <Link to={"/"}>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" state={{ scrollToHome: true }}>
                                    Home
                                    <span className="underline"></span>
                                </Link>
                            </li>
                        </Link>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" state={{ scrollToSearch: true }}>
                                Search
                                <span className="underline"></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" state={{ scrollToAbout: true }}>
                                About
                                <span className="underline"></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact Us
                                <span className="underline"></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-primary nav-btn">Subscribe</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
