import React from 'react';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import "./home.css";

function Home() {
    return (
        <div className='Home_Container'>
            <Navbar />
            <Hero />
            <Footer />
        </div >

    );
}

export default Home; 