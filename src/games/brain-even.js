import createGame from '../index.js';

const rulesMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;
const getRandomInteger = (limit = 100) => Math.floor(Math.random() * limit) + 1;
const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const playBrainEven = createGame({
  rulesMessage,
  getCorrectAnswer,
  getQuestion: getRandomInteger,
});

export default playBrainEven;
