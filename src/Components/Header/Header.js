import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="logo" />
            <div>
                <a href="">Order</a>
                <a href="">Order Review</a>
                <a href="">Mange Inventory</a>
                <a href="">Login</a>
            </div>
        </nav>
    );
};

export default Header;