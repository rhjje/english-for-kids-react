import { StatisticsItem } from 'types/types';

export const countingStatistics = (word: string, category: string) => {
  const data = JSON.parse(localStorage.getItem('data') || '[]');
  data.forEach((item: StatisticsItem) => {
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
        item.percent = +(
          (item.wrong * 100) /
          (item.wrong + item.correct)
        ).toFixed(1);
      }
    }
  });
  localStorage.setItem('data', JSON.stringify(data));
};
