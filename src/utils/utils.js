export const addToArray = (arr, newEntry) => {
  let newarr;
  if (arr.length === 5) {
    arr.shift();
    newarr = [...arr, newEntry];
  } else {
    newarr = [...arr, newEntry];
  }
  return newarr;
};
