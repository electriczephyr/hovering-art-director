const selectRandomFromArray = (arr) => {
  const i = Math.floor(Math.random() * arr.length);
  return arr[i];
};

export const getRandomPhrase = (arr) => {
  return selectRandomFromArray(arr);
};
