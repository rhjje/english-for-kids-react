import ButtonsFinish from './buttons-finish';
import failure from '../../assets/icons/failure.svg';
import './final-page.scss';

const FinalPageGameOver = () => {
  return (
    <section className="final-page">
      <span className="final-page__title">You lost(: Train and try again!<br/>
        You made {sessionStorage.getItem('mistakes')} mistake(s).</span>
      <div className="final-page__image">
        <img src={failure} width="400" height="400" alt="Victory"/>
      </div>
      <ButtonsFinish />
    </section>
  );
};

export default FinalPageGameOver;