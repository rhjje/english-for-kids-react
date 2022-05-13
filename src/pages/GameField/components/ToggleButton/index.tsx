import classNames from 'classnames';
import styles from './ToggleButton.module.scss';

interface ToggleButtonProps {
  gameMode: boolean;
  handleChange: () => void;
}

export const ToggleButton = ({ gameMode, handleChange }: ToggleButtonProps) => (
  <div className={styles.ToggleButton}>
    <div
      className={classNames(
        styles.Description,
        !gameMode && styles.DescriptionACtive,
      )}
    >
      Train
    </div>
    <label className={styles.Switch}>
      <input
        className={styles.SwitchField}
        type="checkbox"
        onChange={handleChange}
      />
      <span className={styles.SwitchRound} />
    </label>
    <div
      className={classNames(
        styles.Description,
        gameMode && styles.DescriptionACtive,
      )}
    >
      Play
    </div>
  </div>
);
