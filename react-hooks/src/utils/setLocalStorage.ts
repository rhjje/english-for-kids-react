import data from '../assets/JSON/cards.json';

interface Card {
  category: string;
  image: string;
  translation: string;
  word: string;
}

interface Categories {
  [key: string]: Card[];
}

interface Statistics {
  word: string;
  translation: string;
  category: string;
  clicks: number;
  correct: number;
  wrong: number;
  percent: number;
  image: string;
}

export const setLocalStorage = () => {
  const cards: Categories = JSON.parse(JSON.stringify(data));
  const array = [];

  for (const key in cards) {
    if (Object.prototype.hasOwnProperty.call(cards, key)) {
      array.push(cards[key]);
    }
  }

  const flatArray = array.flat();
  flatArray.sort((a, b) => (a.word > b.word ? 1 : -1));

  const statistics: Statistics[] = [];

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

  localStorage.setItem('data', JSON.stringify(statistics));
};
