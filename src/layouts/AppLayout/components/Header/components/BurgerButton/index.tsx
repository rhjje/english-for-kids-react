import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './BurgerButton.module.scss';

interface BurgerButtonProps extends HTMLAttributes<HTMLDivElement> {
  menuIsOpen: boolean;
}

export const BurgerButton = ({ menuIsOpen, ...props }: BurgerButtonProps) => (
  <div
    className={classNames(styles.Button, { [styles.ButtonActive]: menuIsOpen })}
    {...props}
  >
    <div className={styles.FirstLine} />
    <div className={styles.SecondLine} />
    <div className={styles.ThirdLine} />
  </div>
);
