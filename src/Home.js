import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero, { AboutSection, Client, Contact, Service, Teams } from './Hero';

function Home() {
    
    return ( 
        <div>
            <Header/>
            <Hero/>
            <Client/>
            <AboutSection/>
            <Service/>
            <Teams/>
            <Contact/>
            <Footer/>
        </div>
     );
}

export default Home;
