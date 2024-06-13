import React from 'react';
import { Link } from 'react-router-dom';
import "./hero.css";

function Hero() {
    return (
        <div className="Hero">
            <div className="Hero_Container">
                <div className="Hero_left">
                    <h1 className='Hero_header'>
                        <span className='Hero_mainheader'>Have you ever wanted to store data Online and Make it accessible to others?</span><br />
                        <span className='Hero_subheader'>Share your code snippets and collaborate on programming projects with PasteBin</span>
                    </h1>
                    <Link className='Join_button' to={"/dashboard"}>Join</Link>
                </div>
                <div className="Hero_right">
                    <div className="cropped-image"></div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
