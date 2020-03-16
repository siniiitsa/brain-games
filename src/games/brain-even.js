import { getRandomInt } from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const minNum = 1;
const maxNum = 100;

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const number = getRandomInt(minNum, maxNum);
  return {
    question: String(number),
    answer: isEven(number) ? 'yes' : 'no',
  };
};

export default {
  description,
  getGameData,
};
