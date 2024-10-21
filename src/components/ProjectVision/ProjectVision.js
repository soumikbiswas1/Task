import React from 'react';
import './ProjectVision.css';
import visionImage from '../../assets/images/vision.png'; // Replace with actual image path

const ProjectVision = () => {
  return (
    <section id="vision" className="project-vision">
      <h2 className="vision__title">Project Vision</h2>
      <div className="vision__content">
        <div className="vision__text">
          <p>
            Our mission is to honor the heritage of the Alabay by creating a vibrant, fun, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together!
          </p>
        </div>
        <div className="vision__image">
          <img src={visionImage} alt="Alabay Project Vision" />
        </div>
      </div>
    </section>
  );
};

export default ProjectVision;
