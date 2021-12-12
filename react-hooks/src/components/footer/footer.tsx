import { FC, useEffect, useState } from 'react';
import './footer.scss';
import telegram from '../../assets/icons/telegram.svg';
import github from '../../assets/icons/github.svg';

export const Footer: FC = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const data = new Date();
    setYear(data.getFullYear());
  }, []);

  return (
    <footer className="footer">
      <div className="contacts">
        <a href="tg://resolve?domain=@rhjje" className="telegram">
          <img src={telegram} alt="Telegram" />
        </a>
        <a
          href="https://github.com/rhjje"
          className="git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" />
        </a>
      </div>
      <div className="created">{year}г.</div>
    </footer>
  );
};
