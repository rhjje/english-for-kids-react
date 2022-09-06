import { useState } from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { BurgerMenu } from './components/BurgerMenu';
import { BurgerButton } from './components/BurgerButton';
import styles from './Header.module.scss';

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className={styles.Header}>
      <BurgerButton
        onClick={() => setMenuIsOpen((prevState) => !prevState)}
        menuIsOpen={menuIsOpen}
      />
      {pathname === '/' ? (
        <h1 className={styles.Title}>English for Kids</h1>
      ) : (
        <Link to="/">
          <h1 className={styles.Title}>English for Kids</h1>
        </Link>
      )}
      <BurgerMenu
        menuIsOpen={menuIsOpen}
        closeMenu={() => setMenuIsOpen(false)}
      />
      <div
        className={classNames(styles.Bg, !menuIsOpen && styles.BgDisabled)}
        onClick={() => setMenuIsOpen(false)}
      />
    </header>
  );
};
