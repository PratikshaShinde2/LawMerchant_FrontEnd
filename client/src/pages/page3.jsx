import React from "react";
import Navbar from "../components/Navbar/navbar";
import { Link } from "react-router-dom";
import './page3.css';

function Page3() {
    return (
        <div className="page3">
            <Navbar />
            <div className="contact-content">
                <h1>Contact Us</h1>
                <p>Any Queries???Ask then!!!</p>
                <Link to={"/"}>
                <button className="btn btn-primary pro-btn mt-3">Go to home page</button> 
                </Link>
            </div>
        </div>
    );
}

export default Page3;
