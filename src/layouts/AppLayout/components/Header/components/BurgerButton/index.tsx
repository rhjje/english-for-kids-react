import classNames from 'classnames';
import styles from './BurgerButton.module.scss';

interface BurgerButtonProps {
  onClickButton: () => void;
  menuOpen: boolean;
}

export const BurgerButton = ({
  onClickButton,
  menuOpen,
}: BurgerButtonProps) => (
  <div
    className={classNames(styles.Button, { [styles.ButtonActive]: menuOpen })}
    onClick={onClickButton}
  >
    <div className={styles.FirstLine} />
    <div className={styles.SecondLine} />
    <div className={styles.ThirdLine} />
  </div>
);
