import readlineSync from 'readline-sync';

const { log } = console;
const { question: askUser } = readlineSync;

const createGame = ({
  roundsCount = 3,
  rulesMessage,
  getCorrectAnswer,
  getQuestion,
}) => () => {
  // greeting part
  log('Welcome to the Brain Games!');
  const userName = askUser('May I have your name? ');
  log(`Hello, ${userName}`);
  log(rulesMessage);

  // game part
  for (let roundNum = 1; roundNum <= roundsCount; roundNum += 1) {
    const question = getQuestion();
    const userAnswer = askUser(`Question: ${question} `);
    const correctAnswer = getCorrectAnswer(question);

    if (userAnswer !== correctAnswer) {
      log(`"${userAnswer}" is a wrong answer ;(. Correct answer was "${correctAnswer}".`);
      log(`Let's try again, ${userName}!`);
      return;
    }

    log('Correct!');
  }

  log(`Congratulations, ${userName}!`);
};

export default createGame;
