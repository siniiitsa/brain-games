import createGame from '../index.js';
import { getRandomInt } from '../helpers.js';

const rulesMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 1) return false;

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const getQuestionData = () => {
  const min = 1;
  const max = 100;

  const num = getRandomInt(min, max);
  return {
    question: String(num),
    answer: isPrime(num) ? 'yes' : 'no',
  };
};

const playBrainPrime = createGame({
  rulesMessage,
  getQuestionData,
});

export default playBrainPrime;
