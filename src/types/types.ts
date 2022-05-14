export type Nullable<T> = T | null;

export interface Card {
  category: string;
  image: string;
  translation: string;
  word: string;
}

export interface Categories {
  [key: string]: Card[];
}

export interface StatisticsItem {
  word: string;
  translation: string;
  category: string;
  clicks: number;
  correct: number;
  wrong: number;
  percent: number;
  image: string;
}

export interface ActiveCell {
  title: string;
  direction: boolean;
}
