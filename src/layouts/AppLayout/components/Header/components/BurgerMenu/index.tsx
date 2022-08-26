import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useEscape } from 'hooks/useEscape';
import styles from './BurgerMenu.module.scss';

interface BurgerMenuProps {
  menuIsOpen: boolean;
  closeMenu: () => void;
}

export const BurgerMenu = ({ menuIsOpen, closeMenu }: BurgerMenuProps) => {
  const classItem = classNames(styles.NavigationItem, {
    [styles.NavigationItemActive]: menuIsOpen,
  });

  useEscape(closeMenu);

  return (
    <div
      className={classNames(styles.BurgerMenu, {
        [styles.BurgerMenuActive]: menuIsOpen,
      })}
    >
      <ul className={styles.Navigation}>
        <li className={classItem}>
          <NavLink
            to="/"
            exact
            className={styles.Link}
            activeClassName={styles.LinkActive}
            onClick={closeMenu}
          >
            Main page
          </NavLink>
        </li>
        <li className={classItem}>
          <NavLink
            to="/action-a"
            className={styles.Link}
            activeClassName={styles.LinkActive}
            onClick={closeMenu}
          >
            Action (set A)
          </NavLink>
        </li>
        <li className={classItem}>
          <NavLink
            to="/action-b"
            className={styles.Link}
            activeClassName={styles.LinkActive}
            onClick={closeMenu}
          >
            Action (set B)
          </NavLink>
        </li>
        <li className={classItem}>
          <NavLink
            to="/action-c"
            className={styles.Link}
            activeClassName={styles.LinkActive}
            onClick={closeMenu}
          >
            Action (set C)
          </NavLink>
        </li>
        <li className={classItem}>
          <NavLink
            to="/adjective"
            className={styles.Link}
            activeClassName={styles.LinkActive}
            onClick={closeMenu}
          >
            Adjective
          </NavLink>
        </li>
        <li className={classItem}>
          <NavLink
            to="/animal-a"
            className={styles.Link}
            activeClassName={styles.LinkActive}
            onClick={closeMenu}
          >
            Animal (set A)
          </NavLink>
        </li>
        <li className={classItem}>
          <NavLink
            to="/animal-b"
            className={styles.Link}
            activeClassName={styles.LinkActive}
            onClick={closeMenu}
          >
            Animal (set B)
          </NavLink>
        </li>
        <li className={classItem}>
          <NavLink
            to="/clothes"
            className={styles.Link}
            activeClassName={styles.LinkActive}
            onClick={closeMenu}
          >
            Clothes
          </NavLink>
        </li>
        <li className={classItem}>
          <NavLink
            to="/emotion"
            className={styles.Link}
            activeClassName={styles.LinkActive}
            onClick={closeMenu}
          >
            Emotion
          </NavLink>
        </li>
        <li className={classItem}>
          <NavLink
            to="/statistics"
            className={styles.Link}
            activeClassName={styles.LinkActive}
            onClick={closeMenu}
          >
            Statistics
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
