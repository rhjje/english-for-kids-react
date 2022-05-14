import { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Card } from './components/Card';
import { ToggleButton } from './components/ToggleButton';
import { ButtonPlay } from './components/ButtonPlay';
import { Button } from 'components/Button';
import { Nullable } from 'types/types';
import './GameField.scss';

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
  const [gameMode, setGameMode] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [audio, setAudio] = useState<Nullable<HTMLAudioElement>>(null);
  const { id } = useParams<ParamsRouter>();
  const history = useHistory();
  const scoreRef = useRef(null);
  const cardsRefs = useRef<HTMLDivElement[]>([]);
  cardsRefs.current = [];

  useEffect(() => {
    onSetPage(id);
  });

  useEffect(() => {
    setGameMode(false);
    setRepeat(false);
  }, [id]);

  const playGame = () => {
    const correct = new Audio('./sounds/correct.mp3');
    const error = new Audio('./sounds/error.mp3');
    const success = new Audio('./sounds/success.mp3');
    const failure = new Audio('./sounds/failure.mp3');
    // @ts-ignore
    const words = [];
    cardsRefs.current.forEach((card) => {
      words.push(card.getAttribute('data-name'));
    });
    // @ts-ignore
    words.sort(() => Math.random() - 0.5);

    let currentWord = 0;
    let mistakes = 0;
    // @ts-ignore
    const wordsUsed = [];

    const sayWord = () => {
      // @ts-ignore
      const currentAudio = new Audio(`./sounds/${words[currentWord]}.mp3`);
      currentAudio.play();
      setAudio(currentAudio);
    };

    sayWord();

    cardsRefs.current.forEach((card) => {
      card.addEventListener('click', () => {
        // @ts-ignore
        if (card.getAttribute('data-name') === words[currentWord]) {
          // @ts-ignore
          card.style.filter = 'blur(5px)';
          // @ts-ignore
          card.parentElement.classList.remove('active-card');
          correct.play();
          // @ts-ignore
          countingStatistics(`${words[currentWord]}`, 'correct');

          currentWord += 1;
          wordsUsed.push(card.getAttribute('data-name'));

          const stars = document.createElement('img');
          stars.src = starWin;
          // @ts-ignore
          scoreRef.current.append(stars);

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
          } // @ts-ignore
        } else if (!wordsUsed.includes(card.getAttribute('data-name'))) {
          const stars = document.createElement('img');
          stars.src = star;
          // @ts-ignore
          scoreRef.current.append(stars);
          error.play();
          // @ts-ignore
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

  let cards;
  if (id === 'repeat-difficult-words') {
    cards = JSON.parse(localStorage.getItem('difficult-words') || '[]');
  } else {
    // @ts-ignore
    cards = data[id];
  }

  if (cards.length === 0) {
    return (
      <div className="notification">
        <div className="error-message">There are no words yet :)</div>
        <Button to="/">Main menu</Button>
      </div>
    );
  }

  return (
    <div className="game-field">
      <ToggleButton
        gameMode={gameMode}
        handleChange={() => setGameMode(!gameMode)}
        key={id}
      />
      <div className="cards">
        {/* @ts-ignore */}
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
      <div className="game-score" ref={scoreRef} />
    </div>
  );
};
