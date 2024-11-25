import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const WelcomePage = () => {
  const navigate = useNavigate(); // Using useNavigate for React Router v6
  return (
    <div className="container">
      <h1>Welcome!</h1>
      <p>Please choose an option below:</p>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => navigate('/register')}>Register</button>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
    </div>
  );
};

export default WelcomePage;
