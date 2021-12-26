import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import { Preloader } from '../preloader/preloader';
import data from '../../assets/JSON/cards.json';
import styles from './home.module.scss';

interface ISections {
  word: string;
  translation: string;
  image: string;
  category: string;
  link: string;
  key: string;
}

export const Home: FC = () => {
  const [uploadedImages, setUploadedImages] = useState<number>(0);
  const [sections, setSections] = useState<ISections[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem('sections')) {
      const array = JSON.parse(sessionStorage.getItem('sections')!);
      setSections(array);
    } else {
      const links = Object.keys(data);
      const array = Object.values(data).map((item, i) => {
        const randomIndex = Math.floor(Math.random() * item.length);
        const randomItem: any = item[randomIndex];
        randomItem.link = links[i];
        randomItem.key = uuidv4();
        return randomItem;
      });
      sessionStorage.setItem('sections', JSON.stringify(array));
      setSections(array);
    }
  }, []);

  return (
    <div className={styles.main}>
      <div
        className={classNames(styles.preloader, {
          [styles.disabled]: uploadedImages === 8,
        })}
      >
        <Preloader />
      </div>
      <div
        className={classNames(styles.menu, {
          [styles.disabled]: uploadedImages !== 8,
        })}
      >
        {sections.map((item) => (
          <div className={styles['menu-item']} key={item.key}>
            <Link to={`/${item.link}`} className={styles.image}>
              <img
                onLoad={() => setUploadedImages((prevState) => prevState + 1)}
                src={item.image}
                alt={item.category}
              />
            </Link>
            <div className={styles.name}>{item.category}</div>
          </div>
        ))}
        <div className={styles.subtitle}>Hello! choose a category:</div>
      </div>
    </div>
  );
};
