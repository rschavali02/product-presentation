import React from 'react';
import './hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Introducing YouSummarize
        </h1>
        <p>YouSummarize is the next step for Youtube. Seamlessly integrated with AI technology, it's designed to help you learn faster.</p>
        <div className="text-above-button">
          <p>Ready to dive in? Click the button to see the full Product Spec!</p>
        </div>
        <a href="https://docs.google.com/document/d/1XQtlZ2SUpbWxO1oSWWMRHLNEOTRsQ0_cOPzYGC7ld2M/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">Get Started</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
