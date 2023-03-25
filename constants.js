const selectRandomFromArray = (arr) => {
  const i = Math.floor(Math.random() * arr.length);
  return arr[i];
};

export const getRandomPhrase = (arr) => {
  return selectRandomFromArray(arr);
};

export const CHANGE_WHAT = [
  "What do you think, what should we change with this?",
  "Oh yeah, I think that looks great! Do you have more feedback for me?",
];

export const REPLICATE = 'replicate';
export const ART_DIRECTOR = 'art-director';
