export const sortTable = (field, direction) => {
  const data = JSON.parse(localStorage.getItem('data'));
  if (direction === 'back') {
    data.sort((a, b) => (a[field] > b[field] ? -1 : 1));
  } else {
    data.sort((a, b) => (a[field] > b[field] ? 1 : -1));
  }
  localStorage.setItem('data', JSON.stringify(data));
};
