import React from 'react';
import './Roadmap.css';
import roadMapData from '../../Data/RoadMapData';

const RoadMap = () => {
  return (
    <section id="roadmap" className="roadmap">
      <h2 className="roadmap__title">Road Map</h2>
      <div className="roadmap__stages">
        {roadMapData.map((stage, index) => (
          <div key={index} className="roadmap__stage">
            <img src={stage.icon} alt={stage.phase} className="roadmap__icon" />
            <h3 className="roadmap__phase">{stage.phase}</h3>
            <p className="roadmap__description">{stage.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoadMap;
