import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Hero from '../../Components/Hero/Hero';
import Navbar from '../../Components/Navbar/Navbar';
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