import React from 'react';
import { withRouter } from "react-router-dom";
import Card from './card';
import GameMode from './game-mode';
import ButtonPlay from './button-play';
import data from '../../assets/JSON/cards.json';
import './game-field.scss';

class GameField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameMode: false,
      buttonRepeat: false,
      gameOn: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClickPlay = this.handleClickPlay.bind(this);
  }

  handleChange() {
    this.setState({gameMode: !this.state.gameMode});
  }

  handleClickPlay() {
    if (!this.state.buttonRepeat) {
      this.setState({
        buttonRepeat: true,
        gameOn: true
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
      // console.log(card.getAttribute('data-name'));
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

          currentWord += 1;
          wordsUsed.push(card.getAttribute('data-name'));
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
          error.play();
          mistakes += 1;
        }
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.setState({
        gameMode: false,
        buttonRepeat: false
      });
    }
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
          ? <ButtonPlay 
          buttonRepeat={this.state.buttonRepeat} 
          onClick={this.handleClickPlay}
          /> 
          : ''}
      </div>
      );
  }
}

export default withRouter(GameField);