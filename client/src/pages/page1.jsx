import React, {useRef} from "react";
import Navbar from '../components/Navbar/navbar';
import Hero from '../components/Hero/hero';
import Search from '../components/Search/search';
import About from '../components/About/about';
import Footer from '../components/Footer/footer';
import useScrollToAbout from '../hooks/useScrollToAbout';
import useScrollToSearch from "../hooks/useScrollToSearch";


function Page1(){
    const aboutRef = useRef(null);
    const searchRef = useRef(null);
    
    useScrollToAbout(aboutRef);
    useScrollToSearch(searchRef)


    return(
        <div>   
            <Navbar />
            <Hero />
            < div ref={searchRef}>
            <Search/>
            </div>
            <div ref={aboutRef}>
            <About/>
            </div>
            <Footer />
        </div>
    )
}

export default Page1;