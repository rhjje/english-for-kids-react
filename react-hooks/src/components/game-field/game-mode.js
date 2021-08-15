import React from 'react';
import './game-mode.scss';

const GameMode = ({ gameMode, handleChange }) => (
  <div className="mode">
    <div className={`mode__train${gameMode ? '' : ' mode__train_active'}`}>Train</div>
    <label className="mode__switch">
      <input type="checkbox" onChange={handleChange} />
      <span className="slider round" />
    </label>
    <div className={`mode__game${gameMode ? ' mode__game_active' : ''}`}>Play</div>
  </div>
);

export default GameMode;
