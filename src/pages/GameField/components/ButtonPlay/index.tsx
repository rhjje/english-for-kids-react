import classNames from 'classnames';
import styles from './ButtonPlay.module.scss';

interface ButtonPlayProps {
  buttonRepeat: boolean;
  onClick: () => void;
}

export const ButtonPlay = ({ buttonRepeat, onClick }: ButtonPlayProps) => (
  <button
    type="button"
    className={classNames(
      styles.ButtonPlay,
      buttonRepeat && styles.ButtonPlayRepeat,
    )}
    onClick={onClick}
  >
    Start game
  </button>
);
