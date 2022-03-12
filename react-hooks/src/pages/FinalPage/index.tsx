import { Button } from 'components/Button';
import { failure, success } from 'assets/illustrations';
import './final-page.scss';

interface FinalPageProps {
  page: string | null;
  mistakes: number | null;
}

export const FinalPage = ({ page, mistakes }: FinalPageProps) => (
  <section className="final-page">
    {mistakes ? (
      <>
        <span className="final-page__title">
          You lost(: Train and try again!
          <br />
          {`You made ${mistakes} mistake(s).`}
        </span>
        <div className="final-page__image">
          <img src={failure} width="400" height="400" alt="Failure" />
        </div>
      </>
    ) : (
      <>
        <span className="final-page__title">Congratulations! You win!</span>
        <div className="final-page__image">
          <img src={success} width="400" height="400" alt="Success" />
        </div>
      </>
    )}
    <div className="final-page__buttons">
      <Button to={`/${page}`}>New game</Button>
      <Button to="/">Main menu</Button>
    </div>
  </section>
);
