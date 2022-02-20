import { FC } from 'react';
import ButtonsFinish from './buttons-finish';
import { failure } from 'assets/illustrations';
import './final-page.scss';

interface Props {
  mistakes: number | null;
  page: string | null;
}

export const FinalPageGameOver: FC<Props> = ({ mistakes, page }) => (
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
