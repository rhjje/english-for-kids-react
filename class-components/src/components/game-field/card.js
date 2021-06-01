import React from 'react';
import './card.scss';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.audio = new Audio(`./sounds/${this.props.word}.mp3`);
    this.state = {
      cardFlipped: false
    };

    this.handleClickButton = this.handleClickButton.bind(this);
    this.handleClickCard = this.handleClickCard.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  handleClickButton() {
    this.setState({cardFlipped: true});
  }

  handleClickCard(event) {
    if (!event.target.classList.contains('reverse-button') && !this.props.gameMode) {
      this.audio.play();
    }
  }

  mouseLeave() {
    this.setState({cardFlipped: false});
  }

  render() {
    const { word, translation, image, gameMode } = this.props;
    let classFront = '';
    let classBack = '';
    let classImage = '';
    if (this.state.cardFlipped) {
      classFront = ' card-word__front_flipped';
      classBack = ' card-word__back_flipped';
    }
    if (gameMode) {
      classImage = ' card-word__front-image_active';
    }
    return (
      <div className="card-word active-card" onMouseLeave={this.mouseLeave}>
        <div className={"card-word__front" + classFront} data-number="1" data-name={word} onClick={this.handleClickCard}>
          <div className={"card-word__front-image" + classImage}>
            <img src={image} alt={word} />
          </div>
          <div className="card-word__front-name">{word}</div>
          <div className="reverse-button" data-number="1" onClick={this.handleClickButton}></div>
        </div>
        <div className={"card-word__back" + classBack}>
          <div className="card-word__back-image">
            <img src={image} alt={translation} />
          </div>
          <div className="card-word__back-name">{translation}</div>
        </div>
        </div>
    );
  }
}