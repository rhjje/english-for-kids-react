import React, { useState, useEffect } from 'react';
import Card from './card';
import GameMode from './game-mode';
import ButtonPlay from './button-play';
import { countingStatistics } from '../statistics/statistics';
import data from '../../assets/JSON/cards.json';
import star from '../../assets/icons/star-win.svg';
import emptyStar from '../../assets/icons/star.svg';
import './game-field.scss';
import { MainMenu } from '../final-page/buttons-finish';

const GameField = (props) => {
  const [gameMode, setGameMode] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [audio, setAudio] = useState();

  useEffect(() => {
    setGameMode(false);
    setRepeat(false);
  }, [props.match.params.id]);

  const playGame = () => {
    const correct = new Audio('./sounds/correct.mp3');
    const error = new Audio('./sounds/error.mp3');
    const success = new Audio('./sounds/success.mp3');
    const failure = new Audio('./sounds/failure.mp3');
    const cards = document.querySelectorAll('.card-word__front');
    const words = [];
    cards.forEach((card) => {
      words.push(card.getAttribute('data-name'));
    });
    words.sort(() => Math.random() - 0.5);

    let currentWord = 0;
    let mistakes = 0;
    const wordsUsed = [];

    const sayWord = () => {
      const currentAudio = new Audio(`./sounds/${words[currentWord]}.mp3`);
      currentAudio.play();
      setAudio(currentAudio);
    };

    sayWord();

    cards.forEach((card, i) => {
      card.addEventListener('click', () => {
        if (card.getAttribute('data-name') === words[currentWord]) {
          card.style.filter = 'blur(5px)';
          const activeCard = document.querySelector(`.card-word:nth-child(${i + 1})`);
          activeCard.classList.remove('active-card');
          correct.play();
          countingStatistics(`${words[currentWord]}`, 'correct');

          currentWord += 1;
          wordsUsed.push(card.getAttribute('data-name'));

          const stars = document.createElement('img');
          stars.src = star;
          document.querySelector('.game-score').append(stars);

          if (currentWord < words.length) {
            setTimeout(sayWord, 500);
          } else {
            setTimeout(() => {
              if (mistakes > 0) {
                failure.play();
                sessionStorage.setItem('mistakes', `${mistakes}`);
                props.history.push('/final-page-game-over');
              } else {
                success.play();
                props.history.push('/final-page-win');
              }
            }, 1000);
          }
        } else if (!wordsUsed.includes(card.getAttribute('data-name'))) {
          const stars = document.createElement('img');
          stars.src = emptyStar;
          document.querySelector('.game-score').append(stars);
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
      audio.play();
    }
  };

  let cards;
  if (props.match.params.id === 'repeat-difficult-words') {
    cards = JSON.parse(localStorage.getItem('difficult-words'));
  } else {
    cards = data[props.match.params.id];
  }
  sessionStorage.setItem('page', `${props.match.params.id}`);

  if (cards.length === 0) {
    return (
      <div className="notification">
        <div className="error-message">There are no words yet :)</div>
        <MainMenu />
      </div>
    );
  }
  return (
    <div className="game-field">
      <GameMode
        gameMode={gameMode}
        handleChange={() => setGameMode(!gameMode)}
        key={props.match.params.id}
      />
      <div className="cards">
        {cards.map((card) => (
          <Card
            word={card.word}
            translation={card.translation}
            image={card.image}
            key={card.word}
            gameMode={gameMode}
          />
        ))}
      </div>
      {gameMode
        ? (
          <ButtonPlay
            buttonRepeat={repeat}
            onClick={handleClickPlay}
          />
        )
        : ''}
      <div className="game-score" />
    </div>
  );
};

export default GameField;
