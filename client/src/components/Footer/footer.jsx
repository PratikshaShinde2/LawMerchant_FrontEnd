import React from "react";
import './footer.css';
import Lottie from 'lottie-react';
import animationData from '../../animations/caranimation.json';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="lottie-animation">
                <Lottie
                    animationData={animationData}
                    loop
                    autoplay 
                />
            </div>
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
                        <h4>Navigate</h4>
                        <a href="#about"><p>About</p></a>
                        <a href="#search"><p>Search</p></a>
                        <a href="#home"><p>Home</p></a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Resources</h4>
                        <a href="https://fssai.gov.in/cms/food-safety-and-standards-regulations.php" target="_blank" rel="noopener noreferrer"><p>FSSAI</p></a>
                        <a href="https://www.bis.gov.in/" target="_blank" rel="noopener noreferrer"><p>BIS</p></a>
                        <a href="https://agriwelfare.gov.in/en/Acts" target="_blank" rel="noopener noreferrer"><p>Agriwelfare</p></a> 
                        <a href="https://www.meity.gov.in/content/acts" target="_blank" rel="noopener noreferrer"><p>MEITY</p></a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Queries?</h4>
                        <Link to="/contact"><p>Contact</p></Link>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Get Notified</h4>
                        <button className="f-btn">Subscribe</button>
                    </div>
                </div>
                <hr />
                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>@{new Date().getFullYear()} LawMerchant. All rights reserved</p>
                    </div>
                    <div className="studio">
                        <p>A project by IT-Studio</p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
