import createGame from '../index.js';
import { getRandomInt } from '../helpers.js';

const rulesMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestion = () => getRandomInt(0, 100);

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const playBrainEven = createGame({
  rulesMessage,
  getCorrectAnswer,
  getQuestion,
});

export default playBrainEven;
