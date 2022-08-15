import { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { actions } from 'redux-react';
import { Card } from './components/Card';
import { ToggleButton } from './components/ToggleButton';
import { ButtonPlay } from './components/ButtonPlay';
import { Button } from 'components/Button';
import { Nullable, Card as CardTypes } from 'types/types';
import { Preloader } from 'components/Preloader';
import styles from './GameField.module.scss';

import {
  countingStatistics,
  StatisticsCategory,
} from 'utils/countingStatistics';

import data from '../../assets/JSON/cards.json';
import { starWin, star } from 'assets/illustrations';

const correct = new Audio('./sounds/correct.mp3');
const error = new Audio('./sounds/error.mp3');
const success = new Audio('./sounds/success.mp3');
const failure = new Audio('./sounds/failure.mp3');

type ParamsRouter = {
  id: string;
};

export const GameField = () => {
  const dispatch = useDispatch();
  const { id } = useParams<ParamsRouter>();
  const history = useHistory();

  const [loadedCards, setLoadedCards] = useState<number>(0);
  const [gameMode, setGameMode] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [audio, setAudio] = useState<Nullable<HTMLAudioElement>>(null);
  const [stars, setStars] = useState<boolean[]>([]);
  const [cards, setCards] = useState<Nullable<CardTypes[]>>(null);
  const cardsRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (id === 'repeat-difficult-words') {
      setCards(JSON.parse(localStorage.getItem('difficult-words') || '[]'));
    } else {
      setCards(data[id as keyof typeof data]);
    }
  }, [id]);

  useEffect(() => {
    if (!gameMode) {
      setRepeat(false);
      setStars([]);
    }
  }, [gameMode]);

  const playGame = () => {
    const words: string[] = cards!
      .map((card) => card.word)
      .sort(() => Math.random() - 0.5);

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
          countingStatistics(
            `${words[currentWord]}`,
            StatisticsCategory.Correct,
          );

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
              dispatch(actions.setMistakes(mistakes));
              history.push('/final-page');
            }, 1000);
          }
        } else if (!wordsUsed.includes(card.getAttribute('data-name'))) {
          setStars((prevState) => [...prevState, false]);
          error.play();
          countingStatistics(`${words[currentWord]}`, StatisticsCategory.Wrong);
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

  const addLoadedCard = () => {
    setLoadedCards((prevState) => prevState + 1);
  };

  if (cards?.length === 0) {
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

      <div
        className={classNames(styles.Preloader, {
          [styles.Disabled]: loadedCards === cards?.length,
        })}
      >
        <Preloader />
      </div>

      <div
        className={classNames(styles.Cards, {
          [styles.Disabled]: loadedCards !== cards?.length,
        })}
      >
        {cards?.map((card) => (
          <Card
            cardRef={addCardRef}
            word={card.word}
            translation={card.translation}
            image={card.image}
            key={card.word}
            gameMode={gameMode}
            addLoadedCard={addLoadedCard}
          />
        ))}
      </div>
      {gameMode && (
        <ButtonPlay buttonRepeat={repeat} onClick={handleClickPlay} />
      )}
      <div className={styles.Scores}>
        {stars.map((item, i) => (
          <img src={item ? starWin : star} alt="" key={i} />
        ))}
      </div>
    </div>
  );
};
