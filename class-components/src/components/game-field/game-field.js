import React from 'react';
import { withRouter } from "react-router-dom";
import data from '../../assets/JSON/cards.json';
import './game-field.scss';

class GameField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cards = data[this.props.match.params.id];
 
    return (
      <div className="cards">
        {cards.map((card, i) => (
        <div className="card-word active-card" key={i}>
        <div className="card-word__front" data-number="1" data-name={card.word}>
          <div className="card-word__front-image">
            <img src={card.image} alt={card.word} />
          </div>
          <div className="card-word__front-name">{card.word}</div>
          <div className="reverse-button" data-number="1"></div>
        </div>
        <div className="card-word__back">
          <div className="card-word__back-image">
            <img src={card.image} alt={card.translation} />
          </div><div className="card-word__back-name">{card.translation}</div>
        </div>
        </div>
        ))}
      </div>);
  }
}

export default withRouter(GameField);