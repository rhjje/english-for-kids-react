import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import { StorageKeys } from 'utils/constants';
import { Preloader } from 'components/Preloader';
import data from '../../assets/JSON/cards.json';
import styles from './Home.module.scss';

interface Sections {
  [key: string]: string;
}

export const Home = () => {
  const [uploadedImages, setUploadedImages] = useState<number>(0);
  const [sections, setSections] = useState<Sections[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem(StorageKeys.Sections)) {
      const array = JSON.parse(sessionStorage.getItem(StorageKeys.Sections)!);
      setSections(array);
    } else {
      const links = Object.keys(data);
      const array = Object.values(data).map((item, i) => {
        const randomIndex = Math.floor(Math.random() * item.length);
        const randomItem: Sections = item[randomIndex];
        randomItem.link = links[i];
        randomItem.key = uuidv4();
        return randomItem;
      });
      sessionStorage.setItem(StorageKeys.Sections, JSON.stringify(array));
      setSections(array);
    }
  }, []);

  return (
    <div className={styles.Main}>
      <div
        className={classNames(styles.Preloader, {
          [styles.Disabled]: uploadedImages === 8,
        })}
      >
        <Preloader />
      </div>

      <div
        className={classNames(styles.Menu, {
          [styles.Disabled]: uploadedImages !== 8,
        })}
      >
        {sections.map((item) => (
          <div className={styles.MenuItem} key={item.key}>
            <Link to={`/${item.link}`} className={styles.Image}>
              <img
                onLoad={() => setUploadedImages((prevState) => prevState + 1)}
                src={item.image}
                alt={item.category}
              />
            </Link>
            <div className={styles.Name}>{item.category}</div>
          </div>
        ))}
        <div className={styles.Subtitle}>Hello! choose a category:</div>
      </div>
    </div>
  );
};
