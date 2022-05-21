import { telegram, github } from 'assets/illustrations';
import styles from './Footer.module.scss';

export const Footer = () => (
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
    <div className={styles.Created}>{new Date().getFullYear()}г.</div>
  </footer>
);
