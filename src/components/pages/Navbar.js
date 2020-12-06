import React from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineBars} from 'react-icons/ai';
import {MdFingerprint} from 'react-icons/md';
import './Navbar.css';


function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to = "/" className="navbar-logo">
                        <MdFingerprint className='navbar-icon' />
                        Mango-Jam
                    </Link>
                    <div className="menu-icon" />
                </div>
            </div>
        </>
    )
}

export default Navbar
