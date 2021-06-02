import React from 'react';
import cards from '../../assets/JSON/cards.json';
import './statistics.scss';
import StatisticsButtons from './statistics-buttons';

const setLocalStorage = () => {
  const array = [];
  for (const key in cards) {
    if (Object.prototype.hasOwnProperty.call(cards, key)) {
      array.push(cards[key]);
    }
  }
  const flatArray = array.flat();
  flatArray.sort((a, b) => (a.word > b.word ? 1 : -1));
  const statistics = [];
  flatArray.forEach((item) => {
    const currentObj = {
      word: item.word,
      translation: item.translation,
      category: item.category,
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
      image: item.image
    };
    statistics.push(currentObj);
  });
  localStorage.setItem('data', `${JSON.stringify(statistics)}`);
};

const countingStatistics = (word, category) => {
  const data = JSON.parse(localStorage.getItem('data'));
  data.forEach((item) => {
    if (item.word === word) {
      switch (category) {
        case 'clicks':
          item.clicks += 1;
          break;
        case 'correct':
          item.correct += 1;
          break;
        case 'wrong':
          item.wrong += 1;
          break;
        default:
          break;
      }
      if (item.wrong + item.correct > 0) {
        item.percent = +((item.wrong * 100) / (item.wrong + item.correct)).toFixed(1);
      }
    }
  });
  localStorage.setItem('data', `${JSON.stringify(data)}`);
};

const formingListWords = () => {
  const data = JSON.parse(localStorage.getItem('data'));
  data.sort((a, b) => (a.wrong > b.wrong ? -1 : 1));
  const array = [];
  for (let i = 0; i < 8; i += 1) {
    if (data[i].wrong > 0) array.push(data[i]);
  }
  localStorage.setItem('difficult-words', `${JSON.stringify(array)}`);
};

const sortTable = (field, direction) => {
  const data = JSON.parse(localStorage.getItem('data'));
  if (direction === 'back') {
    data.sort((a, b) => (a[field] > b[field] ? -1 : 1));
  } else {
    data.sort((a, b) => (a[field] > b[field] ? 1 : -1));
  }
  localStorage.setItem('data', `${JSON.stringify(data)}`);
};

sortTable('word', 'forward');

export default class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickReset = this.handleClickReset.bind(this);
    this.handleClickTh = this.handleClickTh.bind(this);
  }

  handleClickReset() {
    const data = JSON.parse(localStorage.getItem('data'));
    const resetArray = data.map((item) => ({
      word: item.word,
      translation: item.translation,
      category: item.category,
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
      image: item.image
    }));
    localStorage.setItem('data', `${JSON.stringify(resetArray)}`);
    localStorage.removeItem('difficult-words');
    this.forceUpdate();
  }

  handleClickTh(event) {
    const heads = document.querySelectorAll('th');
    heads.forEach((head) => {
      if (head.innerText.match(/↓|↑/)) {
        head.innerText = head.innerText.substring(2);
      }
    });

    sortTable(event.target.getAttribute('data-value'), event.target.getAttribute('data-direction'));

    let arrow;
    if (event.target.getAttribute('data-direction') === 'back') {
      arrow = '&uarr;';
      event.target.setAttribute('data-direction', 'forward');
    } else {
      arrow = '&darr;';
      event.target.setAttribute('data-direction', 'back');
    }

    let title;
    switch (event.target.getAttribute('data-value')) {
      case 'word':
        title = document.querySelector('th:first-child');
        break;
      case 'translation':
        title = document.querySelector('th:nth-child(2)');
        break;
      case 'category':
        title = document.querySelector('th:nth-child(3)');
        break;
      case 'clicks':
        title = document.querySelector('th:nth-child(4)');
        break;
      case 'correct':
        title = document.querySelector('th:nth-child(5)');
        break;
      case 'wrong':
        title = document.querySelector('th:nth-child(6)');
        break;
      case 'percent':
        title = document.querySelector('th:last-child');
        break;
      default:
        break;
    }
    title.innerHTML = `${arrow} ${title.innerHTML}`;
    this.forceUpdate();
  }

  render() {
    formingListWords();
    const dataForTable = JSON.parse(localStorage.getItem('data'));
    return (
      <div className="statistics">
        <StatisticsButtons onClickReset={this.handleClickReset} />
        <div className="statistics-table">
          <table className="statistics-table__header">
            <thead>
              <tr onClick={this.handleClickTh}>
                <th data-value="word" data-direction="back">↓ Word</th>
                <th data-value="translation" data-direction="forward">Translation</th>
                <th data-value="category" data-direction="forward">Category</th>
                <th data-value="clicks" data-direction="forward">Clicks</th>
                <th data-value="correct" data-direction="forward">Correct</th>
                <th data-value="wrong" data-direction="forward">Wrong</th>
                <th data-value="percent" data-direction="forward">% errors</th>
              </tr>
            </thead>
          </table>
          <div className="statistics-table__body">
            <table className="table">
              {dataForTable.map((item) => (
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
  }
}

export { countingStatistics, setLocalStorage };
