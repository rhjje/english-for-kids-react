import { useEffect, useState } from 'react';
import { telegram, github } from 'assets/illustrations';
import { Nullable } from 'types/types';
import styles from './Footer.module.scss';

export const Footer = () => {
  const [year, setYear] = useState<Nullable<number>>(null);

  useEffect(() => {
    const data = new Date();
    setYear(data.getFullYear());
  }, []);

  return (
    <footer className={styles.Footer}>
      <div className={styles.Contacts}>
        <a href="tg://resolve?domain=@rhjje" className={styles.Contact}>
          <img src={telegram} alt="Telegram" />
        </a>
        <a
          href="https://github.com/rhjje"
          className={styles.Contact}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" />
        </a>
      </div>
      <div className={styles.Created}>{year}г.</div>
    </footer>
  );
};
