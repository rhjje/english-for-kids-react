export const resetStorage = () => {
  const data = JSON.parse(localStorage.getItem('data'));
  const resetArray = data.map((item) => ({
    word: item.word,
    translation: item.translation,
    category: item.category,
    clicks: 0,
    correct: 0,
    wrong: 0,
    percent: 0,
    image: item.image,
  }));
  localStorage.setItem('data', JSON.stringify(resetArray));
  localStorage.setItem('difficult-words', JSON.stringify([]));
};
