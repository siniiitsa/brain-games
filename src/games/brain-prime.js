import createGame from '../index.js';
import { getRandomInt } from '../helpers.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minNum = 1;
const maxNum = 100;

const isPrime = (num) => {
  if (num < 1) return false;

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const getGameData = () => {
  const num = getRandomInt(minNum, maxNum);
  return {
    question: String(num),
    answer: isPrime(num) ? 'yes' : 'no',
  };
};

const playBrainPrime = createGame({
  rules,
  getGameData,
});

export default playBrainPrime;
