import createGame from '../index.js';

const rulesMessage = 'Find the greatest common divisor of given numbers.';

const getRandomInteger = (limit = 100) => Math.floor(Math.random() * limit) + 1;
const getQuestion = () => `${getRandomInteger()} ${getRandomInteger()}`;
const stringsToNumbers = (string) => Number(string) || string;
const getGcd = (a, b) => (!b ? a : getGcd(b, a % b));
const getCorrectAnswer = (question) => {
  const [a, b] = question.split(' ').map(stringsToNumbers);
  return String(getGcd(a, b));
};

const playBrainCgd = createGame({
  rulesMessage,
  getCorrectAnswer,
  getQuestion,
});

export default playBrainCgd;
