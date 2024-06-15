import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import "./dashboard.css"

function Dashboard({ isAuthenticated }) {
    return (
        <div className='dashboard_container'>
            <Navbar isAuthenticated={isAuthenticated} />
            <div className="editor_container">
                <textarea
                    className='main_editor'
                    name="content"
                    id="content"
                    placeholder="Remember, be nice!"
                    autoFocus />
            </div>
            <div className="btn-controls">
                <Link className="paste-btn" to={"/paste"}>Create New Paste</Link>
            </div>
        </div>
    );
}


export default Dashboard;
