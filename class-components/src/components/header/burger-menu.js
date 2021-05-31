import { NavLink } from 'react-router-dom';
import './burger-menu.scss';

const BurgerMenu = ({menuOpen}) => {
  let classMenu = '';
  let classItem = '';
  if (menuOpen) {
    classMenu = ' burger-menu_open';
    classItem = ' navigation__item_open';
  }
  return (
    <div className={"burger-menu" + classMenu}>
      <ul className="navigation">
        <li className={"navigation__item" + classItem} data-number="main">
          <NavLink to="/" exact activeClassName="navigation__item_active">Main page</NavLink>
        </li>
        <li className={"navigation__item" + classItem} data-number="0">
          <NavLink to="/action-a" activeClassName="navigation__item_active">Action (set A)</NavLink>
        </li>
        <li className={"navigation__item" + classItem} data-number="1">
          <NavLink to="/action-b" activeClassName="navigation__item_active">Action (set B)</NavLink>
        </li>
        <li className={"navigation__item" + classItem} data-number="2">
          <NavLink to="/action-c" activeClassName="navigation__item_active">Action (set C)</NavLink>
        </li>
        <li className={"navigation__item" + classItem} data-number="3">
          <NavLink to="/adjective" activeClassName="navigation__item_active">Adjective</NavLink>
        </li>
        <li className={"navigation__item" + classItem} data-number="4">
          <NavLink to="/animal-a" activeClassName="navigation__item_active">Animal (set A)</NavLink>
        </li>
        <li className={"navigation__item" + classItem} data-number="5">
          <NavLink to="/animal-b" activeClassName="navigation__item_active">Animal (set B)</NavLink>
        </li>
        <li className={"navigation__item" + classItem} data-number="6">
          <NavLink to="/clothes" activeClassName="navigation__item_active">Clothes</NavLink>
          </li>
        <li className={"navigation__item" + classItem} data-number="7">
          <NavLink to="/emotion" activeClassName="navigation__item_active">Emotion</NavLink>
        </li>
        <li className={"navigation__item" + classItem} data-number="statistics">
          <NavLink to="/statistics" activeClassName="navigation__item_active">Statistics</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;