import React, { useState } from 'react';
import { countingStatistics } from '../statistics/statistics';
import './card.scss';

const Card = ({ word, translation, image, gameMode }) => {
  const [flipped, setFlipped] = useState(false);
  const [rotation] = useState(`rotate(${(Math.random() * (3 - (-3)) - 3).toFixed(1)}deg)`);

  const audio = new Audio(`./sounds/${word}.mp3`);

  const handleClickCard = (event) => {
    if (!event.target.classList.contains('reverse-button') && !gameMode) {
      countingStatistics(`${word}`, 'clicks');
      audio.play();
    }
  };

  let classFront = '';
  let classBack = '';
  let classImage = '';
  if (flipped) {
    classFront = ' card-word__front_flipped';
    classBack = ' card-word__back_flipped';
  }
  if (gameMode) {
    classImage = ' card-word__front-image_active';
  }
  return (
    <div className="card-word active-card" onMouseLeave={() => setFlipped(false)} style={{ transform: `${rotation}` }}>
      <div className={`card-word__front${classFront}`} data-number="1" data-name={word} onClick={handleClickCard}>
        <div className={`card-word__front-image${classImage}`}>
          <img src={image} alt={word} />
        </div>
        <div className="card-word__front-name">{word}</div>
        <div className="reverse-button" data-number="1" onClick={() => setFlipped(true)} />
      </div>
      <div className={`card-word__back${classBack}`}>
        <div className="card-word__back-image">
          <img src={image} alt={translation} />
        </div>
        <div className="card-word__back-name">{translation}</div>
      </div>
    </div>
  );
};

export default Card;
