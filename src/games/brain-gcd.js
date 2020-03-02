import createGame from '../index.js';
import { getRandomInt, stringToNum } from '../helpers.js';

const rulesMessage = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => (
  !num2 ? num1 : getGcd(num2, num1 % num2)
);

const getQuestion = () => {
  const min = 1;
  const max = 100;
  return `${getRandomInt(min, max)} ${getRandomInt(min, max)}`;
};

const getCorrectAnswer = (question) => {
  const [a, b] = question.split(' ').map(stringToNum);
  return String(getGcd(a, b));
};

const playBrainCgd = createGame({
  rulesMessage,
  getCorrectAnswer,
  getQuestion,
});

export default playBrainCgd;
