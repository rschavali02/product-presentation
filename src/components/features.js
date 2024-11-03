import React, { useState } from 'react';
import './features.css';
import feature2Image from "./feature2.png";
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

  return (
    <section id="features" className="features">
      <h2>Key Features</h2>
      <div className="features-grid">
        <div className="feature" onClick={() => openModal(feature1Image)}>
          <h3>Feature 1</h3>
          <p>Enable users to select the summarize feature with easy access on the side bar view.</p>
          <img src={feature1Image} alt="Feature 1" className="feature-image" />
          <p className="click-to-zoom">(Click to Zoom)</p>
        </div>
        <div className="feature" onClick={() => openModal(feature2Image)}>
          <h3>Feature 2</h3>
          <p>Allow users to title the transcription and summary, as well as press their selected key to record.</p>
          <img src={feature2Image} alt="Feature 2" className="feature-image" />
          <p className="click-to-zoom">(Click to Zoom)</p>
        </div>
        <div className="feature" onClick={() => openModal(feature3Image)}>
          <h3>Feature 3</h3>
          <p>Give users the ability to generate summaries by detail level and save a full transcript of their recording.</p>
          <img src = {feature3Image} alt="Feature 3" className="feature-image" />
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
