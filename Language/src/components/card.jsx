import React, { useState } from 'react';
import './FlipCard.css'; // Import your CSS file for styling

const FlipCard = ({ question, answer, isFlipped, setIsFlipped }) => {
  const handleCardClick = () => {
    setIsFlipped(!isFlipped); // Toggle the flip state
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {/* Front side content */}
          <h1>{question}</h1>
        </div>
        <div className="flip-card-back">
          {/* Back side content */}
          <h1>{answer}</h1>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
