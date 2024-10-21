import React from 'react';
import './Games.css';
import gameImage1 from '../../assets/images/game1.png';
import gameImage2 from '../../assets/images/game2.png';

const Games = () => {
  return (
    <section id="games" className="games">
      <h2 className="games__title">Games</h2>
      <p className="games__description">Stay tuned for upcoming games!</p>
      <div className="games__previews">
        <div className="games__item">
          <img src={gameImage1} alt="Game 1" className="games__image" />
          <p>Game 1: Adventure Collected</p>
        </div>
        <div className="games__item">
          <img src={gameImage2} alt="Game 2" className="games__image" />
          <p>Game 2: Doggy's Pond</p>
        </div>
      </div>
    </section>
  );
};

export default Games;
