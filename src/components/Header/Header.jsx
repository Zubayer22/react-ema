import React from 'react';
import './Header.css';
import logo from '../../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-item'>
                <Link to="">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Log In</Link>
            </div>
        </nav>
    );
};

export default Header;