/* eslint-disable import/prefer-default-export */
export const getRandomInt = (min, max) => (
  Math.floor(min + Math.random() * (max + 1 - min))
);
