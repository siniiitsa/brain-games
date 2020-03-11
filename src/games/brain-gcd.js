import createGame from '../index.js';
import { getRandomInt } from '../helpers.js';

const rules = 'Find the greatest common divisor of given numbers.';

const minNum = 1;
const maxNum = 100;

const getGcd = (num1, num2) => (
  !num2 ? num1 : getGcd(num2, num1 % num2)
);

const getGameData = () => {
  const num1 = getRandomInt(minNum, maxNum);
  const num2 = getRandomInt(minNum, maxNum);

  return {
    question: `${num1} ${num2}`,
    answer: String(getGcd(num1, num2)),
  };
};

const playBrainCgd = createGame({
  rules,
  getGameData,
});

export default playBrainCgd;
