import data from '../../assets/JSON/cards.json';
import './statistics.scss';
import StatisticsButtons from './statistics-buttons';

const setLocalStorage = () => {
  const array = [];
  for (let key in data) {
    array.push(data[key]);
  }
  const flatArray = array.flat();
  flatArray.sort((a, b) => (a.word > b.word ? 1 : -1))
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
      image: item.image,
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

const Statistics = () => {
  const dataForTable = JSON.parse(localStorage.getItem('data'));
  return (
    <div className="statistics">
      <StatisticsButtons />
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
};

export default Statistics;
export { countingStatistics, setLocalStorage };