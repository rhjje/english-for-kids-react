import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectors } from 'redux-react';
import { Button } from 'components/Button';
import { failure, success } from 'assets/illustrations';
import styles from './FinalPage.module.scss';

export const FinalPage = () => {
  const history = useHistory();
  const mistakes = useSelector(selectors.mistakes);

  return (
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
        <Button onClick={history.goBack}>New game</Button>
        <Button to="/">Main menu</Button>
      </div>
    </section>
  );
};
