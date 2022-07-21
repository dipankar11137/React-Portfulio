import React from 'react';
import Navbar from "./../Navbar/Navbar.jsx";
import Intro from "./../Intro/Intro.jsx";
import Services from "./../Services/Services.jsx";
import Experience from "./../Experience/Experience.jsx";
// import Works from "./../Works/Works.jsx";
import Portfolio from "./../Portfolio/Portfolio.jsx";
import Testimonial from "./../Testimonials/Testimonial.jsx";
import Contact from "./../Contact/Contact.jsx";
import Progressbar from "./../Progressbar/Progressbar.jsx";
import Footer from "./../Footer/Footer.jsx";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            <Services />
            <Experience />
            {/* <Works /> */}
            <Portfolio />
            <Progressbar />
            {/* <Testimonial /> */}
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;