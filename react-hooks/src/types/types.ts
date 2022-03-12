export interface Card {
  category: string;
  image: string;
  translation: string;
  word: string;
}

export interface Categories {
  [key: string]: Card[];
}

export interface Statistics {
  word: string;
  translation: string;
  category: string;
  clicks: number;
  correct: number;
  wrong: number;
  percent: number;
  image: string;
}
