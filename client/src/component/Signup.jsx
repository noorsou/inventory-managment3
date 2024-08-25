import { Link } from 'react-router-dom'; 
import './Signup.css';
const Signup = () => {
  return (
    <div className='container'>
      <div className="header">
        <div className="text">Signup</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
      <div className="input">
        <input id="name"   name="name"
            placeholder="UserName"type="name" /> 
        </div>
        <div className="input">
          <input id="email"
            type="email"
            name="email"
            placeholder="Email"/>
        </div>
        <div className="input">
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="input">
        <input id="txt"   name="Role"
            placeholder="Role"type="role" /> 
        </div>
        <button type="submit" className="btn">Sign Up</button>
        <p className='p'>
          Already have an account? <Link to="/login" className="btn2">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
