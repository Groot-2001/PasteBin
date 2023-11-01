import React from 'react';
import "./section.css"

function Section() {
    return (
        <div className='sponser-section'>
            <h5>Used by software engineers at companies and universities we respect and admire.</h5>
            <div className="logos">
                <div className="company-logo">
                    <img src={"/Assets/Img/logos.png"} alt="broken img" />
                </div>
            </div>
        </div>
    );
}

export default Section;
