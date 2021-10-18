import { FC } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

const Home: FC = () => (
  <div className="main">
    <div className="menu">
      <div className="menu-item">
        <Link to="/action-a" className="menu-item__image">
          <img src="./images/categories/actionA.jpg" alt="Action A" />
        </Link>
        <div className="menu-item__name">Action (set A)</div>
      </div>
      <div className="menu-item">
        <Link to="/action-b" className="menu-item__image">
          <img src="./images/categories/actionB.jpg" alt="Action B" />
        </Link>
        <div className="menu-item__name">Action (set B)</div>
      </div>
      <div className="menu-item">
        <Link to="/action-c" className="menu-item__image">
          <img src="./images/categories/actionC.jpg" alt="Action C" />
        </Link>
        <div className="menu-item__name">Action (set C)</div>
      </div>
      <div className="menu-item">
        <Link to="/adjective" className="menu-item__image">
          <img src="./images/categories/adjective.jpg" alt="Adjective" />
        </Link>
        <div className="menu-item__name">Adjective</div>
      </div>
      <div className="menu-item">
        <Link to="/animal-a" className="menu-item__image">
          <img src="./images/categories/animalA.jpg" alt="Animal A" />
        </Link>
        <div className="menu-item__name">Animal (set A)</div>
      </div>
      <div className="menu-item">
        <Link to="/animal-b" className="menu-item__image">
          <img src="./images/categories/animalB.jpg" alt="Animal B" />
        </Link>
        <div className="menu-item__name">Animal (set B)</div>
      </div>
      <div className="menu-item">
        <Link to="/clothes" className="menu-item__image">
          <img src="./images/categories/clothes.jpg" alt="Clothes" />
        </Link>
        <div className="menu-item__name">Clothes</div>
      </div>
      <div className="menu-item">
        <Link to="/emotion" className="menu-item__image">
          <img src="./images/categories/emotion.jpg" alt="Emotion" />
        </Link>
        <div className="menu-item__name">Emotion</div>
      </div>
      <div className="subtitle">Hello! choose a category:</div>
    </div>
  </div>
);

export default Home;
