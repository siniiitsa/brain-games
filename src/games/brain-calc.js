import createGame from '../index.js';
import { getRandomInt } from '../helpers.js';

const rules = 'What is the result of the expression?';

const minNum = 1;
const maxNum = 100;

const operations = [
  { sign: '+', perform: (a, b) => a + b },
  { sign: '-', perform: (a, b) => a - b },
  { sign: '*', perform: (a, b) => a * b },
];

const getRandomOperation = () => (
  operations[getRandomInt(0, operations.length - 1)]
);

const getGameData = () => {
  const num1 = getRandomInt(minNum, maxNum);
  const num2 = getRandomInt(minNum, maxNum);
  const { sign, perform } = getRandomOperation(operations);

  return {
    question: `${num1} ${sign} ${num2}`,
    answer: String(perform(num1, num2)),
  };
};

const playBrainCalc = createGame({
  rules,
  getGameData,
});

export default playBrainCalc;
