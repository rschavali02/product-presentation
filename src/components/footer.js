import React from 'react';
import './footer.css';
import profileImage from './profileImage.JPG';  // Import your circular image

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-image-container">
        <img src={profileImage} alt="Profile" className="footer-profile-image" />
      </div>
      <p>Contact & links</p>
      <div className="social-links">
        <a href="https://github.com/rschavali02">GitHub</a>
        <a href="mailto:c.rahul@wustl.edu">Email</a>
        <a href="https://www.linkedin.com/in/rahul-chavali/">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
