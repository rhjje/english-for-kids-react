import { useState, MouseEvent } from 'react';
import classNames from 'classnames';
import { countingStatistics } from 'utils/countingStatistics';
import styles from './Card.module.scss';

interface CardProps {
  word: string;
  translation: string;
  image: string;
  gameMode: boolean;
  cardRef: (element: HTMLDivElement) => void;
}

export const Card = ({
  word,
  translation,
  image,
  gameMode,
  cardRef,
}: CardProps) => {
  const [flipped, setFlipped] = useState(false);
  const [{ rotation, audio }] = useState(() => ({
    rotation: `rotate(${(Math.random() * (3 - -3) - 3).toFixed(1)}deg)`,
    audio: new Audio(`./sounds/${word}.mp3`),
  }));

  const handleClickCard = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.localName !== 'button' && !gameMode) {
      countingStatistics(word, 'clicks');
      audio.play();
    }
  };

  return (
    <div
      className={styles.Card}
      onMouseLeave={() => setFlipped(false)}
      style={{ transform: rotation }}
    >
      <div
        className={classNames(
          styles.FrontSide,
          flipped && styles.FrontSideFlipped,
        )}
        data-name={word}
        onClick={handleClickCard}
        ref={cardRef}
      >
        <div
          className={classNames(styles.Image, gameMode && styles.ImageActive)}
        >
          <img src={image} alt={word} />
        </div>
        <div className={styles.Word}>{word}</div>
        <button
          className={styles.Button}
          type="button"
          onClick={() => setFlipped(true)}
        />
      </div>
      <div
        className={classNames(
          styles.BackSide,
          flipped && styles.BackSideFlipped,
        )}
      >
        <div className={styles.Image}>
          <img src={image} alt={translation} />
        </div>
        <div className={styles.Word}>{translation}</div>
      </div>
    </div>
  );
};
