import createGame from '../index.js';

const rulesMessage = 'What is the result of the expression?';

const getRandomInteger = (limit = 100) => Math.floor(Math.random() * limit) + 1;
const getRandomArrayElement = (array) => array[getRandomInteger(array.length) - 1];
const stringsToNumbers = (string) => Number(string) || string;
const getCorrectAnswer = (question) => {
  const [num1, operation, num2] = question.split(' ').map(stringsToNumbers);

  switch (operation) {
    case '+': return String(num1 + num2);
    case '-': return String(num1 - num2);
    case '*': return String(num1 * num2);
    default: return null;
  }
};
const getMathExpression = () => {
  const operations = ['+', '-', '*'];
  return [
    getRandomInteger(),
    getRandomArrayElement(operations),
    getRandomInteger(),
  ].join(' ');
};

const playBrainCalc = createGame({
  rulesMessage,
  getCorrectAnswer,
  getQuestion: getMathExpression,
});

export default playBrainCalc;
