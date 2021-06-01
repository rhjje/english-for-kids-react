import './game-mode.scss';

const GameMode = ({gameMode, handleChange}) => {
    let classTrain = ' mode__train_active';
    let classGame = '';
    if (gameMode) {
      classTrain = '';
      classGame = ' mode__game_active';
    }
    return (
      <div className="mode">
        <div className={"mode__train" + classTrain}>Train</div>
        <label className="mode__switch">
          <input type="checkbox" onChange={handleChange} />
          <span className="slider round"></span>
        </label>
        <div className={"mode__game" + classGame}>Play</div>
      </div>
    );
};

export default GameMode;