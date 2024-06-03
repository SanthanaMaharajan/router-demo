import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { AboutSection } from './Hero';
import { Client } from './Hero';
import { Service } from './Hero';

function About() {
    return ( 
        <div>
            <Header/>
            <AboutSection/>
            <Client/>
            <Service/>
            <Footer/>
        </div>
     );
}

export default About;