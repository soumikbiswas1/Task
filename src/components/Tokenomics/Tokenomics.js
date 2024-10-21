import React from 'react';
import './Tokenomics.css';
import tokenImage from '../../assets/images/tokenomics.png'; // Replace with actual image path

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="tokenomics">
      <h2 className="tokenomics__title">Tokenomics</h2>
      <div className="tokenomics__content">
        <div className="tokenomics__image">
          <img src={tokenImage} alt="Tokenomics" />
        </div>
        <div className="tokenomics__info">
          <div className="tokenomics__item">
            <span className="tokenomics__label">Liquidity:</span>
            <span className="tokenomics__value">Locked</span>
          </div>
          <div className="tokenomics__item">
            <span className="tokenomics__label">Contract:</span>
            <span className="tokenomics__value">Renounced</span>
          </div>
          <div className="tokenomics__item">
            <span className="tokenomics__label">Taxes:</span>
            <span className="tokenomics__value">5%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
