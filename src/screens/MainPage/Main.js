import React from 'react';
import Nav from '../../components/Nav/Nav';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import AfterHero from '../../components/AfterHero/AfterHero';
import Feature from '../../components/Feature/Feature';
// import About from '../../components/About/About';
// import Services from '../../components/Services/Services';
// import LatestBlog from '../../components/LatestBlog/LatestBlog';
// import LetsChat from '../../components/LetsChat/LetsChat';
// import Testimonial from '../../components/Testimonial/Testimonial';
// import Contact from '../../components/Contact/Contact';
// import Footer from '../../components/Footer/Footer';
// import Services from '../../components/Servicese/Services'
const Main = () =>{
    return(
        <div  >
           <Nav/>
            <HeroHeader/>
            <AfterHero/>
            <Feature/>
            {/* <Services/>
            <LatestBlog/>
            <LetsChat/>
            <Testimonial/>
            <Contact/>
            <Footer/> */}

        </div>
    )
}

export default Main;