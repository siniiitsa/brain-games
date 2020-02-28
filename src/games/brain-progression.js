import createGame from '../index.js';

const rulesMessage = 'What number is missing in the progression?';

const getRandomInt = (min, max) => (
  Math.floor(min + Math.random() * (max + 1 - min))
);

const stringToNumber = (string) => Number(string) || string;

const step = getRandomInt(1, 10);

const getProgression = (length = 10) => {
  const startNum = getRandomInt(1, 10);
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

const getCorrectAnswer = (progression) => {
  const numbers = progression
    .split(' ')
    .map(stringToNumber);

  const missingNumIndex = numbers.indexOf('..');
  const prev = numbers[missingNumIndex - 1];

  return String(prev + step);
};


const playBrainProgression = createGame({
  rulesMessage,
  getCorrectAnswer,
  getQuestion: getProgression,
});

export default playBrainProgression;
