import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import './statistics-buttons.scss';

interface Props {
  onClickReset: () => void;
}

const StatisticsButtons: FC<Props> = ({ onClickReset }) => {
  const history = useHistory();
  return (
    <div className="statistics-buttons">
      <button
        type="button"
        className="repeat-button"
        onClick={() => history.push('/repeat-difficult-words')}
      >
        Repeat difficult words
      </button>
      <button type="button" className="reset-button" onClick={onClickReset}>
        Reset
      </button>
    </div>
  );
};

export default StatisticsButtons;
