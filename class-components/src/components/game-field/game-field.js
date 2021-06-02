import React from 'react';
import { withRouter } from 'react-router-dom';
import Card from './card';
import GameMode from './game-mode';
import ButtonPlay from './button-play';
import { countingStatistics } from '../statistics/statistics';
import data from '../../assets/JSON/cards.json';
import star from '../../assets/icons/star-win.svg';
import emptyStar from '../../assets/icons/star.svg';
import './game-field.scss';

class GameField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameMode: false,
      buttonRepeat: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClickPlay = this.handleClickPlay.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        gameMode: false,
        buttonRepeat: false
      });
    }
  }

  handleChange() {
    this.setState((prevState) => ({
      gameMode: !prevState.gameMode
    }));
  }

  handleClickPlay() {
    if (!this.state.buttonRepeat) {
      this.setState({
        buttonRepeat: true
      }, () => this.playGame());
    } else {
      this.currentAudio.play();
    }
  }

  playGame() {
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
      this.currentAudio = new Audio(`./sounds/${words[currentWord]}.mp3`);
      this.currentAudio.play();
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
                this.props.history.push('/final-page-game-over');
              } else {
                success.play();
                this.props.history.push('/final-page-win');
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
  }

  render() {
    const cards = data[this.props.match.params.id];
    sessionStorage.setItem('page', `${this.props.match.params.id}`);

    return (
      <div className="game-field">
        <GameMode
          gameMode={this.state.gameMode}
          handleChange={this.handleChange}
          key={this.props.match.params.id}
        />
        <div className="cards">
          {cards.map((card) => (
            <Card
              word={card.word}
              translation={card.translation}
              image={card.image}
              key={card.word}
              gameMode={this.state.gameMode}
            />
          ))}
        </div>
        {this.state.gameMode
          ? (
            <ButtonPlay
              buttonRepeat={this.state.buttonRepeat}
              onClick={this.handleClickPlay}
            />
          )
          : ''}
        <div className="game-score" />
      </div>
    );
  }
}

export default withRouter(GameField);
