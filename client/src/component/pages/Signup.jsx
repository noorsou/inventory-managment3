import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/signup', formData);
      console.log('Signup successful:', response.data);
      navigate('/'); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="card-container">
      <h2 className="signup-heading">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"  
            type="text"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Username"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"  
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"  
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <input
            id="role"
            name="role" 
            type="text"
            value={formData.role}
            onChange={handleInputChange}
            placeholder="Role"
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn">Sign Up</button>
        <p className='p'>Already have an account? Login</p>
        <button type="submit" className="btn2">Login</button>

      </form>
    </div>
  );
};

export default Signup;
