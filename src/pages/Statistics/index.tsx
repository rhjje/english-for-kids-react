import { useState, useEffect, MouseEvent } from 'react';
import { Button } from 'components/Button';
import { formingListWords } from './utils/formingListWords';
import { sortTable } from './utils/sortTable';
import { resetStorage } from './utils/resetStorage';
import { defaultActiveCell, StorageKeys } from 'utils/constants';
import { Nullable, ActiveCell, StatisticsItem } from 'types/types';
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

interface TableData {
  activeCell: ActiveCell;
  data: StatisticsItem[];
}

export const Statistics = () => {
  const [tableData, setTableData] = useState<Nullable<TableData>>(null);

  useEffect(() => {
    const activeCell = JSON.parse(
      localStorage.getItem(StorageKeys.ActiveCell) ||
        JSON.stringify(defaultActiveCell),
    );
    const data = JSON.parse(localStorage.getItem(StorageKeys.Data) || '[]');

    if (activeCell && data) {
      formingListWords();
      setTableData({ activeCell, data });
    }
  }, []);

  const handleClickReset = () => {
    resetStorage();
    setTableData((prevState) => ({
      activeCell: {
        ...prevState?.activeCell,
      } as ActiveCell,
      data: JSON.parse(localStorage.getItem(StorageKeys.Data) || '[]'),
    }));
  };

  const handleClickCell = (event: MouseEvent<HTMLTableCellElement>) => {
    const target = event.target as HTMLTableCellElement;

    if (tableData && target.innerText.includes(tableData.activeCell.title)) {
      setTableData((prevState) => {
        return prevState
          ? {
              activeCell: {
                ...prevState.activeCell,
                direction: !prevState?.activeCell.direction,
              },
              data: sortTable(
                prevState.data,
                prevState.activeCell.title.toLowerCase(),
                !prevState.activeCell.direction,
              ),
            }
          : null;
      });
    } else {
      setTableData((prevState) => {
        return prevState
          ? {
              activeCell: {
                title: target.innerText,
                direction: true,
              },
              data: sortTable(
                prevState.data,
                target.innerText.toLowerCase(),
                true,
              ),
            }
          : null;
      });
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
                  if (cell === tableData.activeCell.title) {
                    return (
                      <th
                        className={styles.Cell}
                        onClick={handleClickCell}
                        key={cell}
                      >
                        {`${
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
