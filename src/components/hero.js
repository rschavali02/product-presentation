import React from 'react';
import './hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className='white-box'>
        <h1>
          Introducing Pulse
        </h1>
        <p>Keep your finger on the Pulse with Spotify's new product seamlessly integrated with AI technology. It's designed to help keep your discover podcasts and expand your understanding.</p>
        <div className="text-above-button"> 
          <p>Ready to dive in? Click the button to see the full Product Spec!</p>
        </div>
        <a href="https://docs.google.com/document/d/1TSsMgs1RsDLpkmrmOZGOeKhEtL3SAdCSobYvdVd6m5w/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">Click to View</button>
        </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
