import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

import actionA from '../../assets/images/categories/actionA.jpg';
import actionB from '../../assets/images/categories/actionB.jpg';
import actionC from '../../assets/images/categories/actionC.jpg';
import adjective from '../../assets/images/categories/adjective.jpg';
import animalA from '../../assets/images/categories/animalA.jpg';
import animalB from '../../assets/images/categories/animalB.jpg';
import clothes from '../../assets/images/categories/clothes.jpg';
import emotion from '../../assets/images/categories/emotion.jpg';

const Home = () => (
  <div className="menu">
    <div className="menu-item">
      <Link to="/action-a" className="menu-item__image">
        <img src={actionA} alt="Action A" />
      </Link>
      <div className="menu-item__name">Action (set A)</div>
    </div>
    <div className="menu-item">
      <Link to="/action-b" className="menu-item__image">
        <img src={actionB} alt="Action B" />
      </Link>
      <div className="menu-item__name">Action (set B)</div>
    </div>
    <div className="menu-item">
      <Link to="/action-c" className="menu-item__image">
        <img src={actionC} alt="Action C" />
      </Link>
      <div className="menu-item__name">Action (set C)</div>
    </div>
    <div className="menu-item">
      <Link to="/adjective" className="menu-item__image">
        <img src={adjective} alt="Adjective" />
      </Link>
      <div className="menu-item__name">Adjective</div>
    </div>
    <div className="menu-item">
      <Link to="/animal-a" className="menu-item__image">
        <img src={animalA} alt="Animal A" />
      </Link>
      <div className="menu-item__name">Animal (set A)</div>
    </div>
    <div className="menu-item">
      <Link to="/animal-b" className="menu-item__image">
        <img src={animalB} alt="Animal B" />
      </Link>
      <div className="menu-item__name">Animal (set B)</div>
    </div>
    <div className="menu-item">
      <Link to="/clothes" className="menu-item__image">
        <img src={clothes} alt="Clothes" />
      </Link>
      <div className="menu-item__name">Clothes</div>
    </div>
    <div className="menu-item">
      <Link to="/emotion" className="menu-item__image">
        <img src={emotion} alt="Emotion" />
      </Link>
      <div className="menu-item__name">Emotion</div>
    </div>
    <div className="subtitle">Hello! choose a category:</div>
  </div>
);

export default Home;
