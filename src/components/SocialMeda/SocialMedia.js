import React from 'react';
import './SocialMedia.css';
import twitterIcon from '../../assets/icons/twitter.png';
import telegramIcon from '../../assets/icons/telegram.png';

const SocialMedia = () => {
  return (
    <section id="social-media" className="social-media">
      <h2 className="social-media__title">Follow Us</h2>
      <div className="social-media__links">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" className="social-media__icon" />
          Twitter
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
          <img src={telegramIcon} alt="Telegram" className="social-media__icon" />
          Telegram
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;
