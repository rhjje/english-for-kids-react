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

export default class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
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

  render() {
    formingListWords();
    const dataForTable = JSON.parse(localStorage.getItem('data'));
    return (
      <div className="statistics">
        <StatisticsButtons onClickReset={this.handleClick} />
        <div className="statistics-table">
          <table className="statistics-table__header">
            <thead>
              <tr>
                <th>↓ Word</th>
                <th>Translation</th>
                <th>Category</th>
                <th>Clicks</th>
                <th>Correct</th>
                <th>Wrong</th>
                <th>% errors</th>
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
