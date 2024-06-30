import React from "react";
import Navbar from '../components/Navbar/navbar';
import Hero from '../components/Hero/hero';
import Search from '../components/Search/search';
import About from '../components/About/about';


function Page1(){
    return(
        <div>   
            <Navbar/>
            <Hero />
            <Search/>
            <About/>
        </div>
    )
}

export default Page1;