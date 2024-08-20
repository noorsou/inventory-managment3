/*import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Signup.css';

const Signup = () => {
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.text();
      alert(result); // Or handle success as needed
    } catch (error) {
      setErrors({ general: 'Failed to sign up' });
      console.error('Sign up error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="card-container">
      <h2>Sign Up</h2>
      <Formik
        initialValues={{ UserName: '', Email: '', Password: '', Role: '' }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="UserName">Username</label>
              <Field type="text" name="UserName" className="form-control" />
              <ErrorMessage name="UserName" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <Field type="email" name="Email" className="form-control" />
              <ErrorMessage name="Email" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <Field type="password" name="Password" className="form-control" />
              <ErrorMessage name="Password" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="Role">Role</label>
              <Field type="text" name="Role" className="form-control" />
              <ErrorMessage name="Role" component="div" className="invalid-feedback" />
            </div>
            <button type="submit" className="btn" disabled={isSubmitting}>
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;*/
import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const [UserName, setUserName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        UserName,
        Email,
        Password,
        Role,
      });
      console.log('Signup successful:', response.data);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="card-container">
      <h2 className="signup-heading">Sign Up</h2> {/* Add the heading */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <input
            id="role"
            type="text"
            value={Role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Role"
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
