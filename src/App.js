import React from 'react';
import Header from './components/Header/Header';
import History from './components/History/History';
import ProjectVision from './components/ProjectVision/ProjectVision';
import RoadMap from './components/Roadmap/Roadmap';
import Tokenomics from './components/Tokenomics/Tokenomics';
import Merchandise from './components/Merchandise/Merchandise';
import Games from './components/Games/Games';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* Main Header with Navigation */}
      <Header />

      {/* History Section */}
      <section id="history">
        <History />
      </section>

      {/* Project Vision Section */}
      <section id="project-vision">
        <ProjectVision />
      </section>

      {/* Roadmap Section */}
      <section id="roadmap">
        <RoadMap />
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics">
        <Tokenomics />
      </section>

      {/* Merchandise Section */}
      <section id="merchandise">
        <Merchandise />
      </section>

      {/* Games Section */}
      <section id="games">
        <Games />
      </section>

      {/* Social Media Links */}
      <section id="social-media">
        <SocialMedia />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
