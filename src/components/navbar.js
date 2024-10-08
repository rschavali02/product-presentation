import React, { useState } from 'react';
import './navbar.css';
import presentationImage from './Translate.png';  // Import your presentation image

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Summaries</div>
      <div className="presentation-logo-container">
        <img src={presentationImage} alt="Presentation Logo" className="presentation-logo" />
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#features">Features To Add</a></li>
        <li><a href="#build">My Build</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
