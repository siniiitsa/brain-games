import { getRandomInt } from '../helpers.js';

const description = 'What number is missing in the progression?';

const calcProgressionNum = (startNum, diff, index) => startNum + diff * index;

const getGameData = () => {
  const progressionLength = 10;
  const startNum = getRandomInt(1, 10);
  const diff = getRandomInt(1, 10);

  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const nextNum = i === 0 ? startNum : calcProgressionNum(startNum, diff, i);
    progression.push(nextNum);
  }

  const missingNumIndex = getRandomInt(1, progressionLength - 2);
  progression[missingNumIndex] = '..';

  return {
    question: progression.join(' '),
    answer: String(calcProgressionNum(startNum, diff, missingNumIndex)),
  };
};

export default {
  description,
  getGameData,
};
