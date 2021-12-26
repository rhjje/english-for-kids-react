import { useState, FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BurgerMenu } from './burger-menu';
import { BurgerButton } from './burger-button';
import styles from './header.module.scss';

export const Header: FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header>
      <BurgerButton
        onClickButton={() => setMenuIsOpen(!menuIsOpen)}
        menuOpen={menuIsOpen}
      />
      {pathname === '/' ? (
        <h1 className={styles.title}>English for Kids</h1>
      ) : (
        <Link to="/">
          <h1 className={styles.title}>English for Kids</h1>
        </Link>
      )}
      <BurgerMenu
        menuState={menuIsOpen}
        closeMenu={() => setMenuIsOpen(!menuIsOpen)}
      />
      <div
        className={menuIsOpen ? styles.bg : styles.disabled}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      />
    </header>
  );
};
