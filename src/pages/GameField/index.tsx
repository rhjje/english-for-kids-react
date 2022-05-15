import { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Card } from './components/Card';
import { ToggleButton } from './components/ToggleButton';
import { ButtonPlay } from './components/ButtonPlay';
import { Button } from 'components/Button';
import { Nullable, Card as CardTypes } from 'types/types';
import styles from './GameField.module.scss';

import { countingStatistics } from 'utils/countingStatistics';

import data from '../../assets/JSON/cards.json';
import { starWin, star } from 'assets/illustrations';

interface GameFieldProps {
  onCountMistakes: (mistakes: number) => void;
  onSetPage: (id: string) => void;
}

type ParamsRouter = {
  id: string;
};

export const GameField = ({ onCountMistakes, onSetPage }: GameFieldProps) => {
  const { id } = useParams<ParamsRouter>();
  const history = useHistory();
  const [gameMode, setGameMode] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [audio, setAudio] = useState<Nullable<HTMLAudioElement>>(null);
  const [stars, setStars] = useState<boolean[]>([]);
  const cardsRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    onSetPage(id);
  }, [id, onSetPage]);

  useEffect(() => {
    if (!gameMode) {
      setRepeat(false);
      setStars([]);
    }
  }, [gameMode]);

  const playGame = () => {
    const correct = new Audio('./sounds/correct.mp3');
    const error = new Audio('./sounds/error.mp3');
    const success = new Audio('./sounds/success.mp3');
    const failure = new Audio('./sounds/failure.mp3');

    const words: Nullable<string>[] = [];
    cardsRefs.current.forEach((card) => {
      words.push(card.getAttribute('data-name'));
    });

    words.sort(() => Math.random() - 0.5);

    let currentWord = 0;
    let mistakes = 0;

    const wordsUsed: Nullable<string>[] = [];

    const sayWord = () => {
      const currentAudio = new Audio(`./sounds/${words[currentWord]}.mp3`);
      currentAudio.play();
      setAudio(currentAudio);
    };

    sayWord();

    cardsRefs.current.forEach((card) => {
      card.addEventListener('click', () => {
        if (card.getAttribute('data-name') === words[currentWord]) {
          card.style.filter = 'blur(5px)';
          card.parentElement?.classList.remove('active-card');
          correct.play();
          countingStatistics(`${words[currentWord]}`, 'correct');

          currentWord += 1;
          wordsUsed.push(card.getAttribute('data-name'));
          setStars((prevState) => [...prevState, true]);

          if (currentWord < words.length) {
            setTimeout(sayWord, 500);
          } else {
            setTimeout(() => {
              if (mistakes > 0) {
                failure.play();
              } else {
                success.play();
              }
              onCountMistakes(mistakes);
              history.push('/final-page');
            }, 1000);
          }
        } else if (!wordsUsed.includes(card.getAttribute('data-name'))) {
          setStars((prevState) => [...prevState, false]);
          error.play();
          countingStatistics(`${words[currentWord]}`, 'wrong');
          mistakes += 1;
        }
      });
    });
  };

  const handleClickPlay = () => {
    if (!repeat) {
      setRepeat(true);
      playGame();
    } else {
      audio?.play();
    }
  };

  const addCardRef = (element: HTMLDivElement) => {
    if (element && !cardsRefs.current.includes(element)) {
      cardsRefs.current.push(element);
    }
  };

  let cards: CardTypes[];
  if (id === 'repeat-difficult-words') {
    cards = JSON.parse(localStorage.getItem('difficult-words') || '[]');
  } else {
    cards = data[id as keyof typeof data];
  }

  if (cards.length === 0) {
    return (
      <div className={styles.Notification}>
        <div className={styles.Message}>There are no words yet :)</div>
        <Button to="/">Main menu</Button>
      </div>
    );
  }

  return (
    <div className={styles.GameField}>
      <ToggleButton
        gameMode={gameMode}
        handleChange={() => setGameMode(!gameMode)}
        key={id}
      />
      <div className={styles.Cards}>
        {cards.map((card) => (
          <Card
            cardRef={addCardRef}
            word={card.word}
            translation={card.translation}
            image={card.image}
            key={card.word}
            gameMode={gameMode}
          />
        ))}
      </div>
      {gameMode && (
        <ButtonPlay buttonRepeat={repeat} onClick={handleClickPlay} />
      )}
      <div className={styles.Scores}>
        {stars.map((item) => (
          <img src={item ? starWin : star} alt="" />
        ))}
      </div>
    </div>
  );
};
