import { Button } from 'components/Button';
import { failure, success } from 'assets/illustrations';
import styles from './FinalPage.module.scss';

interface FinalPageProps {
  page: string | null;
  mistakes: number | null;
}

export const FinalPage = ({ page, mistakes }: FinalPageProps) => (
  <section className={styles.FinalPage}>
    {mistakes ? (
      <>
        <span className={styles.Title}>
          You lost(: Train and try again!
          <br />
          {`You made ${mistakes} mistake(s).`}
        </span>
        <div className={styles.Image}>
          <img src={failure} width="400" height="400" alt="Failure" />
        </div>
      </>
    ) : (
      <>
        <span className={styles.Title}>Congratulations! You win!</span>
        <div className={styles.Image}>
          <img src={success} width="400" height="400" alt="Success" />
        </div>
      </>
    )}
    <div className={styles.Buttons}>
      <Button to={`/${page}`}>New game</Button>
      <Button to="/">Main menu</Button>
    </div>
  </section>
);
