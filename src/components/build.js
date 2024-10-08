import React from 'react';
import './build.css';
import chalkboardImage from './chalkboard.png';

function Build() {
  return (
    <section id="build" className="build">
      <h2>My Build</h2>
      <div className="build-content">
      <div className="build-item">
          <p> I build an AI application that takes in a user's youtube video, or a video file, reads the transcript, and then gives them saved notes based on detail level. The notes can be exported as .docx or .pdf and edited on the site. This was originally made as a study tool, but I quickly realized it would be better used as a learning resource for all videos built into YouTube underneath the video.<br /><br /> <b>In fact, the summary shown in the features was generated by this product. </b> <br /><br />Technologies Used: Streamlit, Python3, LLaMa3, MongoDB, YoutubeTranscriptReader, AssemblyAI.<br /><br /> The GitHub repository as well as installation instructions to test this yourself are linked: 
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
