import React from 'react';
import { Link } from 'react-router-dom';
import './buttons-finish.scss';

const ButtonsFinish = () => (
  <div className="final-page__buttons">
    <Link to={`/${sessionStorage.getItem('page')}`} className="new-game">New game</Link>
    <MainMenu />
  </div>
);

const MainMenu = () => (
  <Link to="/" className="main-menu">Main menu</Link>
);

export default ButtonsFinish;
export { MainMenu };
