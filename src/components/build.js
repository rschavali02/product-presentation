import React from 'react';
import './build.css';

function Build() {
  return (
    <section id="build" className="build">
      <div className="build-content">
      <div className='box'>
      <div className="build-item">
      <h2>Your personal AI assistant and workflows to close deals</h2>
          <p> Match comes filled with AI agents built to help you close your deals</p>
          <ul>
            <li>
              <strong>Smart Match Analyzer:</strong> Gain insights into why a match is recommended, with an AI-generated summary highlighting compatibility factors such as industry alignment, financial viability, and growth potential.
            </li>
            <li>
              <strong>Automated Document Reviewer:</strong> Streamline due diligence by letting AI analyze and summarize key legal, financial, and operational documents, reducing review time significantly.
            </li>
            <li>
              <strong>Negotiation Insights Assistant:</strong> Leverage AI to suggest optimal deal terms, flag potential risks, and recommend counteroffers based on industry benchmarks and historical data.
            </li>
          </ul>
      </div>
        <a href="https://docs.google.com/document/d/1o3NUI9Yt-goxeWw7XtSRebVV-36n6iU39Sude5ou9XM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">Click to View</button>
        </a>
        </div>
      </div>
    </section>
  );
}

export default Build;
