import { Link } from 'react-router-dom';
import './buttons-finish.scss';

const ButtonsFinish = () => {
  return (
    <div className="final-page__buttons">
      <Link to={"/" + sessionStorage.getItem('page')} className="new-game">New game</Link>
      <Link to="/" className="main-menu">Main menu</Link>
    </div>
  );
};

export default ButtonsFinish;