import { useState, MouseEvent, FC } from 'react';
import { countingStatistics } from 'utils/countingStatistics';
import './Card.scss';

interface Props {
  word: string;
  translation: string;
  image: string;
  gameMode: boolean;
  cardRef: any;
}

const Card: FC<Props> = ({ word, translation, image, gameMode, cardRef }) => {
  const [flipped, setFlipped] = useState(false);
  const [rotation] = useState(
    `rotate(${(Math.random() * (3 - -3) - 3).toFixed(1)}deg)`,
  );

  const audio = new Audio(`./sounds/${word}.mp3`);
  const classFront = `card-word__front${
    flipped ? ' card-word__front_flipped' : ''
  }`;
  const classBack = `card-word__back${
    flipped ? ' card-word__back_flipped' : ''
  }`;
  const classImage = `card-word__front-image${
    gameMode ? ' card-word__front-image_active' : ''
  }`;

  const handleClickCard = (event: MouseEvent) => {
    const target = event.target as Element;
    if (!target.classList.contains('reverse-button') && !gameMode) {
      countingStatistics(`${word}`, 'clicks');
      audio.play();
    }
  };

  return (
    <div
      className="card-word active-card"
      onMouseLeave={() => setFlipped(false)}
      style={{ transform: `${rotation}` }}
    >
      <div
        className={classFront}
        data-number="1"
        data-name={word}
        onClick={handleClickCard}
        ref={cardRef}
      >
        <div className={classImage}>
          <img src={image} alt={word} />
        </div>
        <div className="card-word__front-name">{word}</div>
        <div
          className="reverse-button"
          data-number="1"
          onClick={() => setFlipped(true)}
        />
      </div>
      <div className={classBack}>
        <div className="card-word__back-image">
          <img src={image} alt={translation} />
        </div>
        <div className="card-word__back-name">{translation}</div>
      </div>
    </div>
  );
};

export default Card;
