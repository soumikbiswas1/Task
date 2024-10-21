import React from 'react';
import './History.css';
import historyImage from '../../assets/Images/history.png'; // Replace with actual image path

const History = () => {
  return (
    <section id="history" className="history">
      <div className="history__content">
        <h2 className="history__title">History of Alabay</h2>
        <p className="history__description">
          The Central Asian Shepherd Dog, also known as the Alabay, has been a guardian of livestock and a protector for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.
        </p>
      </div>
      <div className="history__image">
        <img src={historyImage} alt="Alabay History" />
      </div>
    </section>
  );
};

export default History;
