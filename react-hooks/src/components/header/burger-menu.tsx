import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './burger-menu.module.scss';

interface Props {
  menuState: boolean;
  closeMenu: () => void;
}

export const BurgerMenu: FC<Props> = ({ menuState, closeMenu }) => {
  const classItem = classNames(styles.item, { [styles.item_open]: menuState });

  return (
    <div
      className={classNames(styles['burger-menu'], {
        [styles.menu_open]: menuState,
      })}
    >
      <ul className={styles.navigation}>
        <li className={classItem}>
          <NavLink
            to="/"
            exact
            activeClassName={styles.active}
            onClick={closeMenu}
          >
            Main page
          </NavLink>
        </li>
        <li className={classItem}>
          <NavLink
            to="/action-a"
            activeClassName={styles.active}
            onClick={closeMenu}
          >
            Action (set A)
          </NavLink>
        </li>
        <li className={classItem}>
          <NavLink
            to="/action-b"
            activeClassName={styles.active}
            onClick={closeMenu}
          >
            Action (set B)
          </NavLink>
        </li>
        <li className={classItem}>
          <NavLink
            to="/action-c"
            activeClassName={styles.active}
            onClick={closeMenu}
          >
            Action (set C)
          </NavLink>
        </li>
        <li className={classItem}>
          <NavLink
            to="/adjective"
            activeClassName={styles.active}
            onClick={closeMenu}
          >
            Adjective
          </NavLink>
        </li>
        <li className={classItem}>
          <NavLink
            to="/animal-a"
            activeClassName={styles.active}
            onClick={closeMenu}
          >
            Animal (set A)
          </NavLink>
        </li>
        <li className={classItem}>
          <NavLink
            to="/animal-b"
            activeClassName={styles.active}
            onClick={closeMenu}
          >
            Animal (set B)
          </NavLink>
        </li>
        <li className={classItem}>
          <NavLink
            to="/clothes"
            activeClassName={styles.active}
            onClick={closeMenu}
          >
            Clothes
          </NavLink>
        </li>
        <li className={classItem}>
          <NavLink
            to="/emotion"
            activeClassName={styles.active}
            onClick={closeMenu}
          >
            Emotion
          </NavLink>
        </li>
        <li className={classItem}>
          <NavLink
            to="/statistics"
            activeClassName={styles.active}
            onClick={closeMenu}
          >
            Statistics
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
