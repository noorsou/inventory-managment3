
import email_icon from '../images/email.png';
import password_icon from '../images/password.png';
import './Login.css';
import { Link } from 'react-router-dom'; 

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
        <input id="txt"   name="email"
            placeholder="Email"type="email" /> 
        </div>
        <div className="input">
        <img src={password_icon} alt="" /> 
        <input id="txt"  name="password"
            placeholder="Password" type="password" />     
        </div>
      </div>
      <div className="forgot-password">Lost Password ?<span>Click Here !</span></div>
      <br /><button className="submit" type='submit'>Login</button>
      <p className='signup'>
         you  dont have an account? <Link to="/Signup" className="btn2">Sign Up</Link>
        </p>

    </div>
  );
}

export default Login;

