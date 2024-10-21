import React from 'react';
import './Merchandise.css';
import merchImage from '../../assets/images/merch-shirt.png'; // Replace with actual image path

const Merchandise = () => {
  return (
    <section id="merchandise" className="merchandise">
      <h2 className="merchandise__title">Merchandise</h2>
      <div className="merchandise__content">
        <div className="merchandise__item">
          <img src={merchImage} alt="Alabay T-Shirt" className="merchandise__image" />
          <div className="merchandise__info">
            <p>Coming Soon... Stay Tuned for exclusive Alabay merchandise!</p>
            <button className="merchandise__button">Discover</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merchandise;
