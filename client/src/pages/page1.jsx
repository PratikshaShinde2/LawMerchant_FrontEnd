import React, {useRef} from "react";
import Navbar from '../components/Navbar/navbar';
import Hero from '../components/Hero/hero';
import Search from '../components/Search/search';
import About from '../components/About/about';
import useScrollToAbout from '../hooks/useScrollToAbout';


function Page1(){
    const aboutRef = useRef(null);
    
    useScrollToAbout(aboutRef);


    return(
        <div>   
            <Navbar />
            <Hero />
            <Search/>
            <div ref={aboutRef}>
            <About/>
            </div>
        </div>
    )
}

export default Page1;