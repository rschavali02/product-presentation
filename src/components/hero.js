import React from 'react';
import './hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className='white-box'>
        <h1>
          Introducing Match
        </h1>
        <p>Match is the next step for connecting buyers and sellers. Seamlessly integrated with AI technology, it's designed maximize your interactions and convert to deals.</p>
        <div className="text-above-button"> 
          <p>Ready to dive in? Click the button to see the full Product Spec!</p>
        </div>
        <a href="https://docs.google.com/document/d/1dX4hAcSwgn1mu0Yg_7aSMfXBw7wur8NLYYaQ6T3fON0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">Click to View</button>
        </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
