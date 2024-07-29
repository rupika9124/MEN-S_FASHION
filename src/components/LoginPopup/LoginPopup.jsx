import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin, setShowSignUp, setUserName }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform validation or authentication logic here
    // For simplicity, let's assume the login is successful
    localStorage.setItem('user', JSON.stringify({
      username: username,
      email: email,
      password: password
    }))
    setUserName(username); // Send username to parent component
    setShowLogin(false); // Close the login popup
  };

  return (
    <div className='login-popup'>
      <form className="login-popup-container" onSubmit={handleLogin}>
        <div className='login-popup-title'>
          <h2>Login</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          <input type="text" placeholder='Your Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="email" placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
        <div onClick={() => { 
                    setShowLogin(false)
                    setShowSignUp(true)
                     }} style={{cursor: 'pointer'}}>Don't have an account?</div>
      </form>
    </div>
  );
};

export default LoginPopup;
