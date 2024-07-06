import React from "react";
import Navbar from "../components/Navbar/navbar";
import Contact from "../components/Contact/contact";
import Footer from "../components/Footer/footer";
import { Link } from "react-router-dom";
import './page3.css';

function Page3() {
    return (
        <div>
                <div className="page">
            <Navbar />
            <div className="contact-content">
                <Contact />
                <Link to={"/"}>
                <button className="btn btn-primary pro-btn mt-3">Go to home page</button> 
                </Link>
            </div>
            
        </div>
        <Footer />
        </div>
        
    );
}

export default Page3; 



