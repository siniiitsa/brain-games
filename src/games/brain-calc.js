import createGame from '../index.js';
import { getRandomInt } from '../helpers.js';

const rulesMessage = 'What is the result of the expression?';

const math = {
  operations: {
    add: { sign: '+', perform: (a, b) => a + b },
    subtract: { sign: '-', perform: (a, b) => a - b },
    multiply: { sign: '*', perform: (a, b) => a * b },
  },
  getRandomOperation() {
    const operations = Object.values(this.operations);
    return operations[getRandomInt(0, operations.length - 1)];
  },
};

const getQuestionData = () => {
  const min = 1;
  const max = 100;

  const num1 = getRandomInt(min, max);
  const num2 = getRandomInt(min, max);
  const { sign, perform } = math.getRandomOperation();

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
