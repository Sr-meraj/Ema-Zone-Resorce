// eslint-disable-next-line no-unused-vars
import React from 'react';
import './header.css';
import Logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <header>
            <nav className='nav-bar'>
                <div className="ema-logo"><img src={Logo} alt="Ema Logo" /></div>
                <div className="ema-nav">
                    <a href="/order">Order</a>
                    <a href="/review">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;