import React from 'react';
import ButtonsFinish from './buttons-finish';
import success from '../../assets/icons/success.svg';
import './final-page.scss';

const FinalPageWin = () => (
  <section className="final-page">
    <span className="final-page__title">Congratulations! You win!</span>
    <div className="final-page__image">
      <img src={success} width="400" height="400" alt="Victory" />
    </div>
    <ButtonsFinish />
  </section>
);

export default FinalPageWin;
