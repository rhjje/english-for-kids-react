import { FC } from 'react';
import './ButtonPlay.scss';

interface Props {
  buttonRepeat: boolean;
  onClick: () => void;
}

const ButtonPlay: FC<Props> = ({ buttonRepeat, onClick }) => (
  <button
    type="button"
    className={`button-play${buttonRepeat ? ' button-play_repeat' : ''}`}
    onClick={onClick}
  >
    Start game
  </button>
);

export default ButtonPlay;
