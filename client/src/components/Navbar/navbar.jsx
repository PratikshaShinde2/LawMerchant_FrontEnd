import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import logo from '../../images/Logo.svg';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
            <Link to={'/'}><a className="navbar-brand" href="#">
                    <img src={logo} height="70px"></img>
                </a></Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                    <Link to={"/"}> <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li></Link>
                       
                        <li className="nav-item">
                            <Link className="nav-link" to="/" state={{ scrollToSearch: true}}>Search</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/" state={{ scrollToAbout: true }}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
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
