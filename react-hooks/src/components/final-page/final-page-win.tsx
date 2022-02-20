import { FC } from 'react';
import ButtonsFinish from './buttons-finish';
import { success } from 'assets/illustrations';
import './final-page.scss';

interface Props {
  page: string | null;
}

export const FinalPageWin: FC<Props> = ({ page }) => (
  <section className="final-page">
    <span className="final-page__title">Congratulations! You win!</span>
    <div className="final-page__image">
      <img src={success} width="400" height="400" alt="Success" />
    </div>
    <ButtonsFinish page={page} />
  </section>
);
