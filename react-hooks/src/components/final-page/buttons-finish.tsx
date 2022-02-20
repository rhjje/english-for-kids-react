import { FC } from 'react';
import { Button } from 'components/Button';
import './buttons-finish.scss';

interface Props {
  page: string | null;
}

const ButtonsFinish: FC<Props> = ({ page }) => (
  <div className="final-page__buttons">
    <Button to={`/${page}`}>New game</Button>
    <Button to="/">Main menu</Button>
  </div>
);

export default ButtonsFinish;
