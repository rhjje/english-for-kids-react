import './burger-button.scss';

const BurgerButton = ({onClickButton, menuOpen}) => {
  let className = '';
  if (menuOpen) {
    className = ' burger-menu__button_active';
  }
  return (
    <div  className={"burger-menu__button" + className} onClick={onClickButton}>
      <div className="first-line"></div>
      <div className="second-line"></div>
      <div className="third-line"></div>
    </div>);
};

export default BurgerButton;