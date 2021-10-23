export const addToArray = (arr, newEntry) => {
  let newarr;
  if (arr.length === 5) {
    arr.pop();
    newarr = [newEntry, ...arr];
  } else {
    newarr = [newEntry, ...arr];
  }
  return newarr;
};


export const clearHistory = (keyName) => {
  localStorage.removeItem(keyName);
};
