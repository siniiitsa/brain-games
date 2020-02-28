import createGame from '../index.js';

const rulesMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomInt = (min, max) => (
  Math.floor(min + Math.random() * (max + 1 - min))
);

const isPrime = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getQuestion = () => getRandomInt(1, 100);

const getCorrectAnswer = (question) => {
  const num = Number(question);
  return isPrime(num) ? 'yes' : 'no';
};

const playBrainPrime = createGame({
  rulesMessage,
  getCorrectAnswer,
  getQuestion,
});

export default playBrainPrime;
