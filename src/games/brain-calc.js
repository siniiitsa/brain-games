import createGame from '../index.js';
import { getRandomInt, stringToNum } from '../helpers.js';

const rulesMessage = 'What is the result of the expression?';

export const getRandomArrayElem = (array) => (
  array[getRandomInt(0, array.length - 1)]
);

const getMathExpression = () => {
  const operations = ['+', '-', '*'];
  const min = 1;
  const max = 100;

  return [
    getRandomInt(min, max),
    getRandomArrayElem(operations),
    getRandomInt(min, max),
  ].join(' ');
};

const getQuestion = getMathExpression;

const getCorrectAnswer = (question) => {
  const [num1, operation, num2] = question.split(' ').map(stringToNum);

  switch (operation) {
    case '+': return String(num1 + num2);
    case '-': return String(num1 - num2);
    case '*': return String(num1 * num2);
    default: return null;
  }
};

const playBrainCalc = createGame({
  rulesMessage,
  getCorrectAnswer,
  getQuestion,
});

export default playBrainCalc;
