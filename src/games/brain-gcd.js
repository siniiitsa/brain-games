import createGame from '../index.js';
import { getRandomInt } from '../helpers.js';

const rulesMessage = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => (
  !num2 ? num1 : getGcd(num2, num1 % num2)
);

const getQuestionData = () => {
  const min = 1;
  const max = 100;

  const num1 = getRandomInt(min, max);
  const num2 = getRandomInt(min, max);

  return {
    question: `${num1} ${num2}`,
    answer: String(getGcd(num1, num2)),
  };
};

const playBrainCgd = createGame({
  rulesMessage,
  getQuestionData,
});

export default playBrainCgd;
