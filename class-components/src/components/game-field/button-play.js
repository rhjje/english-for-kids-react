import './button-play.scss';

const ButtonPlay = ({buttonRepeat, onClick}) => {
  let classButton = '';
  if (buttonRepeat) {
    classButton = ' button-play_repeat'
  }
  return (
    <button className={"button-play" + classButton} onClick={onClick}>Start game</button>
  );
};

export default ButtonPlay;