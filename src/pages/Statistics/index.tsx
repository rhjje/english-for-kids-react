import { useState, useEffect, MouseEvent } from 'react';
import { Button } from 'components/Button';
import { formingListWords } from './utils/formingListWords';
import { sortTable } from './utils/sortTable';
import { resetStorage } from './utils/resetStorage';
import { defaultActiveCell } from 'utils/constants';
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
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    const activeCell = JSON.parse(
      localStorage.getItem('activeCell') || JSON.stringify(defaultActiveCell),
    );
    const data = JSON.parse(localStorage.getItem('data') || '[]');

    if (activeCell && data) {
      formingListWords();
      // @ts-ignore
      setTableData({ activeCell, data });
    }
  }, []);

  const handleClickReset = () => {
    resetStorage();
    // @ts-ignore
    JSON.parse(localStorage.getItem('data'));
    setTableData((prevState) => ({
      // @ts-ignore
      ...prevState,
      // @ts-ignore
      data: JSON.parse(localStorage.getItem('data')),
    }));
  };

  const handleClickCell = (event: MouseEvent<HTMLTableCellElement>) => {
    const target = event.target as HTMLTableCellElement;
    // @ts-ignore
    if (target.innerText.includes(tableData.activeCell.title)) {
      // @ts-ignore
      setTableData((prevState) => ({
        activeCell: {
          // @ts-ignore
          ...prevState.activeCell,
          // @ts-ignore
          direction: !prevState.activeCell.direction,
        },
        data: sortTable(
          // @ts-ignore
          prevState.data,
          // @ts-ignore
          prevState.activeCell.title.toLowerCase(),
          // @ts-ignore
          !prevState.activeCell.direction,
        ),
      }));
    } else {
      // @ts-ignore
      setTableData((prevState) => ({
        activeCell: {
          title: target.innerText,
          direction: true,
        },
        // @ts-ignore
        data: sortTable(prevState.data, target.innerText.toLowerCase(), true),
      }));
    }
  };

  return (
    tableData && (
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
                  // @ts-ignore
                  if (cell === tableData.activeCell.title) {
                    return (
                      <th
                        className={styles.Cell}
                        onClick={handleClickCell}
                        key={cell}
                      >
                        {`${
                          // @ts-ignore
                          tableData.activeCell.direction ? '↓' : '↑'
                        } ${cell}`}
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
              {/* @ts-ignore */}
              {tableData.data.map((item) => (
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
    )
  );
};
