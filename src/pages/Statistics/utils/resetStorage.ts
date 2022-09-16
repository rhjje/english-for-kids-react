import { StatisticsItem } from 'types/types';
import { StorageKeys } from 'utils/constants';

export const resetStorage = () => {
  const data: StatisticsItem[] = JSON.parse(
    localStorage.getItem(StorageKeys.Data) || '[]',
  );

  const resetArray = data.map((item: StatisticsItem) => ({
    word: item.word,
    translation: item.translation,
    category: item.category,
    clicks: 0,
    correct: 0,
    wrong: 0,
    percent: 0,
    image: item.image,
  }));

  localStorage.setItem(StorageKeys.Data, JSON.stringify(resetArray));
  localStorage.setItem(StorageKeys.DifficultWords, '[]');
};
