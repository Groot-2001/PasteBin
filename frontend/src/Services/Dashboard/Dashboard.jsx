import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import "./dashboard.css"

function Dashboard() {
    return (
        <div className='dashboard_container'>
            <Navbar />
            <div classNameName="editor_container">
                <textarea
                    classNameName='main_editor'
                    name="content"
                    id="content"
                    placeholder="Remember, be nice!"
                    autoFocus />
            </div>
            <div classNameName="btn-controls">
                <Link classNameName="paste-btn" to={"/paste"}>Create New Paste</Link>
            </div>
        </div>
    );
}


export default Dashboard;
