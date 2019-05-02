import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../static/assets/logo3.png';


const Navbar = () => (
    <nav className="container navbar">
        <Link to="/">
            <img 
                src={Logo} 
                alt="logo" 
                className="navbar__logo"
            />
        </Link>
        <div className="navbar__links">
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </nav> 
);

export default Navbar;
