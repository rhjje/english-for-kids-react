const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

export const sortTable = (data, field, direction) => {
  const newData = JSON.parse(JSON.stringify(data));
  if (direction) {
    newData.sort((a, b) => (a[field] >= b[field] ? 1 : -1));
  } else {
    newData.sort((a, b) => (a[field] >= b[field] ? -1 : 1));
  }
  localStorage.setItem('data', JSON.stringify(newData));
  localStorage.setItem(
    'activeCell',
    JSON.stringify({ title: capitalize(field), direction }),
  );

  return newData;
};
