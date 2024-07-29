import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin, setShowSignUp, username, onSignOut }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
    <div className="navbar">
        <ul className="navbar-menu">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            <li><Link to='/order'>Place Order</Link></li>
        </ul>
        <div className="navbar-right">
            {user ? (
                <span>Welcome {user.username} | <button onClick={onSignOut}>Sign Out</button></span>
            ) : (
                <div>
                    <button onClick={() => setShowLogin(true)}>Sign In</button>
                    <button onClick={() => setShowSignUp(true)}>Sign Up</button> 
                </div>
            )}
        </div>
    </div>
    );
};

export default Navbar;
