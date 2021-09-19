export const addToArray = (arr, newEntry) => {
  if (arr.length === 5) {
    arr.shift();
    arr.push(newEntry);
  } else {
    arr.push(newEntry);
  }
  return arr;
};
