import React from 'react';
import './build.css';
import chalkboardImage from './chalkboard.png';

function Build() {
  return (
    <section id="build" className="build">
      <h2>My Build</h2>
      <div className="build-content">
      <div className="build-item">
          <p> I build this AI application that takes in a users youtube video, or a video file, reads the transcript, and then gives them saved notes based on detail level. The notes can be exported as .docx or .pdf and edited on the site. This was originally made as a study tool, but I quickly realized it would be unusable by students in other countries to non-english speakers.<br /><br /> After building this product, I had an idea of how Otter.ai might work, and what product considerations there might be. <br /><br /> The GitHub repository as well as installation instructions to test this yourself are linked: 
          <a href="https://github.com/rschavali02/Chalkboard.ai_" target="_blank" rel="noopener noreferrer">
          GitHub
          </a>
          </p>
      </div>
        <div className="build-item">
          <img src={chalkboardImage} alt="Your Build" className="build-image" />
        </div>
        <div className="build-item">
          <iframe
            src="https://www.loom.com/embed/d7793752fe7641d89a9dc7a0032f36b9"  // Use the embed URL here
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Loom Video"
            className="build-video"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Build;
