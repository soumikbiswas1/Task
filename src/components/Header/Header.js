import React from 'react';
import './Header.css';
//import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        {/* <img src={logo} alt="Alabay Logo" /> */}
        <h1>Alabay Project</h1>
      </div>
      <nav className="header__nav">
        <a href="#history">History</a>
        <a href="#vision">Project Vision</a>
        <a href="#roadmap">Road Map</a>
        <a href="#tokenomics">Tokenomics</a>
        <a href="#merchandise">Merchandise</a>
        <a href="#games">Games</a>
        <a href="#social-media">Social Media</a>
      </nav>
    </header>
  );
};

export default Header;
