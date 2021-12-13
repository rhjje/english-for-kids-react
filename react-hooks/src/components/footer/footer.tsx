import { FC, useEffect, useState } from 'react';
import telegram from '../../assets/icons/telegram.svg';
import github from '../../assets/icons/github.svg';
import styles from './footer.module.scss';

export const Footer: FC = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const data = new Date();
    setYear(data.getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <a href="tg://resolve?domain=@rhjje" className={styles.telegram}>
          <img src={telegram} alt="Telegram" />
        </a>
        <a
          href="https://github.com/rhjje"
          className={styles.git}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" />
        </a>
      </div>
      <div className={styles.created}>{year}г.</div>
    </footer>
  );
};
