import { StatisticsItem } from 'types/types';
import { StorageKeys } from 'utils/constants';

const capitalize = (string: string) =>
  string[0].toUpperCase() + string.slice(1);

export const sortTable = (
  data: StatisticsItem[],
  field: string,
  direction: boolean,
): StatisticsItem[] => {
  const newData: StatisticsItem[] = JSON.parse(JSON.stringify(data));

  if (direction) {
    newData.sort((a, b) => {
      if (a[field as keyof StatisticsItem] > b[field as keyof StatisticsItem]) {
        return 1;
      }

      if (a[field as keyof StatisticsItem] < b[field as keyof StatisticsItem]) {
        return -1;
      }

      return 0;
    });
  } else {
    newData.sort((a, b) => {
      if (a[field as keyof StatisticsItem] > b[field as keyof StatisticsItem]) {
        return -1;
      }

      if (a[field as keyof StatisticsItem] < b[field as keyof StatisticsItem]) {
        return 1;
      }

      return 0;
    });
  }

  localStorage.setItem(StorageKeys.Data, JSON.stringify(newData));
  localStorage.setItem(
    StorageKeys.ActiveCell,
    JSON.stringify({ title: capitalize(field), direction }),
  );

  return newData;
};
