import readlineSync from 'readline-sync';

const { log } = console;
const { question: ask } = readlineSync;

const getUserName = () => ask('May I have your name? ');

const createGame = ({
  rounds = 3,
  rulesMessage,
  getCorrectAnswer,
  getQuestion,
}) => () => {
  // greeting part
  log('Welcome to the Brain Games!');
  const userName = getUserName();
  log(`Hello, ${userName}`);
  log(rulesMessage);

  // game part
  let userWin = true;
  // eslint-disable-next-line no-restricted-syntax
  for (let round = 1; round <= rounds; round += 1) {
    const question = getQuestion();
    const userAnswer = ask(`Question: ${question} `);
    const correctAnswer = getCorrectAnswer(question);

    if (userAnswer === correctAnswer) {
      log('Correct!');
    } else {
      log(`"${userAnswer}" is a wrong answer ;(. Correct answer was "${correctAnswer}".`);
      log(`Let's try again, ${userName}!`);
      userWin = false;
      break;
    }
  }

  if (userWin) {
    log(`Congratulations, ${userName}!`);
  }
};

export default createGame;
