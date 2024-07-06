import React from "react";
import Rules from "../components/Rules/rules";
import './page2.css';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";


function Page2(){
    return(
        <div className="mainpg">
             <div className="page2">
            <Navbar/>
            <div className="pg2-cnt">
                <Rules/>
                <Link to={"/"}>
                    <button className="btn btn-primary pro-btn mt-3">Go to home page</button> 
                </Link>
            </div>
          </div>
        </div>
       
    )
}

export default Page2;