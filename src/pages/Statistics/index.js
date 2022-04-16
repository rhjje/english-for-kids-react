import { useState, useEffect } from 'react';
import { Button } from 'components/Button';
import { formingListWords } from './utils/formingListWords';
import { sortTable } from './utils/sortTable';
import { resetStorage } from './utils/resetStorage';
import styles from './Statistics.module.scss';

const cells = [
  'Word',
  'Translation',
  'Category',
  'Clicks',
  'Correct',
  'Wrong',
  '% errors',
];

export const Statistics = () => {
  const [storage, setStorage] = useState(
    JSON.parse(localStorage.getItem('data')),
  );

  const [activeCell, setActiveCell] = useState({
    title: 'Word',
    direction: true,
  });

  useEffect(() => {
    if (localStorage.getItem('data')) {
      sortTable(storage, 'word', 'forward');
      formingListWords();
      setStorage(JSON.parse(localStorage.getItem('data')));
    }
  }, []);

  const handleClickReset = () => {
    resetStorage();
    setStorage(JSON.parse(localStorage.getItem('data')));
  };

  const handleClickCell = (event) => {
    if (event.target.innerText.includes(activeCell.title)) {
      setActiveCell((prevState) => ({
        ...prevState,
        direction: !prevState.direction,
      }));
      setStorage((prevState) =>
        sortTable(
          prevState,
          activeCell.title.toLowerCase(),
          !activeCell.direction,
        ),
      );
    } else {
      setActiveCell({
        title: event.target.innerText,
        direction: true,
      });
      setStorage((prevState) =>
        sortTable(prevState, event.target.innerText.toLowerCase(), true),
      );
    }
  };

  return (
    <div className={styles.Statistics}>
      <div className={styles.Buttons}>
        <Button to="/repeat-difficult-words">Repeat difficult words</Button>
        <Button onClick={handleClickReset}>Reset</Button>
      </div>
      <div className={styles.Table}>
        <table className={styles.TableHeader}>
          <thead className={styles.TableHead}>
            <tr>
              {cells.map((cell) => {
                if (cell === activeCell.title) {
                  return (
                    <th
                      className={styles.Cell}
                      onClick={handleClickCell}
                      key={cell}
                    >
                      {`${activeCell.direction ? '↓' : '↑'} ${cell}`}
                    </th>
                  );
                }
                return (
                  <th
                    className={styles.Cell}
                    onClick={handleClickCell}
                    key={cell}
                  >
                    {cell}
                  </th>
                );
              })}
            </tr>
          </thead>
        </table>
        <div className={styles.Main}>
          <table className={styles.MainTable}>
            {storage.map((item) => (
              <tbody className={styles.MainTableBody} key={item.word}>
                <tr>
                  <td className={styles.Cell}>{item.word}</td>
                  <td className={styles.Cell}>{item.translation}</td>
                  <td className={styles.Cell}>{item.category}</td>
                  <td className={styles.Cell}>{item.clicks}</td>
                  <td className={styles.Cell}>{item.correct}</td>
                  <td className={styles.Cell}>{item.wrong}</td>
                  <td className={styles.Cell}>{item.percent}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};
