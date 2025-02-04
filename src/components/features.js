import React, { useState } from 'react';
import './features.css';
//import feature2Image from "./feature2.png";
import feature1Image from "./feature1.png";
import feature3Image from "./feature3.png";
import Modal from 'react-modal';

Modal.setAppElement('#root');  // Set the root element for accessibility

function Features() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  //update

  return (
    <section id="features" className="features">
      <h2>Key Features</h2>
      <div className="features-grid">
        <div className="feature1" onClick={() => openModal(feature1Image)}>
          <h3>Screen 1</h3>
          <p>The website version allows users to see Pulse tailored to their podcast on the play screen. The screen shows a Pulse chatbot alongside common questions users might ask. Users can ask from anything to context and clarification to translating transcripts to another language. Since the transcript is text, modern day LLMs are perfect for this solution.</p>
          <img src={feature1Image} alt="Feature 1" className="feature-image1" />
          <p className="click-to-zoom">(Click to Zoom)</p>
        </div>
        {/*<div className="feature" onClick={() => openModal(feature2Image)}>
          <h3>Feature 2</h3>
          <p>Give users the ability to generate summaries by detail level and save an editable summary into their note.</p>
          <img src={feature2Image} alt="Feature 2" className="feature-image" />
          <p className="click-to-zoom">(Click to Zoom)</p>
    </div> */}
        <div className="feature2" onClick={() => openModal(feature3Image)}>
          <h3>Screen 2</h3>
          <p>The phone version allows users to interact with Pulse on the play screen conveniently placed under the podcast play button.</p>
          <img src = {feature3Image} alt="Feature 3" className="feature-image2" />
          <p className="click-to-zoom">(Click to Zoom)</p>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Feature Image"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-button">Close</button>
        <img src={currentImage} alt="Enlarged Feature" className="modal-image" />
      </Modal>
    </section>
  );
}

export default Features;
