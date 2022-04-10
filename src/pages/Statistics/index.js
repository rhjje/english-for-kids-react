import { useState, useEffect, useRef } from 'react';
import { Button } from 'components/Button';
import { formingListWords } from './utils/formingListWords';
import { sortTable } from './utils/sortTable';
import './Statistics.scss';

export const Statistics = () => {
  const [storage, setStorage] = useState(
    JSON.parse(localStorage.getItem('data')),
  );
  const thRefs = useRef([]);
  thRefs.current = [];

  useEffect(() => {
    if (localStorage.getItem('data')) {
      sortTable('word', 'forward');
      formingListWords();
      setStorage(JSON.parse(localStorage.getItem('data')));
    }
  }, []);

  const handleClickReset = () => {
    const data = JSON.parse(localStorage.getItem('data'));
    const resetArray = data.map((item) => ({
      word: item.word,
      translation: item.translation,
      category: item.category,
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
      image: item.image,
    }));
    localStorage.setItem('data', JSON.stringify(resetArray));
    localStorage.setItem('difficult-words', JSON.stringify([]));
    setStorage(JSON.parse(localStorage.getItem('data')));
  };

  const handleClickTh = (event) => {
    thRefs.current.forEach((head) => {
      if (head.innerText.match(/↓|↑/)) {
        head.innerText = head.innerText.substring(2);
      }
    });

    sortTable(
      event.target.getAttribute('data-value'),
      event.target.getAttribute('data-direction'),
    );

    let arrow;
    if (event.target.getAttribute('data-direction') === 'back') {
      arrow = '&uarr;';
      event.target.setAttribute('data-direction', 'forward');
    } else {
      arrow = '&darr;';
      event.target.setAttribute('data-direction', 'back');
    }

    switch (event.target.getAttribute('data-value')) {
      case 'word':
        thRefs.current[0].innerHTML = `${arrow} Word`;
        break;
      case 'translation':
        thRefs.current[1].innerHTML = `${arrow} Translation`;
        break;
      case 'category':
        thRefs.current[2].innerHTML = `${arrow} Category`;
        break;
      case 'clicks':
        thRefs.current[3].innerHTML = `${arrow} Clicks`;
        break;
      case 'correct':
        thRefs.current[4].innerHTML = `${arrow} Correct`;
        break;
      case 'wrong':
        thRefs.current[5].innerHTML = `${arrow} Wrong`;
        break;
      case 'percent':
        thRefs.current[6].innerHTML = `${arrow} % errors`;
        break;
      default:
        break;
    }
    setStorage(JSON.parse(localStorage.getItem('data')));
  };

  const addThRef = (element) => {
    if (element && !thRefs.current.includes(element)) {
      thRefs.current.push(element);
    }
  };

  return (
    <div className="statistics">
      <div className="statistics-buttons">
        <Button to="/repeat-difficult-words">Repeat difficult words</Button>
        <Button onClick={handleClickReset}>Reset</Button>
      </div>
      <div className="statistics-table">
        <table className="statistics-table__header">
          <thead>
            <tr onClick={handleClickTh}>
              <th ref={addThRef} data-value="word" data-direction="back">
                ↓ Word
              </th>
              <th
                ref={addThRef}
                data-value="translation"
                data-direction="forward"
              >
                Translation
              </th>
              <th ref={addThRef} data-value="category" data-direction="forward">
                Category
              </th>
              <th ref={addThRef} data-value="clicks" data-direction="forward">
                Clicks
              </th>
              <th ref={addThRef} data-value="correct" data-direction="forward">
                Correct
              </th>
              <th ref={addThRef} data-value="wrong" data-direction="forward">
                Wrong
              </th>
              <th ref={addThRef} data-value="percent" data-direction="forward">
                % errors
              </th>
            </tr>
          </thead>
        </table>
        <div className="statistics-table__body">
          <table className="table">
            {storage.map((item) => (
              <tbody key={item.word}>
                <tr>
                  <td>{item.word}</td>
                  <td>{item.translation}</td>
                  <td>{item.category}</td>
                  <td>{item.clicks}</td>
                  <td>{item.correct}</td>
                  <td>{item.wrong}</td>
                  <td>{item.percent}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};
