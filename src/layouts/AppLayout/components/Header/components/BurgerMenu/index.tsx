import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './BurgerMenu.module.scss';

interface BurgerMenuProps {
  menuState: boolean;
  closeMenu: () => void;
}

export const BurgerMenu = ({ menuState, closeMenu }: BurgerMenuProps) => {
  const classItem = classNames(styles.NavigationItem, {
    [styles.NavigationItemActive]: menuState,
  });

  return (
    <div
      className={classNames(styles.BurgerMenu, {
        [styles.BurgerMenuActive]: menuState,
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
