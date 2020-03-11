import createGame from '../index.js';
import { getRandomInt } from '../helpers.js';

const rules = 'What number is missing in the progression?';

const calcProgressionNum = (startNum, diff, index) => startNum + diff * index;

const getGameData = (progressionLength = 10) => {
  const startNum = getRandomInt(1, 10);
  const diff = getRandomInt(1, 10);

  const progression = [startNum];
  for (let i = 1; i < progressionLength; i += 1) {
    const nextNum = calcProgressionNum(startNum, diff, i);
    progression.push(nextNum);
  }

  const missingNumIndex = getRandomInt(1, progressionLength - 2);
  progression[missingNumIndex] = '..';

  return {
    question: progression.join(' '),
    answer: String(calcProgressionNum(startNum, diff, missingNumIndex)),
  };
};

const playBrainProgression = createGame({
  rules,
  getGameData,
});

export default playBrainProgression;
