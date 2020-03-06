import createGame from '../index.js';
import { getRandomInt } from '../helpers.js';

const rulesMessage = 'What is the result of the expression?';

const getRandomArrayElem = (array) => {
  const randIndex = getRandomInt(0, array.length - 1);
  return array[randIndex];
};

const operations = [
  { sign: '+', perform: (a, b) => a + b },
  { sign: '-', perform: (a, b) => a - b },
  { sign: '*', perform: (a, b) => a * b },
];

const getQuestionData = () => {
  const min = 1;
  const max = 100;

  const num1 = getRandomInt(min, max);
  const num2 = getRandomInt(min, max);
  const { sign, perform } = getRandomArrayElem(operations);

  return {
    question: `${num1} ${sign} ${num2}`,
    answer: String(perform(num1, num2)),
  };
};

const playBrainCalc = createGame({
  rulesMessage,
  getQuestionData,
});

export default playBrainCalc;
