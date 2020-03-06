import createGame from '../index.js';
import { getRandomInt } from '../helpers.js';

const rulesMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionData = () => {
  const number = getRandomInt(0, 100);
  return {
    question: String(number),
    answer: isEven(number) ? 'yes' : 'no',
  };
};

const playBrainEven = createGame({
  rulesMessage,
  getQuestionData,
});

export default playBrainEven;
