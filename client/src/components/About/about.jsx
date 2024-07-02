import React from "react";
import './about.css';
import Abt from "../Cards/Abt-crd/abt-crd";

function About(){
    return(
        <div className="abtcards">
            <div className="abttitle">
                <h2>About Us</h2>
            </div>
            <div className="titldes"> 
            <Abt 
                title="LawMerchant Simplified"
                description="Our project is all about creating a user-friendly system to help e-commerce merchants to manage their compliance with regulations. Whether it's in Grocery, Electronics, F&B, Fashion, or Agriculture, our platform offers a clear dashboard overview, easy navigation by industry categories, and powerful search tools. We provide detailed pages for each regulation, visual indicators to check regulation for products and their correctness status.We are here simplify compliance tasks so e-commerce merchants can focus on what they do best, with confidence that they're meeting all necessary regulations and requirements for their products." />
             <Abt 
                title="Our Vision"
                description="The vision of our project is to create a platform that simplifies compliance for businesses across various sectors. By gathering large-scale data from government repositories and presenting only relevant regulatory information, we save businesses time and effort. Our goal is to provide clear and detailed guidance through intuitive tools, helping businesses manage regulatory requirements easily. This approach reduces risks, enhances engagement with visually appealing features, and allows businesses to focus more on their core activities."
                />
             <Abt 
                title="Driving Compliance Forward"
                description="Explore our ongoing commitment to innovation in compliance management. Highlight upcoming features and enhancements that will further simplify regulatory tasks for businesses. Discuss how we're leveraging advanced technologies like AI or machine learning to enhance data accuracy and predictive analytics capabilities. This card aims to showcase our forward-thinking approach and our dedication to continuously improving the compliance experience for our users."
            />
             </div>
            
        </div>
    )
}

export default About;