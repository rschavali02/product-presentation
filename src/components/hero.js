import React from 'react';
import './hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className='white-box'>
        <h1>
          Introducing FlowAssistant
        </h1>
        <p>FlowAssistant is the next step for Wispr Flow. Seamlessly integrated with AI technology, it's designed to help you work faster.</p>
        <div className="text-above-button"> 
          <p>Ready to dive in? Click the button to see the full product analysis!</p>
        </div>
        <a href="https://docs.google.com/document/d/1BOZKemDdEoMAAoIoIKEVFfAYMaKy9XrO4gAL1iV9d6U/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">Click to View</button>
        </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
