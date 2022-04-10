export const formingListWords = () => {
  const data = JSON.parse(localStorage.getItem('data'));
  data.sort((a, b) => (a.wrong > b.wrong ? -1 : 1));
  const array = [];
  for (let i = 0; i < 8; i += 1) {
    if (data[i].wrong > 0) array.push(data[i]);
  }
  localStorage.setItem('difficult-words', JSON.stringify(array));
};
