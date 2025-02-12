import React from 'react';
import './hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className='white-box'>
        <h1>
          Introducing Share
        </h1>
        <p>Share is the next step for Paraform. Seamlessly integrated with AI technology, it's designed to help Paraform grow and recruiters network.</p>
        <div className="text-above-button"> 
          <p>Ready to dive in? Click the button to see the full Product Spec!</p>
        </div>
        <a href="https://docs.google.com/document/d/1XKR-4w11KjoKPvNpcW7Q3RvJNyFzfpENR3SG4dj2cyQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">Click to View</button>
        </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
