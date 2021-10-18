import { FC } from 'react';
import './burger-button.scss';

interface Props {
  onClickButton: () => void;
  menuOpen: boolean;
}

const BurgerButton: FC<Props> = ({ onClickButton, menuOpen }) => (
  <div
    className={`burger-menu__button${menuOpen ? ' burger-menu__button_active' : ''}`}
    onClick={onClickButton}
  >
    <div className="first-line" />
    <div className="second-line" />
    <div className="third-line" />
  </div>
);

export default BurgerButton;
