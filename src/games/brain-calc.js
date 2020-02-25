import createGame from '../index.js';

const rulesMessage = 'What is the result of the expression?';

const getRandomInteger = (limit = 100) => Math.floor(Math.random() * limit) + 1;
const getRandomArrayElement = (array) => array[getRandomInteger(array.length) - 1];
const getCorrectAnswer = (question) => String(eval(question));
const getMathExpression = () => {
  const operations = ['+', '-', '*'];
  return `${getRandomInteger()} ${getRandomArrayElement(operations)} ${getRandomInteger()}`;
};

const playBrainCalc = createGame({
  rulesMessage,
  getCorrectAnswer,
  getQuestion: getMathExpression,
});

export default playBrainCalc;
