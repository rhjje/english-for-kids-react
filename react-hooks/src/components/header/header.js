import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from './burger-menu';
import BurgerButton from './burger-button';
import './header.scss';

const Header = () => {
  const [show, setShow] = useState(false);

  let classBg = 'burger-menu__bg burger-menu__bg_disabled';
  if (show) {
    classBg = 'burger-menu__bg';
  }
  return (
    <header className="header">
      <BurgerButton
        onClickButton={() => setShow(!show)}
        menuOpen={show}
      />
      <Link to="/" className="title-wrapper">
        <h1 className="title">English for Kids</h1>
      </Link>
      <BurgerMenu
        menuState={show}
        closeMenu={() => setShow(!show)}
      />
      <div className={classBg} onClick={() => setShow(!show)} />
    </header>
  );
};

export default Header;
