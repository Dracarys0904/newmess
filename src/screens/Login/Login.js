import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Choose your login</h2>
      <div className="login-options">
        <Link to="/student" className="login-button">Student Login</Link>
        <Link to="/supervisor" className="login-button">Supervisor Login</Link>
        <Link to="/admin" className="login-button">Admin Login</Link>
        <Link to="/Manager" className="login-button">Manager Login</Link>
      </div>
    </div>
  );
}

export default Login;