import React, { useState } from 'react';
import './cultural-place.css';

function CulturalPlace({ name, date, description, image, url }) {
  const [showDescription, setShowDescription] = useState(false);


  const handlePlaceClick = () => {
    window.open(url, '_blank'); 
  };

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };
  return (
    <div
      className="cultural-place"
      onClick={handlePlaceClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>Year of foundation: {date}</h4>
      {showDescription && <div className="description-overlay">{description}</div>}
    </div>
  );
}

export default CulturalPlace;



