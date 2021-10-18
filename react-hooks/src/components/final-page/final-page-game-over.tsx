import { FC } from 'react';
import ButtonsFinish from './buttons-finish';
import './final-page.scss';
import failure from '../../assets/icons/failure.svg';

interface Props {
  mistakes: number | null;
  page: string | null;
}

const FinalPageGameOver: FC<Props> = ({ mistakes, page }) => (
  <section className="final-page">
    <span className="final-page__title">
      You lost(: Train and try again!
      <br />
      {`You made ${mistakes} mistake(s).`}
    </span>
    <div className="final-page__image">
      <img src={failure} width="400" height="400" alt="Failure" />
    </div>
    <ButtonsFinish page={page} />
  </section>
);

export default FinalPageGameOver;
