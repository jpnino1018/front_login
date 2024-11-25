import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate(); // Using useNavigate for React Router v6
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome!</h1>
      <p>Please choose an option below:</p>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate('/register')}
          style={{
            margin: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
        <button
          onClick={() => navigate('/login')}
          style={{
            margin: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
