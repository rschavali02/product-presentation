import React, { useState } from 'react';
import './features.css';
import feature1Image from "./feature1.png";
import feature2Image from "./feature2.png";
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
          <h3>Match Screen</h3>
          <p>Enable users learn more about their Match with specific insights</p>
          <img src={feature1Image} alt="Feature 1" className="feature-image" />
          <p className="click-to-zoom">(Click to Zoom)</p>
        </div>
        <div className="feature" onClick={() => openModal(feature2Image)}>
          <h3>Chat Screen</h3>
          <p>Give users tools to effectively communicate and close deals.</p>
          <img src = {feature2Image} alt="Feature 2" className="feature-image" />
          <p className="click-to-zoom">(Click to Zoom)</p>
        </div>
        <div className="feature" onClick={() => openModal(feature3Image)}>
          <h3>Document Screen</h3>
          <p>Provide document clarity by including summaries and chat functionality</p>
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
