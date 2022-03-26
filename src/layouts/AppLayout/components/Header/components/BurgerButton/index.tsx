import { FC } from 'react';
import classNames from 'classnames';
import styles from './BurgerButton.module.scss';

interface Props {
  onClickButton: () => void;
  menuOpen: boolean;
}

export const BurgerButton: FC<Props> = ({ onClickButton, menuOpen }) => (
  <div
    className={classNames(styles.button, { [styles.active]: menuOpen })}
    onClick={onClickButton}
  >
    <div className={styles['first-line']} />
    <div className={styles['second-line']} />
    <div className={styles['third-line']} />
  </div>
);
