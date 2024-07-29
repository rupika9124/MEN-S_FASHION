import React, { useState } from 'react';
import './Signup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowSignUp, setShowLogin, setUserName }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        // Perform validation
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        // For simplicity, let's assume the signup is successful
        setUserName(username); // Send username to parent component
        setShowSignUp(false); // Close the signup popup
    };

    return (
        <div className='signup-popup'>
            <form className="signup-popup-container" onSubmit={handleSignup}>
                <div className='signup-popup-title'>
                    <h2>Sign Up</h2>
                    <img onClick={() => setShowSignUp(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="signup-popup-inputs">
                    <input type="text" placeholder='Your Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type="email" placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
                <button type="submit">Sign Up</button>
                <div onClick={() => { 
                    setShowSignUp(false)
                    setShowLogin(true)
                     }} style={{cursor: 'pointer'}}>Already have an account?</div>
            </form>
        </div>
    );
};

export default LoginPopup;

