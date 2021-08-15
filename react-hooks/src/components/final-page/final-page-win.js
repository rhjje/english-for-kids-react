import React from 'react';
import ButtonsFinish from './buttons-finish';
import './final-page.scss';
import success from '../../assets/icons/success.svg';

const FinalPageWin = ({ page }) => (
  <section className="final-page">
    <span className="final-page__title">Congratulations! You win!</span>
    <div className="final-page__image">
      <img src={success} width="400" height="400" alt="Success" />
    </div>
    <ButtonsFinish page={page} />
  </section>
);

export default FinalPageWin;
