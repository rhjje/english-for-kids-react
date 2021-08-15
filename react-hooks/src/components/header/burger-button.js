import React from 'react';
import './burger-button.scss';

const BurgerButton = ({ onClickButton, menuOpen }) => (
  <div
    className={`burger-menu__button${menuOpen ? ' burger-menu__button_active' : ''}`}
    onClick={onClickButton}
  >
    <div className="first-line" />
    <div className="second-line" />
    <div className="third-line" />
  </div>
);

export default BurgerButton;
