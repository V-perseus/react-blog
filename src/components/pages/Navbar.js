import React, {useState}from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {MdFingerprint} from 'react-icons/md';
import './Navbar.css';


function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to = "/" className="navbar-logo">
                        <MdFingerprint className='navbar-icon' />
                        Mango-Jam
                    </Link>
                    <div className="menu-icon" onClick={handleClick} />
                    {click ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </>
    )
}

export default Navbar
