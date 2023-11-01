import React from 'react';
import "./feature.css";
function Feature() {
    return (
        <div className="Feature_Container">
            <h1 className='Feature_header'>Features</h1>
            <div className="feature-cards">
                <div className="feature-card">
                    <div className="feature-photo">
                        <img src={"/Assets/Img/minions.jpg"} alt="img broken" />
                    </div>
                    <div className="card-container">
                        <h4><b>Code with your team</b></h4>
                        <p>Open a Pastebin editor, write  with friends and colleagues.</p>
                    </div>
                </div>
                <div className="feature-card">
                    <div className="feature-photo">
                        <img src={"/Assets/Img/minions.jpg"} alt="img broken" />
                    </div>
                    <div className="card-container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                <div className="feature-card">
                    <div className="feature-photo">
                        <img src={"/Assets/Img/minions.jpg"} alt="img broken" />
                    </div>
                    <div className="card-container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                <div className="feature-card">
                    <div className="feature-photo">
                        <img src={"/Assets/Img/minions.jpg"} alt="img broken" />
                    </div>
                    <div className="card-container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
            </div>
        </div >
    );
}


export default Feature;
