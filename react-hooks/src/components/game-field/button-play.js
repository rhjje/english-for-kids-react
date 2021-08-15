import React from 'react';
import './button-play.scss';

const ButtonPlay = ({ buttonRepeat, onClick }) => (
  <button
    type="button"
    className={`button-play${buttonRepeat ? ' button-play_repeat' : ''}`}
    onClick={onClick}
  >
    Start game
  </button>
);

export default ButtonPlay;
