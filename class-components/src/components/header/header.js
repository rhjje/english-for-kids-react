import React from 'react';
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
        <h1 className="title">English for Kids</h1>
        <BurgerMenu menuOpen={this.state.menuOpen} />
        <div className={classBg}></div>
      </header>
    ); 
  }
}
