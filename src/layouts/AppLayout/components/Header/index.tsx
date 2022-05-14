import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BurgerMenu } from './components/BurgerMenu';
import { BurgerButton } from './components/BurgerButton';
import styles from './Header.module.scss';

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header>
      <BurgerButton
        onClickButton={() => setMenuIsOpen(!menuIsOpen)}
        menuOpen={menuIsOpen}
      />
      {pathname === '/' ? (
        <h1 className={styles.Title}>English for Kids</h1>
      ) : (
        <Link to="/">
          <h1 className={styles.Title}>English for Kids</h1>
        </Link>
      )}
      <BurgerMenu
        menuState={menuIsOpen}
        closeMenu={() => setMenuIsOpen(!menuIsOpen)}
      />
      <div
        className={menuIsOpen ? styles.Bg : styles.BgDisabled}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      />
    </header>
  );
};
