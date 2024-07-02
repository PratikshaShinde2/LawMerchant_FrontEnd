import React from "react";
import Navbar from "../components/Navbar/navbar";
import Contact from "../components/Contact/contact";
import { Link } from "react-router-dom";
import './page3.css';

function Page3() {
    return (
        <div className="page3">
            <Navbar />
            <div className="contact-content">
                <Contact />
                <Link to={"/"}>
                <button className="btn btn-primary pro-btn mt-3">Go to home page</button> 
                </Link>
            </div>
        </div>
    );
}

export default Page3; 



