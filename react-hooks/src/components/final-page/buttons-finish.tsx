import { FC } from 'react';
import { Link } from 'react-router-dom';
import './buttons-finish.scss';

interface Props {
  page: string | null;
}

const MainMenu = () => (
  <Link to="/" className="main-menu">Main menu</Link>
);

const ButtonsFinish: FC<Props> = ({ page }) => (
  <div className="final-page__buttons">
    <Link to={`/${page}`} className="new-game">New game</Link>
    <MainMenu />
  </div>
);

export default ButtonsFinish;
export { MainMenu };
