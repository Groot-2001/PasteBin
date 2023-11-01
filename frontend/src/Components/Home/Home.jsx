import React from 'react';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Section from '../Section/Section';
import "./home.css";

function Home() {
    return (
        <div className='Home_Container'>
            <Navbar />
            <Hero />
            <Feature />
            <Section />
            <Footer />
        </div >

    );
}

export default Home; 