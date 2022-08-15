import { StatisticsItem } from 'types/types';

export enum StatisticsCategory {
  Clicks = 'clicks',
  Correct = 'correct',
  Wrong = 'wrong',
}

export const countingStatistics = (
  word: string,
  category: StatisticsCategory,
) => {
  const data = JSON.parse(localStorage.getItem('data') || '[]');
  data.forEach((item: StatisticsItem) => {
    if (item.word === word) {
      switch (category) {
        case StatisticsCategory.Clicks:
          item.clicks += 1;
          break;
        case StatisticsCategory.Correct:
          item.correct += 1;
          break;
        case StatisticsCategory.Wrong:
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
