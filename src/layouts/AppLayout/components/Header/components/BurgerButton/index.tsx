import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './BurgerButton.module.scss';

interface BurgerButtonProps extends HTMLAttributes<HTMLButtonElement> {
  menuIsOpen: boolean;
}

export const BurgerButton = ({ menuIsOpen, ...props }: BurgerButtonProps) => (
  <button
    className={classNames(styles.Button, { [styles.ButtonActive]: menuIsOpen })}
    {...props}
  >
    <div className={styles.LinesWrapper}>
      <div className={styles.FirstLine} />
      <div className={styles.SecondLine} />
      <div className={styles.ThirdLine} />
    </div>
  </button>
);
