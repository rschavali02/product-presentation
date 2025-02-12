import React from 'react';
import './build.css';
import chalkboardImage from './chalkboard.png';

function Build() {
  return (
    <section id="build" className="build">
      <div className="build-content">
      <div className='box'>
      <div className="build-item">
      <h2>My Build </h2>
          <p> I build an AI application that takes in a recruiter’s highlights and experience and then gives them a profile with 3 key strengths and a short career summary. The profile can be exported to linkedin to help recruiters share skills and paraform gain exposure. The build also includes a border recruiter dashboard which gives recruiters more insight on their time at Paraform. <br /><br />Technologies Used: ReactJS, Python3, LLaMa3, GroqCloud.<br /><br /> The GitHub repository as well as installation instructions to test this yourself are linked:
          <a href="https://github.com/rschavali02/RecruiterDashboard" target="_blank" rel="noopener noreferrer">
          GitHub
          </a>
          </p>
          <br></br>
      </div>
        <div className="build-item">
          <iframe
            src="https://www.loom.com/embed/1fa4f366a97a475c8d948da568a50cde?sid=4dd9daab-fef5-481d-97d6-81021d0ec033"  // Use the embed URL here
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

/*
<div style="position: relative; padding-bottom: 56.60377358490566%; height: 0;"><iframe src="https://www.loom.com/embed/1fa4f366a97a475c8d948da568a50cde?sid=4dd9daab-fef5-481d-97d6-81021d0ec033" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
*/

export default Build;
