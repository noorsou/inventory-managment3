
import { useState } from 'react';
import user_icon from '../images/person.png';
import email_icon from '../images/email.png';
import password_icon from '../images/password.png';
import './Login.css';

const Login = () => {
  return (
    <div className='container'>
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
      <div className="input">
        <img src={email_icon} alt="" /> 
        <input id="txt" type="email" />     
        </div>
        <div className="input">
        <img src={password_icon} alt="" /> 
        <input id="txt" type="password" />     
        </div>
      </div>
      <div className="forgot-password">Lost Password ?<span>Click Here !</span></div>
      <button className="submit" type='submit'>Login</button>
        
    </div>
  );
}

export default Login;

