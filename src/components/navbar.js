import React from 'react';
import './navbar.css';
import presentationImage from './Translate.png';  // Import your presentation image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Translate</div>
      <div className="presentation-logo-container">
        <img src={presentationImage} alt="Presentation Logo" className="presentation-logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#features">Features To Add</a></li>
        <li><a href="#build">What I Have Built</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
