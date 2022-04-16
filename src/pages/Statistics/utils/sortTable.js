export const sortTable = (data, field, direction) => {
  const newData = JSON.parse(JSON.stringify(data));
  if (direction) {
    newData.sort((a, b) => (a[field] >= b[field] ? 1 : -1));
  } else {
    newData.sort((a, b) => (a[field] >= b[field] ? -1 : 1));
  }
  localStorage.setItem('data', JSON.stringify(newData));

  return newData;
};
