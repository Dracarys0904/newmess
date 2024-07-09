import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './logo.png';  // Assuming the file name is "white logo.png
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-title">
        <img className='ab' src={logoImage} alt="Logo" />  {/* Add alt text for accessibility */}
        <h1>Sinhgad Technical Education Society's<br /> Mess Feedback System</h1>
      </div>
      <div className="links">
        <Link to="/">Login</Link>
        <Link to="/student">Student</Link>
        <Link to="/supervisor">Supervisor</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/Manager">Manager</Link>
      </div>
    </nav>
  );
}

export default Navbar;
