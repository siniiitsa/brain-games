export const getRandomInt = (min, max) => (
  Math.floor(min + Math.random() * (max + 1 - min))
);

export const stringToNum = (string) => Number(string) || string;

export const getRandomArrayElem = (array) => (
  array[getRandomInt(0, array.length - 1)]
);
