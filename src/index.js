import readlineSync from 'readline-sync';

const { log } = console;
const { question: askUser } = readlineSync;

const createGame = ({
  roundsCount = 3,
  rulesMessage,
  getQuestionData,
}) => () => {
  // greeting part
  log('Welcome to the Brain Games!');
  const userName = askUser('May I have your name? ');
  log(`Hello, ${userName}`);
  log(rulesMessage);

  // game part
  for (let roundNum = 1; roundNum <= roundsCount; roundNum += 1) {
    const { question, answer } = getQuestionData();
    const userAnswer = askUser(`Question: ${question} `);

    if (userAnswer !== answer) {
      log(`"${userAnswer}" is a wrong answer ;(. Correct answer was "${answer}".`);
      log(`Let's try again, ${userName}!`);
      return;
    }

    log('Correct!');
  }

  log(`Congratulations, ${userName}!`);
};

export default createGame;
