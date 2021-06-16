import React from 'react';
import ButtonsFinish from './buttons-finish';
import failure from '../../assets/icons/failure.svg';
import './final-page.scss';

const FinalPageGameOver = ({ mistakes, page }) => (
  <section className="final-page">
    <span className="final-page__title">
      You lost(: Train and try again!
      <br />
      {`You made ${mistakes} mistake(s).`}
    </span>
    <div className="final-page__image">
      <img src={failure} width="400" height="400" alt="Victory" />
    </div>
    <ButtonsFinish page={page} />
  </section>
);

export default FinalPageGameOver;
