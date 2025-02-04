import React from 'react';
import './hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className='white-box'>
        <h1>
          Introducing Notes
        </h1>
        <p>Notes is the next step for Notion. Seamlessly integrated with AI technology, it's designed to help you learn faster and organize better.</p>
        <div className="text-above-button"> 
          <p>Ready to dive in? Click the button to see the full Product Spec!</p>
        </div>
        <a href="https://docs.google.com/document/d/177-i8JSEZmXIf8nyk3pnxgjUD5s69dmA_HXNChosXyw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">Click to View</button>
        </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
