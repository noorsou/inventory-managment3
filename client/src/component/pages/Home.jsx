import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup'); // Redirects to the signup page
  };

  return (
    <div>
      <h1>Welcome to the Management Inventory</h1>
      <button onClick={handleSignupClick}>Sign Up</button>
    </div>
  );
};

export default Home;