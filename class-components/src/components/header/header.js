import React from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from './burger-menu';
import BurgerButton from './burger-button';
import './header.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({menuOpen: !this.state.menuOpen});
  }

  render() {
  let classBg = 'burger-menu__bg burger-menu__bg_disabled';
  if (this.state.menuOpen) {
    classBg = 'burger-menu__bg';
  }
    return (
      <header className="header">
        <BurgerButton 
          onClickButton={this.handleClick} 
          menuOpen={this.state.menuOpen} 
        />
        <Link to="/" className="title-wrapper">
          <h1 className="title">English for Kids</h1>
        </Link> 
        <BurgerMenu 
          menuState={this.state.menuOpen} 
          closeMenu={this.handleClick}
        />
        <div className={classBg} onClick={this.handleClick}></div>
      </header>
    ); 
  }
}
