import createGame from '../index.js';
import { getRandomInt, stringToNum } from '../helpers.js';


const rulesMessage = 'What number is missing in the progression?';

const step = getRandomInt(1, 10);

const getProgression = (length = 10) => {
  const min = 1;
  const max = 10;
  const startNum = getRandomInt(min, max);
  let newNum = startNum;

  const progression = new Array(length)
    .fill(startNum)
    .map((num, index) => {
      if (index === 0) {
        return num;
      }

      newNum += step;
      return newNum;
    });

  const missingNumIndex = getRandomInt(1, length - 2);
  progression[missingNumIndex] = '..';

  return progression.join(' ');
};

const getQuestion = getProgression;

const getCorrectAnswer = (progression) => {
  const numbers = progression
    .split(' ')
    .map(stringToNum);

  const missingNumIndex = numbers.indexOf('..');
  const prev = numbers[missingNumIndex - 1];

  return String(prev + step);
};

const playBrainProgression = createGame({
  rulesMessage,
  getCorrectAnswer,
  getQuestion,
});

export default playBrainProgression;
