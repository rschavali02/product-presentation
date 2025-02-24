import React from 'react';
import './build.css';
import chalkboardImage from './chalkboard.png';

function Build() {
  return (
    <section id="build" className="build">
      <div className="build-content">
      <div className='box'>
      <div className="build-item">
      <h2>My Build</h2>
          <p> I built an AI Assistant that takes in a user's speech, allowing them to reference their calendar, dictate notes instead of typing, and ask an AI assistant questions. Originally designed as a productivity tool, I quickly realized its potential as a hands-free assistant for scheduling, note-taking, and quick information retrieval, making it useful in various situations where typing isn't convenient.
          <br></br>
          <br></br>
          Technologies Used: Python, Vosk Speech-to-Text Model, GroqCloud with Llama3 Integration, TKinter GUI, PyAudio
          <br></br>
          <br></br>
          The GitHub repository as well as installation instructions to test this yourself are linked:
          <a href="https://github.com/rschavali02/AI-Voice-Assistant" target="_blank" rel="noopener noreferrer"> <br></br>
           GitHub
          </a>
          <br></br>
          <br></br>
          View the full detailed build spec here!
          <br></br>
          <br></br>
          <a href="https://docs.google.com/document/d/1oaeo-UpbNteUiWaQeG_2LIRurX-TXEWianVI_UuKIWI/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">Click for Full Build Spec</button>
        </a>
          </p>
          <br></br>
      </div>

        <div className="build-item">
          <iframe
            src="https://www.loom.com/embed/464d0e14a5ea4eb3ba11f1ca82fe1553?sid=50f5f17e-d59c-42fe-baf6-2c9355cb5511"  // Use the embed URL here
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Loom Video"
            className="build-video"
          ></iframe>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Build;
